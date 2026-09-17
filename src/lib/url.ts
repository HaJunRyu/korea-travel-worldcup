import type { MatchPick, Theme, Transport, TripSettings } from "@/types/destination";
import { roundForPickIndex } from "./tournament";

/** 설정 → 쿼리 파라미터 (t, from, to, m, inc) */
export function settingsToParams(s: TripSettings): Record<string, string> {
  const out: Record<string, string> = {};
  if (s.transport) out.t = s.transport;
  if (s.startDate) out.from = s.startDate;
  if (s.endDate) out.to = s.endDate;
  if (s.month) out.m = String(s.month);
  if (s.includeExcluded) out.inc = "1";
  return out;
}

export function settingsFromParams(get: (key: string) => string | null): TripSettings {
  const t = get("t");
  const m = get("m");
  return {
    transport: t === "car" || t === "transit" ? (t as Transport) : null,
    startDate: get("from"),
    endDate: get("to"),
    month: m ? Number(m) || null : null,
    includeExcluded: get("inc") === "1",
  };
}

export function themeFromParams(get: (key: string) => string | null): Theme | null {
  const raw = get("theme");
  const themes: Theme[] = ["바다", "자연", "역사", "미식", "감성", "액티비티"];
  return themes.includes(raw as Theme) ? (raw as Theme) : null;
}

/**
 * 픽 이력 인코딩: "winner.loser,winner.loser,..."
 * (id는 소문자·하이픈만 사용하므로 '.'와 ','는 안전)
 * 라운드는 size + 인덱스로 복원 가능해서 저장하지 않는다.
 */
export function encodePicks(picks: MatchPick[]): string {
  return picks.map((p) => `${p.winnerId}.${p.loserId}`).join(",");
}

export function decodePicks(encoded: string, size: number): MatchPick[] {
  if (!encoded) return [];
  return encoded
    .split(",")
    .filter(Boolean)
    .map((pair, i) => {
      const [winnerId, loserId] = pair.split(".");
      return { winnerId, loserId, round: roundForPickIndex(i, size) };
    })
    .filter((p) => p.winnerId && p.loserId);
}
