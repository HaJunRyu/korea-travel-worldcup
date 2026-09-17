export type Theme = "바다" | "자연" | "역사" | "미식" | "감성" | "액티비티";

export const ALL_THEMES: Theme[] = ["바다", "자연", "역사", "미식", "감성", "액티비티"];

export type Area = "수도권" | "강원" | "충청" | "전라" | "경상" | "제주";

export type Transport = "car" | "transit";

/** 명소·음식 공용 */
export interface Poi {
  name: string;
  description: string;
}

/** 접근성 — MVP는 모두 서울/수도권 출발 기준 (docs/PLAN.md 3.2) */
export interface AccessInfo {
  car: { time: string; note?: string };
  transit: {
    summary: string;
    quality: "편리" | "보통" | "불편";
  };
  localMobility: "뚜벅이 OK" | "대중교통 보통" | "자차·렌터카 권장";
}

/** 시기별 팁 — 여행 월과 매칭. peak면 카드에 ✨ 제철 뱃지 */
export interface SeasonalTip {
  months: number[];
  note: string;
  peak?: boolean;
}

/** 연례 축제·행사 — MVP는 정적(매년 ~월 수준), M2에서 TourAPI 실일정 */
export interface Festival {
  name: string;
  months: number[];
  period: string;
  note?: string;
}

export interface Course {
  duration: "당일" | "1박 2일";
  plan: string[];
}

export interface Destination {
  id: string;
  name: string;
  area: Area;
  themes: Theme[];
  tagline: string;
  /** 가야 하는 이유 2~3개. [0]이 카드에 기본 노출 */
  whyGo: string[];
  highlights: Poi[];
  food: Poi[];
  seasonalTips: SeasonalTip[];
  festivals: Festival[];
  access: AccessInfo;
  tripFit: {
    /** 당일치기 적합도 (서울 출발 기준) */
    dayTrip: "가능" | "빠듯" | "불가";
    recommendedNights: string;
  };
  courses: Course[];
  extendTip?: string;
  /** 숙박 추천 (지역·유형) — src/data/logistics.ts에서 주입 */
  stay?: string;
  /** 예상 비용 (서울 출발 기준 대략) — src/data/logistics.ts에서 주입 */
  cost?: string;
  images: string[];
  /** 각 이미지의 blur placeholder(base64) — photos.generated.ts에서 index.ts가 주입 */
  imageBlurs?: (string | undefined)[];
  kakaoMapUrl: string;
  naverMapUrl?: string;
}

/** 월드컵 팩 — 지역·테마 확장 단위 */
export interface Cup {
  id: string;
  title: string;
  destinations: Destination[];
}

export interface TripSettings {
  transport: Transport | null;
  /** ISO 'YYYY-MM-DD' */
  startDate: string | null;
  endDate: string | null;
  /** 날짜 미정, 월만 아는 경우 (1~12) */
  month: number | null;
  /** 소프트 제외(당일치기 불가 등) 해제 여부 */
  includeExcluded: boolean;
}

export interface MatchPick {
  winnerId: string;
  loserId: string;
  /** 픽 당시 라운드 크기 (16, 8, 4, 2) */
  round: number;
}
