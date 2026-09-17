import type { Destination } from "@/types/destination";
import { kakaoMap, naverMap, placeholderImages } from "./placeholder";

// ⚠️ 콘텐츠는 AI 초안 — 접근성(소요시간)·축제 시기는 배포 전 검수 필요 (docs/PLAN.md 7.2)

export const sudogwon: Destination[] = [
  {
    id: "seoul",
    name: "서울",
    area: "수도권",
    themes: ["역사", "미식"],
    tagline: "살던 도시도 여행이 되는 곳",
    whyGo: [
      "고궁 야간개장, 미술관, 매주 바뀌는 팝업까지 — 하루를 꽉 채우는 콘텐츠 밀도는 전국 최강이에요.",
      "차 없이 어디든 갈 수 있어 뚜벅이 여행의 부담이 전혀 없어요.",
      "이동·숙박 부담이 적은 만큼 미식과 전시에 예산을 몰아줄 수 있어요.",
    ],
    highlights: [
      { name: "경복궁·서촌", description: "고궁 산책 후 서촌 골목의 카페와 밥집으로 이어지는 클래식 코스" },
      { name: "북촌한옥마을", description: "기와지붕 너머로 남산타워가 겹쳐 보이는 서울 대표 풍경" },
      { name: "성수동", description: "공장을 개조한 카페와 팝업스토어가 매주 바뀌는 트렌드 1번지" },
      { name: "남산·N서울타워", description: "해질녘 케이블카로 올라가는 서울 야경의 정석" },
    ],
    food: [
      { name: "광장시장", description: "빈대떡·육회·마약김밥, 시장 먹거리 투어의 원조" },
      { name: "을지로 노포", description: "골뱅이무침부터 평양냉면까지, 오래된 맛집이 골목마다" },
    ],
    seasonalTips: [
      { months: [4], note: "여의도·석촌호수 벚꽃과 고궁의 봄 — 서울이 가장 예쁜 2주", peak: true },
      { months: [10, 11], note: "고궁 단풍과 은행나무길, 야간개장 시즌", peak: true },
      { months: [12, 1], note: "연말 조명과 궁궐 설경, 실내 전시 투어하기 좋은 계절" },
    ],
    festivals: [
      { name: "서울세계불꽃축제", months: [10], period: "매년 10월 초", note: "여의도 한강공원 — 자리 경쟁이 치열해요" },
    ],
    access: {
      car: { time: "시내·근교 이동", note: "주차보다 대중교통이 편해요" },
      transit: { summary: "지하철·버스로 어디든", quality: "편리" },
      localMobility: "뚜벅이 OK",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "당일 ~ 1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 경복궁 관람 후 서촌 골목 산책",
          "점심 — 광장시장 먹거리 투어",
          "오후 — 북촌한옥마을과 삼청동 카페",
          "저녁 — 남산 야경 또는 을지로 노포 한잔",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 경복궁·서촌·북촌 산책, 광장시장 저녁",
          "1일차 밤 — 남산 전망대 또는 한강 야경",
          "2일차 — 성수동 카페·팝업 투어",
          "2일차 오후 — 한강공원 자전거 또는 피크닉으로 마무리",
        ],
      },
    ],
    extendTip: "하루 더 있다면 서울숲~성수, 경의선숲길처럼 동네 하나를 통째로 걸어보세요.",
    images: placeholderImages("seoul"),
    kakaoMapUrl: kakaoMap("서울 경복궁"),
    naverMapUrl: naverMap("서울 여행"),
  },
  {
    id: "suwon",
    name: "수원",
    area: "수도권",
    themes: ["역사", "감성"],
    tagline: "성곽 따라 걷는 조선의 계획도시",
    whyGo: [
      "수원화성 성곽길은 유네스코 유산 위를 직접 걷는 경험 — 특히 야경이 압도적이에요.",
      "행궁동 골목이 통째로 카페·소품숍 거리가 되어 반나절이 금방 가요.",
      "서울에서 1시간, 당일치기로 가장 밀도 높은 코스가 나오는 동네예요.",
    ],
    highlights: [
      { name: "수원화성 성곽길", description: "팔달문에서 장안문까지, 성벽 위에서 도시를 내려다보며 걷는 길" },
      { name: "화성행궁", description: "정조의 꿈이 담긴 행궁 — 야간개장 때가 백미" },
      { name: "행궁동 카페거리", description: "한옥과 골목 사이사이 감성 카페와 소품숍" },
      { name: "플라잉수원", description: "헬륨기구를 타고 화성 전체를 내려다보는 뷰포인트" },
    ],
    food: [
      { name: "수원왕갈비", description: "숯불 향 가득한 왕갈비 — 수원 여행의 공식 마무리" },
      { name: "통닭거리", description: "왕갈비통닭과 옛날통닭이 늘어선 라이벌 골목" },
    ],
    seasonalTips: [
      { months: [4, 5], note: "성곽길 벚꽃과 봄바람 — 걷기 가장 좋은 계절", peak: true },
      { months: [10], note: "화성문화제와 가을 성곽 야경", peak: true },
      { months: [7, 8], note: "한낮 성곽길은 그늘이 적어요 — 야간개장을 활용하세요" },
    ],
    festivals: [
      { name: "수원화성문화제", months: [10], period: "매년 10월", note: "정조대왕 능행차 재현이 하이라이트" },
    ],
    access: {
      car: { time: "약 1시간", note: "주말 정체 감안" },
      transit: { summary: "지하철 1호선·광역버스 약 1시간", quality: "편리" },
      localMobility: "뚜벅이 OK",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "당일 ~ 1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 화성행궁 관람, 행궁동 골목 산책",
          "점심 — 통닭거리 왕갈비통닭",
          "오후 — 장안문~화홍문 성곽길 걷기",
          "저녁 — 플라잉수원 또는 성곽 야경",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 화성행궁과 행궁동 카페거리",
          "1일차 밤 — 화성 야간개장 산책",
          "2일차 — 성곽길 한 바퀴(약 2시간)와 수원전통문화관",
          "2일차 점심 — 수원왕갈비로 마무리",
        ],
      },
    ],
    extendTip: "하루 더 있다면 광교호수공원 산책이나 스타필드 수원까지 묶어보세요.",
    images: placeholderImages("suwon"),
    kakaoMapUrl: kakaoMap("수원화성"),
    naverMapUrl: naverMap("수원 여행"),
  },
  {
    id: "gapyeong",
    name: "가평",
    area: "수도권",
    themes: ["자연", "감성"],
    tagline: "서울에서 한 시간, 물과 숲의 휴양지",
    whyGo: [
      "남이섬·아침고요수목원·쁘띠프랑스가 한 동선에 있어 초행 코스로 실패가 없어요.",
      "ITX로 한 시간인데 글램핑·펜션 인프라는 수도권 최강 — 즉흥 1박에 최적이에요.",
    ],
    highlights: [
      { name: "남이섬", description: "메타세쿼이아길과 강변 산책로가 있는 반나절 섬 여행" },
      { name: "아침고요수목원", description: "사계절 얼굴이 다 다른 국내 대표 정원" },
      { name: "쁘띠프랑스·이탈리아마을", description: "동화 세트장 같은 언덕 위 테마마을" },
      { name: "자라섬", description: "캠핑과 재즈 페스티벌의 성지 — 가을 꽃밭도 유명" },
    ],
    food: [
      { name: "숯불 닭갈비", description: "남이섬 입구 닭갈비 거리의 명물" },
      { name: "잣 요리", description: "가평 잣으로 만든 잣국수와 잣막걸리" },
    ],
    seasonalTips: [
      { months: [10], note: "자라섬 재즈와 남이섬 단풍 — 가평의 하이라이트 시즌", peak: true },
      { months: [5, 6], note: "신록의 수목원과 북한강 라이딩" },
      { months: [12, 1, 2], note: "아침고요수목원 오색별빛정원전 — 겨울 밤 조명이 장관" },
    ],
    festivals: [
      { name: "자라섬재즈페스티벌", months: [10], period: "매년 10월", note: "국내 대표 야외 재즈 페스티벌" },
    ],
    access: {
      car: { time: "약 1시간 20분", note: "주말 경춘 방면 정체" },
      transit: { summary: "ITX-청춘 가평역 약 1시간, 이후 가평관광순환버스", quality: "보통" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "당일 ~ 1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 남이섬 산책",
          "점심 — 닭갈비 거리",
          "오후 — 쁘띠프랑스 또는 아침고요수목원",
          "저녁 — 북한강변 카페에서 노을 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 남이섬과 닭갈비, 저녁엔 글램핑 바비큐",
          "2일차 오전 — 아침고요수목원",
          "2일차 오후 — 자라섬 산책 또는 북한강 카페 투어",
        ],
      },
    ],
    extendTip: "하루 더 있다면 호명호수 트레킹이나 청평호 수상레저까지.",
    images: placeholderImages("gapyeong"),
    kakaoMapUrl: kakaoMap("남이섬"),
    naverMapUrl: naverMap("가평 여행"),
  },
  {
    id: "yangpyeong",
    name: "양평",
    area: "수도권",
    themes: ["자연", "감성"],
    tagline: "두물머리 물안개와 강변 카페의 동네",
    whyGo: [
      "이른 아침 두물머리 물안개는 수도권에서 만날 수 있는 가장 비현실적인 풍경이에요.",
      "남한강·북한강변을 따라 뷰 좋은 베이커리 카페가 줄지어 있어 드라이브 코스로 완벽해요.",
    ],
    highlights: [
      { name: "두물머리", description: "북한강과 남한강이 만나는 곳 — 일출과 물안개 명소" },
      { name: "세미원", description: "여름이면 연꽃으로 가득 차는 수생식물 정원" },
      { name: "용문사", description: "수령 1,100년 은행나무가 지키는 천년 고찰" },
      { name: "문호리·서종 카페거리", description: "강변을 따라 이어지는 베이커리 카페 벨트" },
    ],
    food: [
      { name: "옥천냉면", description: "양평의 양대 향토 음식 중 하나" },
      { name: "양평해장국", description: "선지 가득한 얼큰한 아침 한 그릇" },
    ],
    seasonalTips: [
      { months: [7, 8], note: "세미원 연꽃 만개 — 이른 아침이 가장 예뻐요", peak: true },
      { months: [10, 11], note: "용문사 은행나무가 노랗게 물드는 시기", peak: true },
      { months: [1, 2], note: "두물머리 설경과 겨울 물안개" },
    ],
    festivals: [
      { name: "세미원 연꽃문화제", months: [7], period: "매년 7월" },
    ],
    access: {
      car: { time: "약 1시간", note: "강변 드라이브 겸" },
      transit: { summary: "경의중앙선 양수역·양평역 약 1시간 20분", quality: "보통" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "당일 ~ 1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "이른 오전 — 두물머리 산책(물안개는 아침이 승부)",
          "오전 — 세미원 관람",
          "점심 — 옥천냉면 또는 해장국",
          "오후 — 문호리 카페에서 강 보며 쉬다 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 용문사와 용문산관광지, 강변 카페",
          "2일차 새벽 — 두물머리 일출과 물안개",
          "2일차 오전 — 세미원, 점심 후 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 구둔역·중미산천문대 같은 한적한 스팟까지.",
    images: placeholderImages("yangpyeong"),
    kakaoMapUrl: kakaoMap("두물머리"),
    naverMapUrl: naverMap("양평 여행"),
  },
  {
    id: "ganghwado",
    name: "강화도",
    area: "수도권",
    themes: ["바다", "역사"],
    tagline: "갯벌 노을과 역사가 겹치는 지붕 없는 박물관",
    whyGo: [
      "고인돌부터 조선의 요새까지 — 섬 전체가 유적이라 걷는 곳마다 이야기가 있어요.",
      "조양방직 같은 초대형 감성 카페와 동막해변 노을 조합이 반나절 코스로 훌륭해요.",
    ],
    highlights: [
      { name: "전등사", description: "삼랑성 성곽 안에 안긴 고찰 — 숲길 산책이 좋아요" },
      { name: "조양방직", description: "방직공장을 통째로 개조한 강화 대표 카페" },
      { name: "동막해변", description: "물이 빠지면 끝없이 펼쳐지는 갯벌, 해질녘 노을 명소" },
      { name: "광성보", description: "강화해협을 지키던 요새 — 신미양요의 현장" },
    ],
    food: [
      { name: "젓국갈비", description: "새우젓으로 간을 한 강화식 맑은 돼지갈비탕" },
      { name: "밴댕이회무침", description: "강화 포구의 명물 한 접시" },
    ],
    seasonalTips: [
      { months: [4], note: "고려산 진달래 능선이 분홍으로 물들어요", peak: true },
      { months: [9, 10], note: "갯벌 노을이 가장 깊어지는 계절, 새우젓 철" },
    ],
    festivals: [
      { name: "고려산 진달래축제", months: [4], period: "매년 4월" },
    ],
    access: {
      car: { time: "약 1시간 30분", note: "주말 초지대교 정체 감안" },
      transit: { summary: "3000번 광역버스 약 1시간 30분", quality: "보통" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "당일 ~ 1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 전등사와 삼랑성 숲길",
          "점심 — 젓국갈비",
          "오후 — 조양방직 카페, 광성보",
          "저녁 — 동막해변 노을 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 광성보·초지진 등 해안 요새 코스와 조양방직",
          "1일차 저녁 — 동막해변 노을과 조개구이",
          "2일차 — 고인돌 유적과 강화풍물시장",
          "2일차 오후 — 석모도 보문사까지 다녀오기",
        ],
      },
    ],
    extendTip: "하루 더 있다면 교동도 대룡시장으로 시간여행을 다녀오세요.",
    images: placeholderImages("ganghwado"),
    kakaoMapUrl: kakaoMap("강화도"),
    naverMapUrl: naverMap("강화도 여행"),
  },
];
