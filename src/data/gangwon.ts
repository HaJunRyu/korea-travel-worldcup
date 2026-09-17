import type { Destination } from "@/types/destination";
import { kakaoMap, naverMap, placeholderImages } from "./placeholder";

// ⚠️ 콘텐츠는 AI 초안 — 접근성(소요시간)·축제 시기는 배포 전 검수 필요 (docs/PLAN.md 7.2)

export const gangwon: Destination[] = [
  {
    id: "gangneung",
    name: "강릉",
    area: "강원",
    themes: ["바다", "미식", "감성"],
    tagline: "커피 향과 바다를 한 번에",
    whyGo: [
      "KTX 2시간이면 안목 커피거리에서 바다를 보며 커피를 마실 수 있어요 — 뚜벅이 동해안 여행의 정석.",
      "초당순두부, 장칼국수, 꼬막비빔밥까지 '강릉 와서 먹는 것' 리스트가 확실해요.",
      "경포호 자전거 한 바퀴, 새벽 정동진 해돋이 — 하루의 리듬이 있는 여행지예요.",
    ],
    highlights: [
      { name: "안목해변 커피거리", description: "해변을 따라 카페가 늘어선 강릉 커피의 성지" },
      { name: "경포해변·경포호", description: "바다와 호수를 같이 끼고 걷거나 자전거 타기 좋은 코스" },
      { name: "주문진", description: "새벽 어시장과 드라마 촬영지 방사제가 있는 항구" },
      { name: "오죽헌", description: "신사임당과 율곡이 나고 자란 고택" },
    ],
    food: [
      { name: "초당순두부", description: "바닷물로 간수를 잡은 몽글몽글 순두부 한 상" },
      { name: "장칼국수", description: "고추장 베이스의 얼큰한 강릉식 칼국수" },
      { name: "꼬막비빔밥", description: "줄 서서 먹는 강릉의 새 명물" },
    ],
    seasonalTips: [
      { months: [6, 7, 8], note: "해수욕 성수기 — 경포·안목 바다가 가장 붐비고 가장 신나요", peak: true },
      { months: [10], note: "커피축제와 선선한 가을 바다 산책", peak: true },
      { months: [1], note: "정동진 해돋이 — 새해 명소라 1월 초는 숙소 예약 서두르세요" },
    ],
    festivals: [
      { name: "강릉단오제", months: [6], period: "매년 6월(음력 5월)", note: "유네스코 인류무형문화유산" },
      { name: "강릉커피축제", months: [10], period: "매년 10월" },
    ],
    access: {
      car: { time: "약 2시간 40분", note: "영동고속도로" },
      transit: { summary: "KTX 강릉역 약 2시간", quality: "편리" },
      localMobility: "뚜벅이 OK",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — KTX 도착 후 안목 커피거리",
          "점심 — 초당순두부마을",
          "오후 — 경포호 자전거 또는 경포해변 산책",
          "저녁 — 중앙시장 먹거리 후 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 안목 커피거리, 초당순두부, 경포 일대",
          "1일차 밤 — 강문해변 야경과 중앙시장",
          "2일차 — 주문진 어시장과 방사제, 사천진 카페",
          "2일차 오후 — 오죽헌 들렀다 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 정동진 해돋이와 헌화로 해안 드라이브까지.",
    images: placeholderImages("gangneung"),
    kakaoMapUrl: kakaoMap("강릉 안목해변"),
    naverMapUrl: naverMap("강릉 여행"),
  },
  {
    id: "sokcho",
    name: "속초",
    area: "강원",
    themes: ["바다", "자연", "미식"],
    tagline: "설악산과 바다 사이의 미식 도시",
    whyGo: [
      "오전엔 설악산 케이블카, 오후엔 바다, 저녁엔 중앙시장 — 산·바다·시장이 다 시내권이에요.",
      "닭강정, 오징어순대, 물회… 시장 먹거리의 밀도가 동해안 최강이에요.",
    ],
    highlights: [
      { name: "설악산 케이블카", description: "권금성까지 10분 만에 올라 설악의 암봉을 눈앞에서" },
      { name: "속초관광수산시장", description: "닭강정 원조집과 먹거리 골목으로 유명한 중앙시장" },
      { name: "영금정", description: "바위 위 정자에서 보는 일출과 파도" },
      { name: "아바이마을", description: "갯배를 타고 건너가는 실향민 마을" },
    ],
    food: [
      { name: "닭강정", description: "식어도 맛있는 속초 시그니처" },
      { name: "오징어순대", description: "아바이마을에서 탄생한 향토 음식" },
      { name: "물회", description: "동해 활어를 시원하게 말아먹는 여름 별미" },
    ],
    seasonalTips: [
      { months: [10], note: "설악산 단풍 절정 — 케이블카는 아침 일찍 서두르세요", peak: true },
      { months: [6, 7, 8], note: "속초해변 개장, 시장과 바다 모두 성수기" },
      { months: [12, 1], note: "겨울 바다와 뜨끈한 생선구이 골목의 계절" },
    ],
    festivals: [],
    access: {
      car: { time: "약 2시간 10분", note: "서울양양고속도로" },
      transit: { summary: "고속버스 속초터미널 약 2시간 20분", quality: "보통" },
      localMobility: "뚜벅이 OK",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 설악산 케이블카(권금성)",
          "점심 — 중앙시장 닭강정·먹거리",
          "오후 — 영금정과 속초해변 산책",
          "저녁 — 물회 한 그릇 후 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 설악산 케이블카와 신흥사 산책",
          "1일차 저녁 — 중앙시장 먹거리 투어와 대포항 야경",
          "2일차 — 갯배 타고 아바이마을, 오징어순대 점심",
          "2일차 오후 — 외옹치 바다향기로 산책 후 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 설악산 비선대·비룡폭포 코스나 고성 방향 해안 카페까지.",
    images: placeholderImages("sokcho"),
    kakaoMapUrl: kakaoMap("속초중앙시장"),
    naverMapUrl: naverMap("속초 여행"),
  },
  {
    id: "yangyang",
    name: "양양",
    area: "강원",
    themes: ["바다", "액티비티"],
    tagline: "서핑으로 하루를 여는 바다",
    whyGo: [
      "국내 서핑의 수도 — 강습 인프라가 잘 돼 있어 처음이어도 하루면 보드에 서봅니다.",
      "서피비치·인구 해변 주변으로 해변 바·카페 문화가 있어 밤까지 즐길 거리가 있어요.",
    ],
    highlights: [
      { name: "서피비치", description: "서핑 전용 해변과 해변 라운지 바 — 여름엔 축제 분위기" },
      { name: "인구·죽도해변", description: "서퍼들이 모여 사는 동네 — 감성 카페와 서핑숍 골목" },
      { name: "하조대", description: "정자와 등대, 기암절벽이 어우러진 일출 명소" },
      { name: "남애항", description: "강원의 아름다운 항구 — 방파제 산책이 좋아요" },
    ],
    food: [
      { name: "물회", description: "서핑 후 시원하게 들이켜는 한 그릇" },
      { name: "송이 요리", description: "가을 양양송이 — 제철이면 꼭" },
      { name: "메밀막국수", description: "담백하게 마무리하는 강원의 맛" },
    ],
    seasonalTips: [
      { months: [6, 7, 8, 9], note: "서핑 시즌 — 수온과 파도 모두 초심자에게 좋아요", peak: true },
      { months: [9, 10], note: "송이 철 + 한적해진 바다, 어른의 양양" },
    ],
    festivals: [
      { name: "양양송이축제", months: [9, 10], period: "매년 9~10월" },
    ],
    access: {
      car: { time: "약 2시간", note: "서울양양고속도로" },
      transit: { summary: "고속버스 양양·낙산 약 2시간 30분, 해변까지 버스·택시", quality: "보통" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 서핑 입문 강습(2~3시간)",
          "점심 — 인구 해변 골목 브런치",
          "오후 — 하조대와 해변 카페",
          "저녁 — 물회 먹고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 서핑 강습과 서피비치 라운지",
          "1일차 밤 — 인구 해변 바에서 밤바다",
          "2일차 — 아침 프리서핑 또는 낙산사 산책",
          "2일차 오후 — 남애항 들러 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 낙산사 의상대 일출과 오색 주전골 트레킹까지.",
    images: placeholderImages("yangyang"),
    kakaoMapUrl: kakaoMap("서피비치"),
    naverMapUrl: naverMap("양양 여행"),
  },
  {
    id: "chuncheon",
    name: "춘천",
    area: "강원",
    themes: ["자연", "미식"],
    tagline: "호수를 끼고 도는 낭만 도시",
    whyGo: [
      "ITX 한 시간이면 호수 도시 — 의암호 케이블카부터 스카이워크까지 물의 풍경이 이어져요.",
      "닭갈비·막국수라는 확실한 두 방이 있어 먹는 재미가 보장돼요.",
    ],
    highlights: [
      { name: "삼악산 호수케이블카", description: "의암호를 건너 삼악산으로 — 국내 최장급 호수 케이블카" },
      { name: "소양강 스카이워크", description: "유리 바닥 아래로 강물이 흐르는 전망대" },
      { name: "김유정역·레일바이크", description: "옛 경춘선 폐선을 달리는 레일바이크" },
      { name: "공지천·에티오피아길", description: "호수 보며 걷는 산책로와 오래된 커피거리" },
    ],
    food: [
      { name: "숯불 닭갈비", description: "철판과는 또 다른 원조의 맛" },
      { name: "막국수", description: "닭갈비 뒤에 반드시 따라오는 마무리" },
    ],
    seasonalTips: [
      { months: [4, 5], note: "벚꽃과 신록의 호수 — 자전거 타기 최고의 시즌", peak: true },
      { months: [10, 11], note: "물안개 낀 가을 호수와 단풍", peak: true },
      { months: [7, 8], note: "여름엔 물레길 카누 체험이 시원해요" },
    ],
    festivals: [
      { name: "춘천마임축제", months: [5], period: "매년 5월" },
      { name: "춘천막국수닭갈비축제", months: [8], period: "매년 8월" },
    ],
    access: {
      car: { time: "약 1시간 20분" },
      transit: { summary: "ITX-청춘 춘천역 약 1시간 10분", quality: "편리" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "당일 ~ 1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 삼악산 호수케이블카",
          "점심 — 명동 닭갈비골목",
          "오후 — 소양강 스카이워크와 공지천 산책",
          "저녁 — 막국수로 마무리 후 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 케이블카와 의암호 스카이워크, 닭갈비 저녁",
          "1일차 밤 — 공지천 야경 산책",
          "2일차 — 김유정역 레일바이크",
          "2일차 오후 — 카페거리 들렀다 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 남이섬(가평 접경)이나 구곡폭포까지 묶어보세요.",
    images: placeholderImages("chuncheon"),
    kakaoMapUrl: kakaoMap("춘천 삼악산호수케이블카"),
    naverMapUrl: naverMap("춘천 여행"),
  },
  {
    id: "pyeongchang",
    name: "평창",
    area: "강원",
    themes: ["자연", "액티비티"],
    tagline: "해발 700m, 목장과 설원의 고원",
    whyGo: [
      "대관령 양떼목장·하늘목장의 초원 풍경은 국내에서 가장 이국적인 축에 들어요.",
      "여름엔 시원한 고랭지 피서, 겨울엔 스키 — 계절이 바뀔 때마다 다른 여행지가 돼요.",
    ],
    highlights: [
      { name: "대관령 양떼목장", description: "능선을 따라 양들이 풀을 뜯는 초원 산책로" },
      { name: "발왕산 케이블카", description: "해발 1,458m 정상의 스카이워크와 주목 군락" },
      { name: "월정사 전나무숲길", description: "천년의 숲을 맨발로도 걷는 명상 길" },
      { name: "대관령 하늘목장", description: "트랙터 마차 타고 오르는 드넓은 목장" },
    ],
    food: [
      { name: "메밀막국수·메밀전병", description: "봉평 메밀의 본고장" },
      { name: "대관령 한우", description: "고원에서 키운 한우 구이" },
      { name: "황태 요리", description: "덕장에서 말린 황태해장국" },
    ],
    seasonalTips: [
      { months: [9], note: "봉평 메밀꽃이 소금 뿌린 듯 피는 시기", peak: true },
      { months: [12, 1, 2], note: "스키·눈꽃 시즌 — 국내에서 눈이 가장 확실한 동네", peak: true },
      { months: [7, 8], note: "한여름에도 서늘한 고랭지 피서" },
    ],
    festivals: [
      { name: "평창효석문화제", months: [9], period: "매년 9월", note: "『메밀꽃 필 무렵』의 봉평 일대" },
      { name: "평창송어축제", months: [12, 1], period: "매년 12월~1월" },
    ],
    access: {
      car: { time: "약 2시간 10분", note: "영동고속도로" },
      transit: { summary: "KTX 진부역·평창역 약 1시간 40분, 이후 버스·택시", quality: "보통" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 대관령 양떼목장",
          "점심 — 황태해장국 또는 한우",
          "오후 — 월정사 전나무숲길",
          "저녁 — 봉평 막국수 먹고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 양떼목장과 하늘목장, 한우 저녁",
          "1일차 밤 — 고원의 별 보기(리조트 숙박 추천)",
          "2일차 — 발왕산 케이블카 스카이워크",
          "2일차 오후 — 월정사 숲길 걷고 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 오대산 선재길 트레킹이나 정선 방면 드라이브까지.",
    images: placeholderImages("pyeongchang"),
    kakaoMapUrl: kakaoMap("대관령 양떼목장"),
    naverMapUrl: naverMap("평창 여행"),
  },
  {
    id: "jeongseon",
    name: "정선",
    area: "강원",
    themes: ["자연", "액티비티"],
    tagline: "굽이치는 산골에서 노는 법",
    whyGo: [
      "레일바이크, 짚와이어, 스카이워크 — 폐광촌이 액티비티의 성지로 바뀐 동네예요.",
      "정선 5일장(아리랑시장)의 곤드레밥과 콧등치기국수는 시장 음식의 정수예요.",
    ],
    highlights: [
      { name: "정선 레일바이크", description: "구절리~아우라지 폐선 위를 달리는 원조 레일바이크" },
      { name: "정선아리랑시장", description: "끝자리 2·7일에 서는 5일장 — 산나물과 먹거리" },
      { name: "병방치 스카이워크", description: "한반도 지형 물돌이를 발아래로 보는 전망대" },
      { name: "화암동굴", description: "금광과 석회동굴이 이어지는 테마 동굴" },
    ],
    food: [
      { name: "곤드레나물밥", description: "들기름 향 가득한 정선의 대표 한 그릇" },
      { name: "콧등치기국수", description: "후루룩 먹다 콧등을 친다는 메밀국수" },
    ],
    seasonalTips: [
      { months: [9, 10], note: "민둥산 억새와 산골 단풍 — 정선이 가장 화려한 시기", peak: true },
      { months: [12, 1, 2], note: "하이원 스키 시즌" },
    ],
    festivals: [
      { name: "정선아리랑제", months: [9], period: "매년 9월" },
    ],
    access: {
      car: { time: "약 2시간 40분" },
      transit: { summary: "고속버스 또는 KTX 진부역 환승 약 3시간", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 레일바이크(예약 필수)",
          "점심 — 아리랑시장 곤드레밥",
          "오후 — 병방치 스카이워크",
          "저녁 — 귀가 (이동시간 여유 두기)",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 레일바이크와 아우라지, 시장 저녁",
          "1일차 밤 — 산골의 별 구경",
          "2일차 — 병방치 스카이워크와 화암동굴",
          "2일차 오후 — 민둥산(가을) 또는 삼탄아트마인",
        ],
      },
    ],
    extendTip: "하루 더 있다면 동강 래프팅(여름)이나 하이원 곤돌라까지.",
    images: placeholderImages("jeongseon"),
    kakaoMapUrl: kakaoMap("정선레일바이크"),
    naverMapUrl: naverMap("정선 여행"),
  },
  {
    id: "donghae-samcheok",
    name: "동해·삼척",
    area: "강원",
    themes: ["바다", "액티비티"],
    tagline: "촛대바위에서 투명카누까지, 거친 동해의 매력",
    whyGo: [
      "추암 촛대바위의 일출은 애국가 첫 화면에 나오던 바로 그 장면이에요.",
      "장호항 투명카누·스노클링은 '한국의 나폴리'라는 별명이 아깝지 않아요.",
    ],
    highlights: [
      { name: "추암 촛대바위", description: "바다 위에 솟은 기암 — 해암정과 출렁다리까지 한 코스" },
      { name: "무릉계곡", description: "두타산 아래 화강암 계곡 — 여름 피서의 성지" },
      { name: "장호항", description: "투명카누와 스노클링으로 유명한 맑은 항구" },
      { name: "삼척해상케이블카", description: "장호~용화 바다 위를 건너는 케이블카" },
    ],
    food: [
      { name: "곰치국", description: "속을 확 풀어주는 동해안의 해장국" },
      { name: "물회", description: "오징어·광어를 살얼음 육수에" },
      { name: "대게", description: "겨울 삼척 정라항의 별미" },
    ],
    seasonalTips: [
      { months: [6, 7, 8], note: "장호항 투명카누·스노클링 시즌", peak: true },
      { months: [1], note: "추암 촛대바위 해돋이 — 새해 일출 명소" },
      { months: [11, 12], note: "대게 철이 시작되는 계절" },
    ],
    festivals: [],
    access: {
      car: { time: "약 3시간", note: "동해고속도로" },
      transit: { summary: "KTX 동해역 약 2시간 40분, 이후 버스·택시", quality: "보통" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 추암 촛대바위와 출렁다리",
          "점심 — 묵호항 곰치국",
          "오후 — 무릉계곡 산책",
          "저녁 — 귀가 (이동시간 여유 두기)",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 무릉계곡과 묵호 논골담길, 물회 저녁",
          "2일차 새벽 — 추암 촛대바위 일출",
          "2일차 — 장호항 투명카누와 해상케이블카",
          "2일차 오후 — 삼척 쏠비치 산책 후 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 환선굴(대금굴)이나 맹방해변까지 내려가 보세요.",
    images: placeholderImages("donghae-samcheok"),
    kakaoMapUrl: kakaoMap("추암 촛대바위"),
    naverMapUrl: naverMap("동해 삼척 여행"),
  },
  {
    id: "goseong-gw",
    name: "고성",
    area: "강원",
    themes: ["바다", "자연"],
    tagline: "분단의 끝, 가장 북쪽의 맑은 바다",
    whyGo: [
      "통일전망대에서 금강산과 해금강을 눈앞에 두는 경험은 고성에서만 가능해요.",
      "화진포·송지호처럼 바다와 석호가 나란한 풍경이 강원 최북단의 매력이에요.",
      "관광객이 덜 몰려 동해안에서 가장 한적하고 맑은 바다를 만날 수 있어요.",
    ],
    highlights: [
      { name: "통일전망대·DMZ박물관", description: "해금강과 금강산이 보이는 국토 최북단 전망대" },
      { name: "화진포", description: "국내 최대 석호와 해변 — 이승만·김일성 별장이 남아 있어요" },
      { name: "송지호해변·철새관망타워", description: "맑은 백사장과 석호 생태를 함께 보는 곳" },
      { name: "청간정", description: "설악과 동해가 어우러지는 관동팔경의 정자" },
    ],
    food: [
      { name: "명태·도루묵 요리", description: "고성 앞바다의 제철 생선 조림·찜" },
      { name: "가리비·해산물", description: "거진·대진항의 싱싱한 조개구이" },
    ],
    seasonalTips: [
      { months: [6, 7, 8], note: "한적하고 맑은 최북단 해수욕 — 고성의 여름", peak: true },
      { months: [10, 11], note: "송지호 철새와 화진포 가을 산책" },
    ],
    festivals: [],
    access: {
      car: { time: "약 2시간 40분", note: "서울양양고속도로 + 동해대로" },
      transit: { summary: "고속버스 간성·거진 약 3시간, 해변까지 버스·택시", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 통일전망대와 DMZ박물관",
          "점심 — 거진항 해산물",
          "오후 — 화진포 호수와 해변 산책",
          "저녁 — 귀가 (이동시간 여유 두기)",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 통일전망대·화진포, 조개구이 저녁",
          "1일차 밤 — 최북단 해변의 별과 파도",
          "2일차 — 송지호해변과 청간정",
          "2일차 오후 — 속초 방향으로 내려오며 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 바로 아래 속초·설악산과 묶어 동해 북부를 완성하세요.",
    images: placeholderImages("goseong-gw"),
    kakaoMapUrl: kakaoMap("고성 통일전망대"),
    naverMapUrl: naverMap("고성 화진포"),
  },
];
