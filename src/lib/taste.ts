import type { Destination, MatchPick, Theme } from "@/types/destination";

export interface TasteEntry {
  theme: Theme;
  count: number;
  pct: number;
}

/** 픽 이력에서 승자 테마를 집계 → 선택 기준 분석 */
export function analyzeTaste(
  picks: MatchPick[],
  byId: Map<string, Destination>,
): TasteEntry[] {
  const counts = new Map<Theme, number>();
  let total = 0;
  for (const p of picks) {
    const d = byId.get(p.winnerId);
    if (!d) continue;
    for (const t of d.themes) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
      total++;
    }
  }
  if (total === 0) return [];
  return [...counts.entries()]
    .map(([theme, count]) => ({ theme, count, pct: Math.round((count / total) * 100) }))
    .sort((a, b) => b.count - a.count);
}

const SUMMARY: Record<Theme, string> = {
  바다: "파도 소리가 들리는 쪽으로 계속 손이 갔어요. 이번 여행의 답은 바다네요.",
  자연: "숲과 산, 초록이 있는 곳을 골라왔어요. 자연 속에서 쉬고 싶은 때인가 봐요.",
  역사: "이야기가 쌓인 골목과 유적에 끌렸어요. 천천히 걷는 여행이 어울려요.",
  미식: "결국 먹으러 가는 여행이죠. 맛있는 동네를 정확히 골라내셨어요.",
  감성: "풍경과 분위기, 사진 찍고 싶은 순간을 따라 선택했어요.",
  액티비티: "가만히 쉬는 것보단 몸으로 노는 여행. 스릴 있는 곳들을 골랐어요.",
};

export function tasteSummary(entries: TasteEntry[]): string | null {
  const top = entries[0];
  if (!top) return null;
  return SUMMARY[top.theme];
}
