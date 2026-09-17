import type {
  Destination,
  Festival,
  SeasonalTip,
  Theme,
  TripSettings,
} from "@/types/destination";

export const EMPTY_SETTINGS: TripSettings = {
  transport: null,
  startDate: null,
  endDate: null,
  month: null,
  includeExcluded: false,
};

/** 박 수. 날짜 미입력이면 null, 당일치기면 0 */
export function tripNights(s: TripSettings): number | null {
  if (!s.startDate || !s.endDate) return null;
  const ms = new Date(s.endDate).getTime() - new Date(s.startDate).getTime();
  if (Number.isNaN(ms)) return null;
  return Math.max(0, Math.round(ms / 86_400_000));
}

/** 여행이 걸치는 월 목록 (1~12). 월만 아는 경우 [month] */
export function tripMonths(s: TripSettings): number[] {
  if (s.startDate && s.endDate) {
    const out = new Set<number>();
    const d = new Date(s.startDate);
    const end = new Date(s.endDate);
    while (d <= end && out.size < 12) {
      out.add(d.getMonth() + 1);
      d.setDate(d.getDate() + 1);
    }
    return [...out];
  }
  if (s.month) return [s.month];
  return [];
}

function fmt(dateIso: string): string {
  const d = new Date(dateIso);
  const w = d.toLocaleDateString("ko-KR", { weekday: "short" });
  return `${d.getMonth() + 1}.${d.getDate()}(${w})`;
}

/** '10.24(토) ~ 10.26(월) · 2박 3일' / '10월 중' / null */
export function formatTrip(s: TripSettings): string | null {
  const n = tripNights(s);
  if (s.startDate && s.endDate && n !== null) {
    const len = n === 0 ? "당일치기" : `${n}박 ${n + 1}일`;
    if (n === 0) return `${fmt(s.startDate)} · 당일치기`;
    return `${fmt(s.startDate)} ~ ${fmt(s.endDate)} · ${len}`;
  }
  if (s.month) return `${s.month}월 중`;
  return null;
}

export function formatTransport(s: TripSettings): string | null {
  if (s.transport === "car") return "자차·렌터카";
  if (s.transport === "transit") return "대중교통";
  return null;
}

/** 카드에 표시할 접근성 한 줄 (내 교통편 기준, 서울 출발) */
export function accessLine(d: Destination, s: TripSettings): { icon: string; text: string } {
  if (s.transport === "car") {
    const note = d.access.car.note ? ` · ${d.access.car.note}` : "";
    return { icon: "🚗", text: `서울에서 ${d.access.car.time}${note}` };
  }
  if (s.transport === "transit") {
    return { icon: "🚆", text: `${d.access.transit.summary} · ${d.access.localMobility}` };
  }
  return { icon: "🧭", text: `서울 기준 🚗 ${d.access.car.time} / 🚆 ${d.access.transit.summary}` };
}

/** 조건과 안 맞는 부분 — 탈락 사유가 아니라 고민의 재료 */
export function warnings(d: Destination, s: TripSettings): string[] {
  const out: string[] = [];
  if (s.transport === "transit" && d.access.localMobility === "자차·렌터카 권장") {
    out.push("현지는 렌터카 권장");
  }
  const n = tripNights(s);
  if (n === 0 && d.tripFit.dayTrip === "빠듯") out.push("당일치기는 빠듯");
  if (n !== null && n > 0) {
    // 추천 박수보다 훨씬 짧으면 살짝 알림 (예: 울릉도 1박)
    if (d.tripFit.recommendedNights.startsWith("2박") && n < 2) out.push("2박 이상 추천");
  }
  return out;
}

/** 조건상 사실상 불가능 → 소프트 제외 (당일치기 + 울릉도 등) */
export function isExcluded(d: Destination, s: TripSettings): boolean {
  if (s.includeExcluded) return false;
  const n = tripNights(s);
  return n === 0 && d.tripFit.dayTrip === "불가";
}

export function matchedTips(d: Destination, s: TripSettings): SeasonalTip[] {
  const months = tripMonths(s);
  if (months.length === 0) return [];
  return d.seasonalTips.filter((t) => t.months.some((m) => months.includes(m)));
}

export function matchedFestivals(d: Destination, s: TripSettings): Festival[] {
  const months = tripMonths(s);
  if (months.length === 0) return [];
  return d.festivals.filter((f) => f.months.some((m) => months.includes(m)));
}

export interface CardSignal {
  kind: "peak" | "tip" | "festival";
  text: string;
}

/** 카드에 노출할 시기 신호 — 과밀 방지를 위해 최대 2개 (제철 > 축제 > 일반 팁) */
export function cardSignals(d: Destination, s: TripSettings): CardSignal[] {
  const out: CardSignal[] = [];
  const tips = matchedTips(d, s);
  const peak = tips.find((t) => t.peak);
  if (peak) out.push({ kind: "peak", text: peak.note });
  const fest = matchedFestivals(d, s)[0];
  // 월 단위 매칭이라 실제 날짜와 어긋날 수 있으니 단정적 표현("여행 기간에")은 피한다
  if (fest) out.push({ kind: "festival", text: `마침 ${fest.name} 시즌 (${fest.period})` });
  if (out.length === 0) {
    const tip = tips[0];
    if (tip) out.push({ kind: "tip", text: tip.note });
  }
  return out.slice(0, 2);
}

export interface CoursePlan {
  title: string;
  plan: string[];
  extend?: string;
}

/** 내 기간에 맞는 추천 코스 */
export function courseFor(d: Destination, s: TripSettings): CoursePlan {
  const n = tripNights(s);
  const day = d.courses.find((c) => c.duration === "당일");
  const night = d.courses.find((c) => c.duration === "1박 2일");

  if (n === 0 && day) return { title: "당일 코스", plan: day.plan };
  if (n === 1 && night) return { title: "1박 2일 코스", plan: night.plan };
  if (n !== null && n >= 2 && night) {
    return {
      title: `1박 2일 핵심 코스 + ${n - 1}일 여유`,
      plan: night.plan,
      extend: d.extendTip,
    };
  }
  const fallback = night ?? day;
  if (fallback) {
    return { title: `추천 코스 (${fallback.duration} 기준)`, plan: fallback.plan };
  }
  return { title: "추천 일정", plan: [`${d.tripFit.recommendedNights} 일정을 추천해요.`] };
}

/** 테마·조건 반영된 후보 풀 */
export function filterPool(
  all: Destination[],
  s: TripSettings,
  theme: Theme | null,
): Destination[] {
  return all
    .filter((d) => (theme ? d.themes.includes(theme) : true))
    .filter((d) => !isExcluded(d, s));
}

export function excludedFrom(
  all: Destination[],
  s: TripSettings,
  theme: Theme | null,
): Destination[] {
  return all
    .filter((d) => (theme ? d.themes.includes(theme) : true))
    .filter((d) => {
      const n = tripNights(s);
      return n === 0 && d.tripFit.dayTrip === "불가";
    });
}

/** 필터로 노출할 테마 — 후보 8곳 이상일 때만 (8강 성립 조건) */
export function availableThemes(all: Destination[]): { theme: Theme; count: number }[] {
  const counts = new Map<Theme, number>();
  all.forEach((d) => d.themes.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
  return [...counts.entries()]
    .map(([theme, count]) => ({ theme, count }))
    .filter((e) => e.count >= 8)
    .sort((a, b) => b.count - a.count);
}
