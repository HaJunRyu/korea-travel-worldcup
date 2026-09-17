import type { MatchPick } from "@/types/destination";

/**
 * 토너먼트 상태는 (최초 대진표 + 픽 이력)만 저장하고,
 * 현재 라운드·매치·우승자는 전부 replay로 파생한다.
 * → undo·이어하기(직렬화)·우승 여정·취향 분석이 전부 공짜로 나온다.
 */
export interface Tournament {
  size: number;
  /** 최초 대진표 (순서 = 대진: [0]vs[1], [2]vs[3], ...) */
  bracket: string[];
  picks: MatchPick[];
}

export function shuffle<T>(arr: T[], rnd: () => number = Math.random): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** pool에서 무작위 size개를 뽑아 대진표 생성. pool이 부족하면 가능한 최대 2^n으로 축소 */
export function createTournament(poolIds: string[], size: number): Tournament {
  const max = largestBracketSize(poolIds.length);
  const finalSize = Math.min(size, max);
  const bracket = shuffle(poolIds).slice(0, finalSize);
  return { size: finalSize, bracket, picks: [] };
}

export function largestBracketSize(poolCount: number): number {
  let n = 2;
  while (n * 2 <= poolCount) n *= 2;
  return n;
}

export interface TournamentView {
  /** 현재 라운드 크기 (32/16/8/4/2). 종료 시 1 */
  round: number;
  matchIndex: number;
  totalMatches: number;
  current: [string, string] | null;
  /** 현재 라운드 참가자 (순서 = 대진) */
  entrants: string[];
  finished: boolean;
  champion: string | null;
  runnerUp: string | null;
  /** 4강 진출자 (있다면) */
  top4: string[];
  /** 전체 진행률 0~1 */
  progress: number;
}

export function view(t: Tournament): TournamentView {
  let entrants = [...t.bracket];
  let winners: string[] = [];
  let mi = 0;
  let top4: string[] = entrants.length === 4 ? [...entrants] : [];

  for (const p of t.picks) {
    winners.push(p.winnerId);
    mi++;
    if (mi * 2 >= entrants.length) {
      entrants = winners;
      winners = [];
      mi = 0;
      if (entrants.length === 4) top4 = [...entrants];
    }
  }

  const finished = entrants.length === 1;
  const last = t.picks[t.picks.length - 1];
  const total = totalMatchesFor(t.size);

  return {
    round: entrants.length,
    matchIndex: mi,
    totalMatches: Math.floor(entrants.length / 2),
    current: finished ? null : [entrants[mi * 2], entrants[mi * 2 + 1]],
    entrants,
    finished,
    champion: finished ? entrants[0] : null,
    runnerUp: finished && last ? last.loserId : null,
    top4,
    progress: total === 0 ? 1 : t.picks.length / total,
  };
}

export function pick(t: Tournament, winnerId: string): Tournament {
  const v = view(t);
  if (!v.current) return t;
  const [a, b] = v.current;
  if (winnerId !== a && winnerId !== b) return t;
  const loserId = winnerId === a ? b : a;
  return { ...t, picks: [...t.picks, { winnerId, loserId, round: v.round }] };
}

export function undo(t: Tournament): Tournament {
  if (t.picks.length === 0) return t;
  return { ...t, picks: t.picks.slice(0, -1) };
}

export function roundLabel(round: number): string {
  if (round === 2) return "결승";
  if (round === 4) return "4강";
  return `${round}강`;
}

export function totalMatchesFor(size: number): number {
  return size - 1;
}

/** i번째(0-base) 픽이 어느 라운드였는지 — 공유 URL 복원용 */
export function roundForPickIndex(i: number, size: number): number {
  let round = size;
  let acc = 0;
  while (round >= 2) {
    const matches = round / 2;
    if (i < acc + matches) return round;
    acc += matches;
    round = matches;
  }
  return 2;
}
