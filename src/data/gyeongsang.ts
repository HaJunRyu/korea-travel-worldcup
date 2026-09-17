import type { Destination } from "@/types/destination";
import { kakaoMap, naverMap, placeholderImages } from "./placeholder";

// ⚠️ 콘텐츠는 AI 초안 — 접근성(소요시간)·축제 시기는 배포 전 검수 필요 (docs/PLAN.md 7.2)

export const gyeongsang: Destination[] = [
  {
    id: "busan",
    name: "부산",
    area: "경상",
    themes: ["바다", "미식"],
    tagline: "산과 바다와 도시가 한 프레임에",
    whyGo: [
      "해운대·광안리의 바다, 감천의 골목, 자갈치의 활기 — 대도시와 바다 휴양을 동시에 즐겨요.",
      "돼지국밥·밀면·회 — 끼니마다 고민이 즐거운 미식 도시예요.",
      "KTX로 2시간 40분, 뚜벅이 인프라가 완벽해 계획 없이 가도 되는 도시예요.",
    ],
    highlights: [
      { name: "해운대·해리단길", description: "대표 해변과 그 뒷골목의 힙한 상권" },
      { name: "광안리", description: "광안대교 야경과 해변 바 — 밤이 진짜인 바다" },
      { name: "감천문화마을", description: "파스텔 집들이 계단식으로 쌓인 산복도로 마을" },
      { name: "흰여울문화마을", description: "영도 절벽 위 골목에서 보는 바다" },
    ],
    food: [
      { name: "돼지국밥", description: "부산의 소울푸드 — 정구지 듬뿍" },
      { name: "밀면", description: "여름이면 줄이 두 배로 길어지는 부산식 냉면" },
      { name: "자갈치 회", description: "시장 2층에서 바로 떠주는 활어회" },
    ],
    seasonalTips: [
      { months: [6, 7, 8], note: "해수욕 성수기 — 해운대·광안리가 가장 뜨거워요", peak: true },
      { months: [10], note: "영화제와 불꽃축제의 계절 — 부산이 가장 화려한 달", peak: true },
      { months: [12, 1], note: "겨울 바다와 온천(해운대·동래)의 조합도 좋아요" },
    ],
    festivals: [
      { name: "부산국제영화제", months: [10], period: "매년 10월 초" },
      { name: "부산불꽃축제", months: [10, 11], period: "매년 10~11월", note: "광안리 앞바다" },
    ],
    access: {
      car: { time: "약 4시간 30분", note: "경부고속도로" },
      transit: { summary: "KTX 부산역 약 2시간 40분", quality: "편리" },
      localMobility: "뚜벅이 OK",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일 ~ 2박 3일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — KTX 도착, 자갈치·국제시장",
          "점심 — 돼지국밥",
          "오후 — 감천문화마을",
          "저녁 — 광안리 야경 보고 막차 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 감천문화마을과 흰여울, 자갈치 회 저녁",
          "1일차 밤 — 광안리 해변 바에서 광안대교 야경",
          "2일차 — 해운대와 해리단길, 블루라인파크 해변열차",
          "2일차 오후 — 밀면 한 그릇 후 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 기장 해동용궁사와 오시리아 카페거리까지.",
    images: placeholderImages("busan"),
    kakaoMapUrl: kakaoMap("광안리해수욕장"),
    naverMapUrl: naverMap("부산 여행"),
  },
  {
    id: "gyeongju",
    name: "경주",
    area: "경상",
    themes: ["역사", "감성"],
    tagline: "도시 전체가 지붕 없는 박물관",
    whyGo: [
      "능과 유적 사이로 일상이 흐르는 도시 — 자전거로 왕릉 사이를 달리는 경험은 여기뿐이에요.",
      "동궁과 월지·첨성대의 야경, 황리단길의 낮 — 밤낮이 다 채워져요.",
    ],
    highlights: [
      { name: "대릉원·첨성대", description: "고분 사이 산책로와 목련 포토존" },
      { name: "동궁과 월지", description: "물에 비친 야경이 압권인 신라 별궁 터" },
      { name: "불국사·석굴암", description: "유네스코 유산 — 새벽 불국사는 고요 그 자체" },
      { name: "황리단길", description: "한옥 카페와 소품숍이 이어지는 경주의 핫플" },
    ],
    food: [
      { name: "황남빵", description: "팥 가득한 경주의 원조 간식" },
      { name: "교리김밥", description: "달걀지단 가득한 줄 서는 김밥" },
      { name: "쌈밥거리", description: "대릉원 옆 푸짐한 한 상" },
    ],
    seasonalTips: [
      { months: [4], note: "보문단지·대릉원 벚꽃 — 왕릉과 벚꽃의 조합이 비현실적", peak: true },
      { months: [9, 10], note: "첨성대 핑크뮬리와 가을 야경", peak: true },
    ],
    festivals: [
      { name: "경주 벚꽃 시즌 행사", months: [4], period: "매년 4월 초", note: "보문단지 일대" },
    ],
    access: {
      car: { time: "약 3시간 30분", note: "경부고속도로" },
      transit: { summary: "KTX 경주역 약 2시간 10분, 시내까지 버스 20~30분", quality: "보통" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 대릉원과 첨성대",
          "점심 — 쌈밥거리",
          "오후 — 황리단길 카페",
          "저녁 — 동궁과 월지 야경 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 대릉원·첨성대·황리단길",
          "1일차 밤 — 동궁과 월지, 월정교 야경",
          "2일차 — 불국사와 석굴암",
          "2일차 오후 — 교리김밥 포장해서 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 양동마을이나 감포 바다(문무대왕릉)까지.",
    images: placeholderImages("gyeongju"),
    kakaoMapUrl: kakaoMap("동궁과 월지"),
    naverMapUrl: naverMap("경주 여행"),
  },
  {
    id: "tongyeong",
    name: "통영",
    area: "경상",
    themes: ["바다", "미식"],
    tagline: "예술가들이 사랑한 바다의 땅",
    whyGo: [
      "미륵산 케이블카에서 내려다보는 한려수도 다도해는 국내 최고의 바다 전망이에요.",
      "겨울 굴, 충무김밥, 꿀빵 — 항구 도시의 먹거리 라인업이 확실해요.",
    ],
    highlights: [
      { name: "통영 케이블카", description: "미륵산 정상에서 한려수도를 한눈에" },
      { name: "동피랑 벽화마을", description: "강구안 내려다보는 언덕 골목" },
      { name: "강구안·중앙시장", description: "활어시장과 꿀빵 골목이 있는 원도심 항구" },
      { name: "스카이라인 루지", description: "바다 보며 내려오는 루지 트랙" },
    ],
    food: [
      { name: "굴 요리", description: "겨울 통영 굴구이·굴밥 — 제철엔 무조건" },
      { name: "충무김밥", description: "김밥·무김치·오징어무침의 오리지널" },
      { name: "꿀빵", description: "팥 도넛에 물엿을 입힌 통영 간식" },
    ],
    seasonalTips: [
      { months: [11, 12, 1, 2], note: "굴 제철 — 미식 여행이라면 겨울이 정답", peak: true },
      { months: [4], note: "봉숫골 벚꽃길과 봄 바다" },
    ],
    festivals: [
      { name: "통영한산대첩축제", months: [8], period: "매년 8월" },
    ],
    access: {
      car: { time: "약 4시간 10분", note: "통영대전고속도로" },
      transit: { summary: "고속버스 통영 약 4시간", quality: "불편" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "불가", recommendedNights: "1박 2일 ~ 2박 3일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 케이블카로 미륵산 전망",
          "점심 — 중앙시장 활어회 또는 충무김밥",
          "오후 — 동피랑과 강구안 산책",
          "저녁 — 꿀빵 사서 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 케이블카와 루지, 굴 요리 저녁(겨울)",
          "1일차 밤 — 강구안 야경과 디피랑 빛 산책",
          "2일차 — 동피랑·서피랑과 중앙시장",
          "2일차 오후 — 충무김밥 먹고 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 소매물도·장사도 등 섬 투어 유람선을 타보세요.",
    images: placeholderImages("tongyeong"),
    kakaoMapUrl: kakaoMap("통영케이블카"),
    naverMapUrl: naverMap("통영 여행"),
  },
  {
    id: "geoje",
    name: "거제",
    area: "경상",
    themes: ["바다", "자연"],
    tagline: "몽돌 구르는 소리의 남쪽 섬",
    whyGo: [
      "바람의언덕, 학동몽돌해변, 외도 — 남해안 해안 절경의 밀도가 가장 높은 섬이에요.",
      "해안도로 드라이브 자체가 목적이 되는 여행지예요.",
    ],
    highlights: [
      { name: "바람의언덕", description: "풍차와 바다가 있는 거제의 상징" },
      { name: "외도 보타니아", description: "유람선 타고 들어가는 섬 전체 정원" },
      { name: "학동몽돌해변", description: "파도가 몽돌을 굴리는 소리가 음악 같은 해변" },
      { name: "매미성", description: "한 시민이 쌓아 올린 바닷가 성벽" },
    ],
    food: [
      { name: "멍게비빔밥", description: "향긋한 봄 멍게의 정석" },
      { name: "대구탕", description: "겨울 외포항 대구의 시원한 국물" },
      { name: "물회", description: "남해안 활어를 시원하게" },
    ],
    seasonalTips: [
      { months: [3, 4], note: "동백과 봄 바다, 멍게 철의 시작", peak: true },
      { months: [6, 7, 8], note: "몽돌해변 물놀이와 해안 드라이브 성수기", peak: true },
      { months: [12, 1], note: "외포항 대구 철" },
    ],
    festivals: [],
    access: {
      car: { time: "약 4시간 30분", note: "거가대교 경유" },
      transit: { summary: "고속버스 고현 약 4시간 30분", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "불가", recommendedNights: "1박 2일 ~ 2박 3일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 매미성",
          "점심 — 멍게비빔밥",
          "오후 — 바람의언덕과 신선대",
          "저녁 — 학동몽돌해변 노을 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 매미성과 옥포, 멍게비빔밥 점심, 바람의언덕",
          "1일차 저녁 — 학동몽돌해변에서 파도 소리",
          "2일차 — 외도 보타니아 유람선(해금강 경유)",
          "2일차 오후 — 근포동굴 노을 스팟 들렀다 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 지심도 동백섬이나 통영까지 함께 묶어보세요.",
    images: placeholderImages("geoje"),
    kakaoMapUrl: kakaoMap("바람의언덕"),
    naverMapUrl: naverMap("거제 여행"),
  },
  {
    id: "namhae",
    name: "남해",
    area: "경상",
    themes: ["바다", "감성"],
    tagline: "산비탈 다랭이논과 보물섬 바다",
    whyGo: [
      "바다로 쏟아질 듯한 다랭이논, 독일마을의 붉은 지붕 — 풍경의 완성도가 남달라요.",
      "느린 국도 드라이브와 작은 마을들 — '아무것도 안 하러' 가기 좋은 섬이에요.",
    ],
    highlights: [
      { name: "다랭이마을", description: "108층 계단논이 바다까지 이어지는 마을" },
      { name: "독일마을", description: "파독 광부·간호사들이 돌아와 세운 주황 지붕 마을" },
      { name: "보리암", description: "금산 절벽 위 기도처 — 남해 최고의 일출 전망" },
      { name: "상주은모래비치", description: "고운 모래와 잔잔한 물의 가족 해변" },
    ],
    food: [
      { name: "멸치쌈밥", description: "굵은 죽방멸치조림을 쌈에 싸 먹는 남해의 맛" },
      { name: "갈치조림", description: "미조항 갈치의 진한 양념" },
      { name: "유자 디저트", description: "남해 유자로 만든 차와 빵" },
    ],
    seasonalTips: [
      { months: [5, 6], note: "모내기 끝난 다랭이논이 초록으로 차오르는 시기", peak: true },
      { months: [10], note: "독일마을 맥주축제와 가을 바다", peak: true },
    ],
    festivals: [
      { name: "독일마을 맥주축제", months: [10], period: "매년 10월" },
    ],
    access: {
      car: { time: "약 4시간 30분", note: "남해고속도로" },
      transit: { summary: "고속버스 남해 약 4시간 30분", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "불가", recommendedNights: "1박 2일 ~ 2박 3일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 보리암 전망",
          "점심 — 멸치쌈밥",
          "오후 — 다랭이마을 산책",
          "저녁 — 독일마을 노을 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 보리암과 금산, 멸치쌈밥 점심, 다랭이마을",
          "1일차 저녁 — 독일마을 수제맥주와 노을",
          "2일차 — 상주은모래비치와 물미해안도로 드라이브",
          "2일차 오후 — 미조항 갈치조림 먹고 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 금산 산장에서 하룻밤이나 사천 케이블카까지.",
    images: placeholderImages("namhae"),
    kakaoMapUrl: kakaoMap("다랭이마을"),
    naverMapUrl: naverMap("남해 여행"),
  },
  {
    id: "andong",
    name: "안동",
    area: "경상",
    themes: ["역사", "미식"],
    tagline: "하회탈과 고택, 정신문화의 수도",
    whyGo: [
      "하회마을은 유네스코 유산이자 '실제로 사람이 사는' 조선 마을이에요.",
      "찜닭·간고등어·헛제사밥 — 향토 음식의 스토리가 살아있는 미식 도시예요.",
    ],
    highlights: [
      { name: "하회마을", description: "낙동강이 휘감아 도는 유네스코 민속 마을" },
      { name: "월영교", description: "달빛 야경이 아름다운 목책교" },
      { name: "도산서원", description: "퇴계 이황의 서원 — 강변 풍경이 고요해요" },
      { name: "만휴정", description: "폭포 위 정자 — 드라마 「미스터 션샤인」의 그곳" },
    ],
    food: [
      { name: "안동찜닭", description: "구시장 찜닭골목의 원조 맛" },
      { name: "간고등어", description: "소금 간의 정석, 안동 밥상의 주인공" },
      { name: "헛제사밥", description: "제사 음식을 일상으로 — 탕국과 나물 비빔" },
    ],
    seasonalTips: [
      { months: [9, 10], note: "탈춤축제와 가을 고택 — 안동이 가장 붐비는 시기", peak: true },
      { months: [5, 6], note: "신록의 하회마을과 부용대 전망" },
    ],
    festivals: [
      { name: "안동국제탈춤페스티벌", months: [9, 10], period: "매년 9월 말~10월 초" },
    ],
    access: {
      car: { time: "약 2시간 50분", note: "중앙고속도로" },
      transit: { summary: "청량리발 KTX-이음 안동역 약 2시간", quality: "보통" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 하회마을(부용대 전망 포함)",
          "점심 — 구시장 찜닭",
          "오후 — 병산서원 또는 도산서원",
          "저녁 — 월영교 야경 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 하회마을과 부용대, 찜닭 저녁",
          "1일차 밤 — 월영교 달빛 산책",
          "2일차 — 도산서원과 만휴정",
          "2일차 오후 — 간고등어 정식 후 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 병산서원 배롱나무(여름)나 예천 회룡포까지.",
    images: placeholderImages("andong"),
    kakaoMapUrl: kakaoMap("안동하회마을"),
    naverMapUrl: naverMap("안동 여행"),
  },
  {
    id: "pohang",
    name: "포항",
    area: "경상",
    themes: ["바다", "미식"],
    tagline: "해가 가장 먼저 뜨는 철의 도시",
    whyGo: [
      "스페이스워크 위에서 보는 영일만 노을과 제철소 야경은 다른 데 없는 풍경이에요.",
      "과메기·물회·대게 — 계절마다 확실한 제철 미식이 기다려요.",
    ],
    highlights: [
      { name: "스페이스워크", description: "구름 위를 걷는 듯한 곡선 트랙 전망대" },
      { name: "호미곶", description: "상생의 손과 새해 해맞이의 성지" },
      { name: "죽도시장", description: "물회·대게 골목이 있는 동해안 최대 시장" },
      { name: "이가리 닻 전망대", description: "푸른 바다 위로 뻗은 닻 모양 전망대" },
    ],
    food: [
      { name: "과메기", description: "겨울 구룡포 덕장에서 말린 꽁치의 감칠맛" },
      { name: "물회", description: "포항식 새콤한 육수 물회" },
      { name: "대게", description: "구룡포·죽도시장의 겨울 별미" },
    ],
    seasonalTips: [
      { months: [11, 12, 1], note: "과메기·대게 제철 — 미식 여행의 최적기", peak: true },
      { months: [1], note: "호미곶 해맞이 — 새해 첫 일출 명소" },
      { months: [6, 7, 8], note: "영일대 해수욕장과 밤바다 야경" },
    ],
    festivals: [],
    access: {
      car: { time: "약 3시간 40분", note: "새만금포항·대구포항고속도로" },
      transit: { summary: "KTX 포항역 약 2시간 30분", quality: "편리" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 영일대와 스페이스워크",
          "점심 — 죽도시장 물회",
          "오후 — 호미곶과 구룡포 일본인가옥거리",
          "저녁 — 귀가 (이동시간 여유 두기)",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 죽도시장 물회, 구룡포와 호미곶",
          "1일차 밤 — 스페이스워크에서 제철소 야경",
          "2일차 — 이가리 닻 전망대와 칠포 해안 카페",
          "2일차 오후 — 과메기(겨울) 포장해서 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 경주 감포나 영덕 대게거리까지 해안 드라이브.",
    images: placeholderImages("pohang"),
    kakaoMapUrl: kakaoMap("스페이스워크"),
    naverMapUrl: naverMap("포항 여행"),
  },
  {
    id: "ulleungdo",
    name: "울릉도",
    area: "경상",
    themes: ["바다", "자연"],
    tagline: "배 타고 닿는 신비의 화산섬",
    whyGo: [
      "원시림과 해안 절벽, 코발트빛 바다 — 국내에서 가장 '외국 같은' 풍경이에요.",
      "가는 길이 어려운 만큼, 다녀오면 오래 남는 여행이 돼요.",
    ],
    highlights: [
      { name: "관음도", description: "연도교 건너 만나는 무인도 산책로" },
      { name: "나리분지", description: "화산 칼데라 안의 평지 마을 — 산채 비빔밥이 유명" },
      { name: "태하 향목전망대", description: "모노레일 타고 오르는 해안 절벽 전망" },
      { name: "독도", description: "날씨가 허락하면 배로 다녀오는 우리 땅 동쪽 끝" },
    ],
    food: [
      { name: "오징어 요리", description: "울릉도 근해 오징어회·내장탕" },
      { name: "홍합밥", description: "자연산 홍합의 진한 밥 한 그릇" },
      { name: "따개비칼국수", description: "울릉도에서만 맛보는 국물" },
    ],
    seasonalTips: [
      { months: [5, 6], note: "날씨가 가장 안정적 — 섬 일주와 독도 입도 확률이 높아요", peak: true },
      { months: [9, 10], note: "맑고 잔잔한 가을 바다, 오징어 성어기", peak: true },
      { months: [12, 1, 2], note: "겨울 풍랑으로 결항이 잦아요 — 일정 여유 필수" },
    ],
    festivals: [],
    access: {
      car: { time: "묵호·포항항까지 약 3시간 + 여객선 약 3시간", note: "차량 대신 현지 렌터카·투어 추천" },
      transit: { summary: "KTX·버스로 묵호항 또는 포항항 이동 후 여객선 약 3시간~", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "불가", recommendedNights: "2박 3일 이상" },
    courses: [
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 오후 입도, 저동항·촛대바위 산책",
          "2일차 — 해안도로 일주(관음도·삼선암)와 홍합밥",
          "2일차 오후 — 여객선으로 출도 (기상 변수 감안)",
        ],
      },
    ],
    extendTip: "하루 더 있다면 성인봉 등반 또는 독도 입도에 도전하세요 — 울릉도는 2박 3일이 정석이에요.",
    images: placeholderImages("ulleungdo"),
    kakaoMapUrl: kakaoMap("울릉도"),
    naverMapUrl: naverMap("울릉도 여행"),
  },
  {
    id: "hadong",
    name: "하동",
    area: "경상",
    themes: ["자연", "감성", "미식"],
    tagline: "섬진강과 지리산 사이, 야생차의 고장",
    whyGo: [
      "쌍계사 십리벚꽃길은 봄이면 터널을 이루는 국내 최고의 벚꽃길 중 하나예요.",
      "섬진강을 따라 이어지는 화개장터·평사리 들판은 소설 『토지』의 무대 그대로예요.",
      "국내 야생차 시배지라, 지리산 자락 녹차밭과 재첩국이 하동만의 맛을 만들어요.",
    ],
    highlights: [
      { name: "쌍계사·십리벚꽃길", description: "화개천을 따라 십 리를 잇는 벚꽃 터널과 지리산 고찰" },
      { name: "화개장터", description: "영·호남이 만나던 섬진강가의 정겨운 장터" },
      { name: "최참판댁·평사리", description: "소설 『토지』의 배경이 된 악양 들판의 고택" },
      { name: "하동 녹차밭", description: "지리산 자락에 계단식으로 펼쳐진 야생차밭" },
    ],
    food: [
      { name: "재첩국", description: "섬진강 재첩으로 끓인 맑고 시원한 해장 한 그릇" },
      { name: "참게가리장", description: "섬진강 참게로 끓인 걸쭉한 향토식" },
    ],
    seasonalTips: [
      { months: [3, 4], note: "십리벚꽃길과 화개장터 벚꽃 — 하동이 가장 붐비는 절정", peak: true },
      { months: [5, 6], note: "지리산 녹차밭 신록과 차 수확철" },
      { months: [10, 11], note: "평사리 들판의 황금빛과 섬진강 단풍" },
    ],
    festivals: [
      { name: "하동야생차문화축제", months: [5], period: "매년 5월" },
    ],
    access: {
      car: { time: "약 3시간 40분", note: "통영대전·남해고속도로" },
      transit: { summary: "경전선 하동역(무궁화) 또는 KTX 진주 후 버스 약 4시간", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "불가", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 화개장터와 쌍계사, 십리벚꽃길(봄)",
          "1일차 저녁 — 섬진강가 재첩국과 숙소",
          "2일차 — 최참판댁과 악양 평사리 들판",
          "2일차 오후 — 녹차밭 들러 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 바로 옆 구례(화엄사)까지 지리산 남쪽을 이어보세요.",
    images: placeholderImages("hadong"),
    kakaoMapUrl: kakaoMap("하동 화개장터"),
    naverMapUrl: naverMap("하동 여행"),
  },
  {
    id: "mungyeong",
    name: "문경",
    area: "경상",
    themes: ["자연", "역사", "액티비티"],
    tagline: "옛 고갯길과 사과, 오미자의 산골",
    whyGo: [
      "문경새재는 과거길 옛 정취가 그대로 남은 국내 대표 옛길 — 흙길 걷기가 좋아요.",
      "폐선 위 철로자전거와 짚라인 등 산골 액티비티가 알차게 모여 있어요.",
      "사과와 오미자의 고장이라 제철이면 과수원 체험과 오미자청이 별미예요.",
    ],
    highlights: [
      { name: "문경새재", description: "제1~3관문으로 이어지는 흙길 옛 과거길 — 드라마 오픈세트장도 있어요" },
      { name: "문경 철로자전거", description: "폐선 위를 달리는 레일바이크 — 진남교반 절경 구간이 백미" },
      { name: "단산 모노레일", description: "국내 최장급 관광 모노레일로 오르는 산 정상 전망" },
      { name: "에코월드·석탄박물관", description: "폐광을 활용한 테마파크와 짚라인" },
    ],
    food: [
      { name: "약돌한우·약돌돼지", description: "거정석 성분 사료로 키운 문경의 대표 고기" },
      { name: "오미자 요리", description: "오미자청·오미자 막걸리 등 새콤한 별미" },
    ],
    seasonalTips: [
      { months: [10, 11], note: "문경새재 단풍과 오미자·사과 수확철 — 문경의 절정", peak: true },
      { months: [4, 5], note: "새재 신록과 봄 트레킹" },
    ],
    festivals: [
      { name: "문경사과축제", months: [10, 11], period: "매년 10~11월" },
    ],
    access: {
      car: { time: "약 2시간", note: "중부내륙고속도로" },
      transit: { summary: "동서울발 버스 점촌·문경 약 2시간, 이후 버스·택시", quality: "보통" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 문경새재 옛길(제1~2관문)",
          "점심 — 약돌한우 또는 약돌돼지",
          "오후 — 철로자전거(진남교반 구간)",
          "저녁 — 오미자청 사서 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 문경새재와 오픈세트장, 약돌고기 저녁",
          "1일차 밤 — 문경온천에서 피로 풀기",
          "2일차 — 철로자전거와 단산 모노레일",
          "2일차 오후 — 에코월드 들렀다 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 예천 회룡포나 안동까지 경북 북부를 이어보세요.",
    images: placeholderImages("mungyeong"),
    kakaoMapUrl: kakaoMap("문경새재"),
    naverMapUrl: naverMap("문경 여행"),
  },
  {
    id: "hapcheon",
    name: "합천",
    area: "경상",
    themes: ["역사", "자연"],
    tagline: "해인사 팔만대장경과 황매산 억새",
    whyGo: [
      "해인사는 팔만대장경을 품은 법보사찰 — 장경판전은 유네스코 세계유산이에요.",
      "황매산은 봄 철쭉과 가을 억새로 능선이 뒤덮이는 국내 대표 고원이에요.",
      "합천영상테마파크는 근대 서울을 재현한 대형 세트장이라 사진 찍기 좋아요.",
    ],
    highlights: [
      { name: "해인사", description: "팔만대장경과 장경판전을 품은 가야산 법보종찰 — 유네스코 유산" },
      { name: "황매산 군립공원", description: "봄 철쭉·가을 억새로 유명한 해발 1,100m 고원" },
      { name: "합천영상테마파크", description: "근현대 서울을 재현한 대형 촬영 세트장" },
      { name: "합천호·정양늪", description: "드라이브와 생태 산책이 좋은 호수·습지" },
    ],
    food: [
      { name: "송이버섯 요리", description: "가야산 자락의 가을 별미" },
      { name: "한우국밥", description: "합천 재래시장의 든든한 한 그릇" },
    ],
    seasonalTips: [
      { months: [5], note: "황매산 철쭉이 능선을 분홍으로 덮는 시기", peak: true },
      { months: [10, 11], note: "황매산 억새와 해인사 단풍 — 가을의 절정", peak: true },
    ],
    festivals: [
      { name: "황매산철쭉제", months: [5], period: "매년 5월" },
    ],
    access: {
      car: { time: "약 3시간 30분", note: "중부내륙·광주대구고속도로" },
      transit: { summary: "고속버스 합천 약 3시간 40분, 해인사행 버스 환승", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 해인사와 장경판전",
          "점심 — 산채정식 또는 한우국밥",
          "오후 — 합천영상테마파크",
          "저녁 — 귀가 (이동시간 여유 두기)",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 해인사와 소리길 트레킹",
          "1일차 저녁 — 합천호반 숙소",
          "2일차 — 황매산 능선(철쭉/억새 시즌)",
          "2일차 오후 — 영상테마파크 들렀다 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 거창 수승대나 산청 지리산 자락까지.",
    images: placeholderImages("hapcheon"),
    kakaoMapUrl: kakaoMap("합천 해인사"),
    naverMapUrl: naverMap("합천 여행"),
  },
  {
    id: "miryang",
    name: "밀양",
    area: "경상",
    themes: ["자연", "역사"],
    tagline: "한여름에도 얼음이 어는 신비의 골",
    whyGo: [
      "얼음골은 삼복더위에 얼음이 얼고 겨울엔 계곡물이 김을 내는 국내 대표 지질 명소예요.",
      "영남루는 진주 촉석루·평양 부벽루와 함께 3대 누각으로 꼽히는 밀양강 절경이에요.",
      "표충사와 위양지 등 조용한 명소가 많아 한적한 산사·정원 여행에 좋아요.",
    ],
    highlights: [
      { name: "얼음골", description: "한여름에 얼음이 어는 재약산 자락의 천연기념물 계곡" },
      { name: "영남루", description: "밀양강을 내려다보는 조선의 대표 누각 — 야경이 아름다워요" },
      { name: "표충사", description: "재약산 아래 사명대사를 기리는 고찰" },
      { name: "위양지", description: "이팝나무가 물에 비치는 봄철 최고의 저수지 정원" },
    ],
    food: [
      { name: "돼지국밥", description: "밀양식 맑은 국물의 돼지국밥" },
      { name: "얼음골 사과", description: "일교차가 키운 아삭한 제철 사과" },
    ],
    seasonalTips: [
      { months: [5], note: "위양지 이팝나무가 하얗게 피는 짧고 귀한 시기", peak: true },
      { months: [7, 8], note: "얼음골 계곡 피서 — 한여름에도 서늘해요", peak: true },
      { months: [10, 11], note: "표충사 단풍과 사과 수확철" },
    ],
    festivals: [
      { name: "밀양아리랑대축제", months: [5], period: "매년 5월", note: "영남루 밀양강 일대" },
    ],
    access: {
      car: { time: "약 3시간 30분", note: "경부·중앙고속도로" },
      transit: { summary: "KTX 밀양역 약 2시간 30분, 얼음골·표충사는 버스·택시", quality: "보통" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 영남루와 밀양읍성",
          "점심 — 밀양 돼지국밥",
          "오후 — 얼음골 케이블카와 계곡",
          "저녁 — 귀가 (이동시간 여유 두기)",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 영남루와 위양지(봄), 표충사",
          "1일차 밤 — 영남루 밀양강 야경",
          "2일차 — 얼음골 케이블카와 사자평 억새",
          "2일차 오후 — 얼음골 사과 사서 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 양산 통도사나 부산 북부까지 묶어보세요.",
    images: placeholderImages("miryang"),
    kakaoMapUrl: kakaoMap("밀양 얼음골"),
    naverMapUrl: naverMap("밀양 여행"),
  },
];
