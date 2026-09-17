import type { Destination } from "@/types/destination";
import { kakaoMap, naverMap, placeholderImages } from "./placeholder";

// ⚠️ 콘텐츠는 AI 초안 — 접근성(소요시간)·축제 시기는 배포 전 검수 필요 (docs/PLAN.md 7.2)

export const chungcheong: Destination[] = [
  {
    id: "danyang",
    name: "단양",
    area: "충청",
    themes: ["자연", "액티비티"],
    tagline: "남한강 위를 나는 액티비티의 성지",
    whyGo: [
      "패러글라이딩·만천하스카이워크·짚와이어 — 남한강 물돌이를 하늘에서 내려다보는 경험이 있어요.",
      "도담삼봉, 사인암 같은 단양팔경이 시내에서 다 가까워 동선이 단순해요.",
    ],
    highlights: [
      { name: "만천하스카이워크", description: "남한강 절벽 위 하늘길 — 짚와이어·알파인코스터까지" },
      { name: "패러글라이딩 (양방산)", description: "남한강 물돌이 위를 나는 국내 대표 활공장" },
      { name: "도담삼봉", description: "강 위에 솟은 세 봉우리 — 단양팔경의 대표" },
      { name: "고수동굴", description: "5억 년 석회동굴 탐험" },
    ],
    food: [
      { name: "마늘 요리", description: "단양 육쪽마늘로 만든 마늘정식·마늘순대" },
      { name: "쏘가리 매운탕", description: "남한강 민물고기의 진한 맛" },
    ],
    seasonalTips: [
      { months: [4, 5], note: "벚꽃 핀 강변과 맑은 하늘 — 패러글라이딩 최적기", peak: true },
      { months: [10], note: "소백산 단풍과 강안개 — 스카이워크 뷰가 가장 깊어져요", peak: true },
      { months: [7, 8], note: "동굴 안은 한여름에도 15도 — 더위 피난처로 최고" },
    ],
    festivals: [
      { name: "단양마늘축제", months: [7], period: "매년 7월" },
    ],
    access: {
      car: { time: "약 2시간 30분", note: "중앙고속도로" },
      transit: { summary: "청량리발 KTX-이음 단양역 약 1시간 40분", quality: "보통" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 패러글라이딩 또는 만천하스카이워크",
          "점심 — 구경시장 마늘순대·닭강정",
          "오후 — 도담삼봉과 석문",
          "저녁 — 강변 산책 후 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 만천하스카이워크와 짚와이어, 구경시장 저녁",
          "1일차 밤 — 수양개빛터널 야경",
          "2일차 — 패러글라이딩과 고수동굴",
          "2일차 오후 — 사인암 들렀다 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 소백산 연화봉 트레킹이나 온달관광지까지.",
    images: placeholderImages("danyang"),
    kakaoMapUrl: kakaoMap("만천하스카이워크"),
    naverMapUrl: naverMap("단양 여행"),
  },
  {
    id: "taean",
    name: "태안",
    area: "충청",
    themes: ["바다", "감성"],
    tagline: "서해 노을이 가장 깊게 지는 반도",
    whyGo: [
      "꽃지해변 할미·할아비바위 사이로 지는 노을은 서해안 노을의 대표 장면이에요.",
      "신두리 사구, 안면도 솔숲 — 서해에서만 볼 수 있는 이국적인 풍경이 모여 있어요.",
    ],
    highlights: [
      { name: "꽃지해변", description: "할미·할아비바위 노을로 유명한 안면도 대표 해변" },
      { name: "신두리 해안사구", description: "국내 최대 모래언덕 — 사막 같은 풍경" },
      { name: "안면도 자연휴양림", description: "100년 안면송 숲길 산책" },
      { name: "만리포해변", description: "노래로 유명한 서해 대표 해수욕장" },
    ],
    food: [
      { name: "게국지", description: "꽃게와 묵은지를 끓인 태안식 찌개" },
      { name: "대하", description: "가을 안면도 백사장항의 소금구이" },
      { name: "박속밀국낙지탕", description: "박속 국물에 낙지를 데쳐 먹는 향토식" },
    ],
    seasonalTips: [
      { months: [4, 5], note: "튤립 축제와 봄꽃 — 태안이 가장 화사한 시기", peak: true },
      { months: [9, 10], note: "대하 철 + 깊어지는 노을", peak: true },
      { months: [6, 7, 8], note: "해수욕과 갯벌체험 성수기" },
    ],
    festivals: [
      { name: "태안 세계튤립꽃박람회", months: [4, 5], period: "매년 4~5월" },
      { name: "백사장 대하축제", months: [9, 10], period: "매년 9~10월" },
    ],
    access: {
      car: { time: "약 2시간 30분", note: "서해안고속도로" },
      transit: { summary: "고속버스 태안터미널 약 2시간 30분, 해변까지 추가 이동", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 신두리 해안사구",
          "점심 — 게국지 정식",
          "오후 — 안면도 휴양림 솔숲",
          "저녁 — 꽃지해변 노을 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 신두리 사구와 만리포, 게국지 저녁",
          "1일차 밤 — 꽃지해변 노을과 백사장항 산책",
          "2일차 — 안면도 휴양림과 쥬라기박물관",
          "2일차 오후 — 대하구이(가을) 먹고 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 옹도 유람선이나 청산수목원까지.",
    images: placeholderImages("taean"),
    kakaoMapUrl: kakaoMap("꽃지해변"),
    naverMapUrl: naverMap("태안 여행"),
  },
  {
    id: "boryeong",
    name: "보령",
    area: "충청",
    themes: ["바다", "액티비티"],
    tagline: "머드의 도시, 대천의 여름",
    whyGo: [
      "머드축제의 그 도시 — 여름 대천해수욕장의 에너지는 국내 최고 수준이에요.",
      "죽도 상화원, 무창포 신비의 바닷길처럼 축제 밖의 조용한 매력도 탄탄해요.",
    ],
    highlights: [
      { name: "대천해수욕장", description: "서해 최대 백사장 — 머드축제의 무대" },
      { name: "죽도 상화원", description: "섬 전체가 한옥 정원인 비밀스러운 산책지" },
      { name: "무창포 신비의 바닷길", description: "물때가 맞으면 바다가 갈라지는 모세의 기적" },
      { name: "보령 스카이바이크", description: "폐철길 위, 바다를 보며 달리는 레일바이크" },
    ],
    food: [
      { name: "키조개 요리", description: "오천항 키조개 삼합" },
      { name: "간장게장", description: "서해 꽃게로 담근 밥도둑" },
      { name: "조개구이", description: "해변에서 즐기는 저녁의 정석" },
    ],
    seasonalTips: [
      { months: [7, 8], note: "머드축제와 해수욕 성수기 — 1년 중 가장 뜨거운 시기", peak: true },
      { months: [9, 10], note: "무창포 바닷길과 전어·대하의 계절" },
    ],
    festivals: [
      { name: "보령머드축제", months: [7, 8], period: "매년 7월 말~8월 초", note: "외국인에게도 유명한 여름 축제" },
    ],
    access: {
      car: { time: "약 2시간 20분", note: "서해안고속도로" },
      transit: { summary: "장항선 대천역 약 2시간 40분", quality: "보통" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 죽도 상화원(주말 개방) 산책",
          "점심 — 오천항 키조개 삼합",
          "오후 — 대천해수욕장 물놀이 또는 스카이바이크",
          "저녁 — 조개구이 후 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 대천해수욕장과 스카이바이크, 조개구이 저녁",
          "1일차 밤 — 해변 불꽃과 산책",
          "2일차 — 무창포 바닷길(물때 확인)과 상화원",
          "2일차 오후 — 간장게장 정식 후 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 외연도 등 섬 여행이나 성주산 휴양림까지.",
    images: placeholderImages("boryeong"),
    kakaoMapUrl: kakaoMap("대천해수욕장"),
    naverMapUrl: naverMap("보령 여행"),
  },
  {
    id: "gongju-buyeo",
    name: "공주·부여",
    area: "충청",
    themes: ["역사"],
    tagline: "백제의 두 수도를 잇는 시간여행",
    whyGo: [
      "무령왕릉부터 낙화암까지 — 유네스코 백제역사유적지구를 하루에 두 도시로 즐겨요.",
      "궁남지 연꽃, 공산성 야경처럼 유적이 '풍경'으로 살아있는 동네예요.",
    ],
    highlights: [
      { name: "공산성", description: "금강을 내려다보는 백제 산성 — 성곽 위 산책이 좋아요" },
      { name: "무령왕릉·국립공주박물관", description: "백제 금속공예의 정수를 만나는 곳" },
      { name: "부소산성·낙화암", description: "백마강 절벽의 전설을 따라 걷는 숲길" },
      { name: "궁남지", description: "국내에서 가장 오래된 인공 연못 — 여름 연꽃 명소" },
    ],
    food: [
      { name: "공주국밥", description: "따끈한 장터국밥 한 그릇" },
      { name: "공주 알밤", description: "알밤빵·밤막걸리 등 밤 디저트" },
      { name: "연잎밥", description: "부여식 향긋한 한 상" },
    ],
    seasonalTips: [
      { months: [7], note: "궁남지 서동연꽃축제 — 연못이 연꽃으로 가득 차요", peak: true },
      { months: [9, 10], note: "백제문화제 시즌, 공산성 야경이 가장 아름다워요", peak: true },
    ],
    festivals: [
      { name: "백제문화제", months: [9, 10], period: "매년 9~10월", note: "공주·부여 공동 개최" },
      { name: "부여서동연꽃축제", months: [7], period: "매년 7월" },
    ],
    access: {
      car: { time: "약 1시간 40분", note: "논산천안고속도로" },
      transit: { summary: "고속버스 공주 약 1시간 30분·부여 약 2시간", quality: "보통" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 공산성과 무령왕릉",
          "점심 — 공주국밥",
          "오후 — 부여로 이동, 부소산성·낙화암",
          "저녁 — 궁남지 산책 후 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 공주: 공산성·무령왕릉·제민천 카페거리",
          "1일차 밤 — 공산성 야경",
          "2일차 — 부여: 부소산성·정림사지·국립부여박물관",
          "2일차 오후 — 궁남지 걷고 연잎밥 먹고 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 백마강 유람선이나 마곡사(공주)까지.",
    images: placeholderImages("gongju-buyeo"),
    kakaoMapUrl: kakaoMap("공산성"),
    naverMapUrl: naverMap("공주 부여 여행"),
  },
  {
    id: "seosan",
    name: "서산",
    area: "충청",
    themes: ["역사", "감성", "자연"],
    tagline: "갯벌 위 암자와 백제의 미소",
    whyGo: [
      "간월암은 물이 들면 섬, 빠지면 길이 열리는 갯벌 위 암자 — 낙조가 특히 아름다워요.",
      "서산마애삼존불의 '백제의 미소'와 해미읍성은 시간을 거슬러 걷는 코스예요.",
      "천수만은 겨울 철새와 유채·코스모스로 계절마다 표정이 바뀌는 들판이에요.",
    ],
    highlights: [
      { name: "간월암", description: "물때에 따라 섬이 되는 갯벌 위 암자 — 서해 낙조 명소" },
      { name: "해미읍성", description: "성곽과 동헌이 온전히 남은 조선 읍성" },
      { name: "서산마애여래삼존상", description: "빛에 따라 표정이 바뀌는 '백제의 미소'" },
      { name: "유기방가옥·천수만", description: "봄 수선화와 겨울 철새로 유명한 들판과 고택" },
    ],
    food: [
      { name: "게국지", description: "꽃게와 묵은지를 끓인 서산·태안식 찌개" },
      { name: "어리굴젓", description: "서산 간월도 특산 — 알싸한 밥도둑" },
    ],
    seasonalTips: [
      { months: [3, 4], note: "유기방가옥 수선화와 봄 들판 — 서산이 노랗게 물드는 시기", peak: true },
      { months: [11, 12, 1], note: "천수만 철새 군무와 겨울 낙조", peak: true },
    ],
    festivals: [
      { name: "서산해미읍성역사체험축제", months: [10], period: "매년 10월" },
    ],
    access: {
      car: { time: "약 1시간 40분", note: "서해안고속도로" },
      transit: { summary: "고속버스 서산 약 2시간, 명소는 버스·택시 분산", quality: "보통" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "당일 ~ 1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 해미읍성과 서산마애삼존불",
          "점심 — 게국지 정식",
          "오후 — 개심사 산책",
          "저녁 — 간월암 낙조 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 해미읍성·마애삼존불·개심사",
          "1일차 저녁 — 간월도 어리굴젓과 낙조",
          "2일차 — 유기방가옥과 천수만 들판",
          "2일차 오후 — 서산목장 아라메길 들렀다 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 태안 안면도까지 서해안을 이어보세요.",
    images: placeholderImages("seosan"),
    kakaoMapUrl: kakaoMap("서산 간월암"),
    naverMapUrl: naverMap("서산 여행"),
  },
  {
    id: "jecheon",
    name: "제천",
    area: "충청",
    themes: ["자연", "감성"],
    tagline: "청풍호를 품은 내륙의 호반 도시",
    whyGo: [
      "청풍호는 산과 물이 겹겹이 어우러진 내륙 최대 호수 — 케이블카와 모노레일 뷰가 압권이에요.",
      "의림지는 삼한시대 저수지로, 노송과 벚꽃이 어우러진 오래된 산책 정원이에요.",
      "약초와 한방의 고장이라 청정 산나물 밥상과 한방 힐링이 곁들여져요.",
    ],
    highlights: [
      { name: "청풍호반 케이블카", description: "비봉산 정상까지 올라 청풍호를 한눈에 담는 케이블카" },
      { name: "의림지", description: "삼한시대 축조된 저수지 — 노송·벚꽃과 용추폭포 유리전망대" },
      { name: "배론성지", description: "숲과 연못이 고요한 천주교 성지" },
      { name: "옥순봉·구담봉", description: "청풍호 위로 솟은 기암 — 유람선에서 보는 절경" },
    ],
    food: [
      { name: "약채락 한정식", description: "제천 약초로 차린 건강 밥상" },
      { name: "산채비빔밥", description: "월악산 자락의 산나물 한 그릇" },
    ],
    seasonalTips: [
      { months: [4], note: "의림지·청풍호 벚꽃 — 호반이 가장 화사한 시기", peak: true },
      { months: [10, 11], note: "월악산과 청풍호 단풍 — 케이블카 뷰가 절정", peak: true },
    ],
    festivals: [
      { name: "제천국제음악영화제", months: [8], period: "매년 8월" },
    ],
    access: {
      car: { time: "약 2시간", note: "중부내륙·평택제천고속도로" },
      transit: { summary: "청량리발 KTX-이음·무궁화 제천역 약 1시간 40분", quality: "보통" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 청풍호반 케이블카",
          "점심 — 약채락 한정식",
          "오후 — 청풍문화재단지와 유람선",
          "저녁 — 의림지 산책 후 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 청풍호 케이블카와 청풍문화재단지",
          "1일차 저녁 — 호반 숙소와 야경",
          "2일차 — 의림지와 배론성지",
          "2일차 오후 — 월악산 자락 드라이브 후 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 단양(도담삼봉)이 지척이라 함께 묶기 좋아요.",
    images: placeholderImages("jecheon"),
    kakaoMapUrl: kakaoMap("제천 청풍호"),
    naverMapUrl: naverMap("제천 여행"),
  },
];
