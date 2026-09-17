import type { Theme, TripSettings } from "@/types/destination";
import type { Tournament } from "./tournament";

const GAME_KEY = "travel-worldcup/game/v1";
const HISTORY_KEY = "travel-worldcup/history/v1";

export interface SavedGame {
  settings: TripSettings;
  themeFilter: Theme | null;
  tournament: Tournament;
  savedAt: number;
}

export function saveGame(game: SavedGame): void {
  try {
    localStorage.setItem(GAME_KEY, JSON.stringify(game));
  } catch {
    // 저장 불가 환경(사파리 프라이빗 등)은 조용히 무시 — 이어하기만 비활성화됨
  }
}

export function loadGame(): SavedGame | null {
  try {
    const raw = localStorage.getItem(GAME_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedGame;
    if (!parsed?.tournament?.bracket?.length) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearGame(): void {
  try {
    localStorage.removeItem(GAME_KEY);
  } catch {
    // ignore
  }
}

/** 내 역대 우승지 기록 (MVP 개인 기록 — 전체 랭킹은 M3) */
export interface HistoryEntry {
  winnerId: string;
  finishedAt: number;
}

export function appendHistory(entry: HistoryEntry): void {
  try {
    const list = loadHistory();
    list.unshift(entry);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, 50)));
  } catch {
    // ignore
  }
}

export function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
