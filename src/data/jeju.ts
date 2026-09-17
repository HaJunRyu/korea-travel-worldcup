import type { Destination } from "@/types/destination";
import { kakaoMap, naverMap, placeholderImages } from "./placeholder";

// ⚠️ 콘텐츠는 AI 초안 — 접근성·축제 시기는 배포 전 검수 필요 (docs/PLAN.md 7.2)
// 제주 세부 스팟 월드컵(심화편)은 M4 — docs/ideas/jeju-pack.md

export const jeju: Destination[] = [
  {
    id: "jeju",
    name: "제주",
    area: "제주",
    themes: ["바다", "자연", "감성"],
    tagline: "비행기 타고 한 시간, 다른 세계",
    whyGo: [
      "한라산, 오름, 에메랄드 바다, 곶자왈 — 풍경의 스케일이 육지와 완전히 달라요.",
      "동쪽 해돋이부터 서쪽 노을까지, 며칠을 있어도 코스가 마르지 않아요.",
      "국내여행의 부동의 1시드 — 고민될 땐 제주가 답인 경우가 많죠.",
    ],
    highlights: [
      { name: "성산일출봉", description: "바다에서 솟아오른 분화구 — 유네스코 세계자연유산" },
      { name: "한라산", description: "영실 코스의 기암과 백록담 — 계절마다 다른 산" },
      { name: "협재·월정리 해변", description: "서쪽의 에메랄드와 동쪽의 카페 해변" },
      { name: "새별오름", description: "억새 물결과 노을로 유명한 오름의 대표" },
    ],
    food: [
      { name: "흑돼지", description: "근고기로 구워 멜젓에 찍는 제주의 정석" },
      { name: "고기국수", description: "진한 돼지 육수의 소울푸드" },
      { name: "갈치조림·물회", description: "은갈치와 한치, 바다의 밥상" },
    ],
    seasonalTips: [
      { months: [3, 4], note: "유채꽃과 벚꽃이 겹치는 봄 — 제주가 가장 화사한 시기", peak: true },
      { months: [6, 7, 8], note: "해수욕과 푸른 바다 — 성수기라 숙소는 서두르세요", peak: true },
      { months: [10, 11], note: "새별오름 억새 물결의 계절", peak: true },
      { months: [12, 1, 2], note: "동백과 눈 덮인 한라산 — 겨울 제주는 한적하고 깊어요" },
    ],
    festivals: [
      { name: "제주들불축제", months: [3], period: "매년 3월", note: "새별오름 일대" },
      { name: "성산일출축제", months: [12, 1], period: "매년 12월 31일~1월 1일" },
    ],
    access: {
      car: { time: "김포공항에서 비행 약 1시간 10분", note: "현지에서 렌터카 이용이 일반적" },
      transit: { summary: "김포→제주 비행기 약 1시간 10분", quality: "편리" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "2박 3일 이상" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 첫 비행기로 도착, 동쪽 성산일출봉",
          "점심 — 성산 근처 갈치조림",
          "오후 — 월정리 해변과 카페",
          "저녁 — 흑돼지 먹고 마지막 비행기 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 동쪽: 성산일출봉·섭지코지·월정리",
          "1일차 저녁 — 흑돼지와 동문시장 야시장",
          "2일차 — 서쪽: 협재해변·한담해안산책로",
          "2일차 저녁 — 새별오름 노을 보고 공항으로",
        ],
      },
    ],
    extendTip: "하루 더 있다면 한라산 영실 코스나 우도 한 바퀴 — 제주는 2박 3일부터 진짜가 시작돼요.",
    images: placeholderImages("jeju"),
    kakaoMapUrl: kakaoMap("성산일출봉"),
    naverMapUrl: naverMap("제주 여행"),
  },
];
