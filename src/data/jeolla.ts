import type { Destination } from "@/types/destination";
import { kakaoMap, naverMap, placeholderImages } from "./placeholder";

// ⚠️ 콘텐츠는 AI 초안 — 접근성(소요시간)·축제 시기는 배포 전 검수 필요 (docs/PLAN.md 7.2)

export const jeolla: Destination[] = [
  {
    id: "jeonju",
    name: "전주",
    area: "전라",
    themes: ["역사", "미식"],
    tagline: "한옥마을과 밥상의 수도",
    whyGo: [
      "한옥마을·경기전·전동성당이 도보 10분 안에 — 걷기만 해도 완성되는 여행이에요.",
      "비빔밥, 콩나물국밥, 막걸리골목까지 '미식 도시'라는 말이 과장이 아니에요.",
    ],
    highlights: [
      { name: "전주한옥마을", description: "700여 채 한옥이 모인 국내 최대 한옥 마을" },
      { name: "경기전·전동성당", description: "태조 어진과 로마네스크 성당이 마주 보는 풍경" },
      { name: "남부시장 야시장", description: "금·토 밤에 열리는 청년몰과 먹거리 장터" },
      { name: "자만벽화마을", description: "한옥마을을 내려다보는 언덕 위 벽화 골목" },
    ],
    food: [
      { name: "전주비빔밥", description: "놋그릇에 정갈하게 담긴 원조의 품격" },
      { name: "콩나물국밥·모주", description: "새벽부터 여는 해장의 성지" },
      { name: "막걸리골목", description: "주전자를 시키면 한 상이 따라오는 문화" },
    ],
    seasonalTips: [
      { months: [4, 5], note: "봄 한옥마을과 영화제 — 도시가 가장 활기찬 시기", peak: true },
      { months: [10, 11], note: "한복 입고 걷기 좋은 가을 한옥 골목", peak: true },
    ],
    festivals: [
      { name: "전주국제영화제", months: [4, 5], period: "매년 4월 말~5월 초" },
      { name: "전주비빔밥축제", months: [10], period: "매년 10월" },
    ],
    access: {
      car: { time: "약 2시간 30분", note: "호남고속도로" },
      transit: { summary: "KTX 전주역 약 1시간 50분, 한옥마을까지 버스·택시", quality: "편리" },
      localMobility: "뚜벅이 OK",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 경기전과 전동성당",
          "점심 — 전주비빔밥",
          "오후 — 한옥마을 골목과 오목대",
          "저녁 — 막걸리골목 한 상 후 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 한옥마을 핵심 코스와 한복 체험",
          "1일차 밤 — 남부시장 야시장(금·토)",
          "2일차 — 콩나물국밥 해장, 자만벽화마을",
          "2일차 오후 — 객리단길 카페 투어 후 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 완산칠봉 전망대나 덕진공원 연못까지.",
    images: placeholderImages("jeonju"),
    kakaoMapUrl: kakaoMap("전주한옥마을"),
    naverMapUrl: naverMap("전주 여행"),
  },
  {
    id: "yeosu",
    name: "여수",
    area: "전라",
    themes: ["바다", "감성", "미식"],
    tagline: "밤바다라는 장르를 만든 도시",
    whyGo: [
      "돌산대교와 거북선대교의 야경, 낭만포차 — '여수 밤바다'는 노래가 아니라 실제 경험이에요.",
      "게장백반·서대회 같은 남도 밥상의 물이 다른 동네예요.",
    ],
    highlights: [
      { name: "여수 해상케이블카", description: "돌산과 자산공원 사이 바다 위를 건너는 야경 명물" },
      { name: "오동도", description: "방파제 길로 걸어 들어가는 동백섬" },
      { name: "낭만포차거리", description: "바닷바람 맞으며 즐기는 밤의 포차촌" },
      { name: "향일암", description: "바다 절벽에 매달린 해돋이 암자" },
    ],
    food: [
      { name: "게장백반", description: "돌게장 무한리필 백반의 본고장" },
      { name: "서대회무침", description: "막걸리식초로 무친 여수식 회무침" },
      { name: "갓김치", description: "돌산 갓으로 담근 알싸한 밑반찬" },
    ],
    seasonalTips: [
      { months: [3, 4], note: "오동도 동백과 영취산 진달래 — 봄의 여수", peak: true },
      { months: [6, 7, 8], note: "밤바다 성수기 — 케이블카·포차 모두 야간이 하이라이트", peak: true },
    ],
    festivals: [
      { name: "여수거북선축제", months: [5], period: "매년 5월" },
    ],
    access: {
      car: { time: "약 4시간", note: "순천완주고속도로" },
      transit: { summary: "KTX 여수엑스포역 약 3시간", quality: "편리" },
      localMobility: "뚜벅이 OK",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일 ~ 2박 3일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 오동도 산책",
          "점심 — 게장백반",
          "오후 — 해상케이블카와 돌산공원",
          "저녁 — 낭만포차 찍고 막차 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 오동도와 엑스포 해양공원, 게장백반 저녁",
          "1일차 밤 — 해상케이블카 야경과 낭만포차",
          "2일차 — 향일암 해돋이(부지런하다면)와 돌산 카페",
          "2일차 오후 — 서대회무침 점심 후 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 금오도 비렁길이나 고흥 방면 드라이브까지.",
    images: placeholderImages("yeosu"),
    kakaoMapUrl: kakaoMap("여수 해상케이블카"),
    naverMapUrl: naverMap("여수 여행"),
  },
  {
    id: "suncheon",
    name: "순천",
    area: "전라",
    themes: ["자연", "감성"],
    tagline: "갈대와 정원, 느리게 걷는 생태 도시",
    whyGo: [
      "순천만습지의 갈대밭과 S자 물길 노을은 국내 생태 경관의 정점이에요.",
      "국가정원·낙안읍성·드라마촬영장까지 취향대로 고르는 '느린 여행' 코스가 풍부해요.",
    ],
    highlights: [
      { name: "순천만습지", description: "용산전망대에서 내려다보는 갈대밭과 S자 수로" },
      { name: "순천만국가정원", description: "국내 1호 국가정원 — 계절 꽃이 끊이지 않아요" },
      { name: "낙안읍성", description: "실제 주민이 사는 조선시대 읍성 마을" },
      { name: "순천드라마촬영장", description: "7080 골목을 재현한 레트로 세트장" },
    ],
    food: [
      { name: "꼬막정식", description: "벌교 꼬막이 한 상 가득" },
      { name: "웃장 국밥", description: "순천식 돼지국밥과 수육" },
      { name: "짱뚱어탕", description: "순천만 갯벌이 키운 보양식" },
    ],
    seasonalTips: [
      { months: [10, 11], note: "갈대 은빛 물결과 흑두루미 — 순천만의 절정", peak: true },
      { months: [4, 5], note: "국가정원 봄꽃 시즌" },
    ],
    festivals: [
      { name: "순천만갈대축제", months: [10, 11], period: "매년 10~11월" },
    ],
    access: {
      car: { time: "약 3시간 30분", note: "호남·순천완주고속도로" },
      transit: { summary: "KTX 순천역 약 2시간 40분", quality: "편리" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 순천만국가정원",
          "점심 — 꼬막정식",
          "오후 — 순천만습지, 용산전망대 노을",
          "저녁 — 귀가 (노을까지 보면 늦어요, 일정 여유 두기)",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 국가정원과 드라마촬영장, 웃장 국밥 저녁",
          "2일차 — 낙안읍성 산책",
          "2일차 오후 — 순천만습지와 용산전망대 노을",
          "2일차 저녁 — 짱뚱어탕 먹고 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 선암사·송광사 굴목재 숲길을 걸어보세요.",
    images: placeholderImages("suncheon"),
    kakaoMapUrl: kakaoMap("순천만습지"),
    naverMapUrl: naverMap("순천 여행"),
  },
  {
    id: "damyang",
    name: "담양",
    area: "전라",
    themes: ["자연", "미식"],
    tagline: "대숲 바람과 가로수길의 초록",
    whyGo: [
      "죽녹원 대숲에 들어서는 순간 공기부터 달라져요 — 초록 샤워라는 말이 실감나요.",
      "메타세쿼이아 가로수길, 관방제림 등 '걷기 위한 길'이 많은 동네예요.",
    ],
    highlights: [
      { name: "죽녹원", description: "31만 평 대나무 숲 — 댓잎 소리 들으며 걷는 길" },
      { name: "메타세쿼이아 가로수길", description: "터널처럼 이어지는 국내 대표 가로수길" },
      { name: "관방제림", description: "천연기념물 노거수가 늘어선 강둑 숲길" },
      { name: "소쇄원", description: "조선 민간 정원의 백미" },
    ],
    food: [
      { name: "떡갈비", description: "숯불 향의 담양 대표 상차림" },
      { name: "대통밥", description: "대나무 통에 지은 향긋한 밥" },
      { name: "국수거리", description: "관방제림 옆 강변 국수 한 그릇" },
    ],
    seasonalTips: [
      { months: [5, 6], note: "죽순 오르는 신록의 대숲 — 초록이 가장 짙어요", peak: true },
      { months: [10, 11], note: "메타세쿼이아길 단풍 절정", peak: true },
    ],
    festivals: [
      { name: "담양대나무축제", months: [5], period: "매년 5월" },
    ],
    access: {
      car: { time: "약 3시간 10분", note: "호남고속도로" },
      transit: { summary: "KTX 광주송정역 약 1시간 40분 + 버스·택시 약 40분", quality: "보통" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 죽녹원 대숲 산책",
          "점심 — 떡갈비와 대통밥",
          "오후 — 관방제림 걷고 국수거리 간식",
          "저녁 — 메타세쿼이아길 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 죽녹원과 관방제림, 떡갈비 저녁",
          "1일차 밤 — 메타프로방스 야경",
          "2일차 — 소쇄원과 가사문학면 정자 투어",
          "2일차 오후 — 메타세쿼이아길 걷고 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 광주 양림동이나 화순 적벽까지 묶어보세요.",
    images: placeholderImages("damyang"),
    kakaoMapUrl: kakaoMap("죽녹원"),
    naverMapUrl: naverMap("담양 여행"),
  },
  {
    id: "gunsan",
    name: "군산",
    area: "전라",
    themes: ["역사", "미식", "감성"],
    tagline: "시간이 멈춘 근대 항구 도시",
    whyGo: [
      "일제강점기 건축과 오래된 골목이 그대로 남아 도시 전체가 근대사 박물관이에요.",
      "이성당 단팥빵, 중동호떡, 짬뽕 — 오래된 맛집의 밀도가 남달라요.",
    ],
    highlights: [
      { name: "경암동 철길마을", description: "집 사이로 기찻길이 지나는 레트로 명소" },
      { name: "근대문화거리", description: "옛 세관·은행 건물이 박물관이 된 거리" },
      { name: "초원사진관", description: "영화 「8월의 크리스마스」의 그 사진관" },
      { name: "선유도", description: "고군산군도의 백미 — 다리로 연결돼 차로 갈 수 있어요" },
    ],
    food: [
      { name: "이성당", description: "국내에서 가장 오래된 빵집의 단팥빵·야채빵" },
      { name: "군산 짬뽕", description: "전국구 짬뽕 로드의 원조 도시" },
      { name: "박대구이", description: "군산 밥상의 감초" },
    ],
    seasonalTips: [
      { months: [4], note: "월명공원·은파호수공원 벚꽃 — 근대 골목과 벚꽃의 조합", peak: true },
      { months: [10], note: "시간여행축제 시즌 — 거리 전체가 근대로 변신", peak: true },
    ],
    festivals: [
      { name: "군산시간여행축제", months: [10], period: "매년 10월" },
    ],
    access: {
      car: { time: "약 2시간 30분", note: "서해안고속도로" },
      transit: { summary: "고속버스 군산 약 2시간 40분", quality: "보통" },
      localMobility: "뚜벅이 OK",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 경암동 철길마을",
          "점심 — 군산 짬뽕 또는 이성당 빵",
          "오후 — 근대문화거리와 초원사진관",
          "저녁 — 째보선창 노을 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 원도심 근대 코스(철길마을~근대거리)",
          "1일차 밤 — 영화동 골목 술집",
          "2일차 — 선유도 드라이브와 대장봉 전망",
          "2일차 오후 — 박대구이 정식 후 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 신시도·무녀도 등 고군산군도를 천천히 도세요.",
    images: placeholderImages("gunsan"),
    kakaoMapUrl: kakaoMap("군산 근대문화거리"),
    naverMapUrl: naverMap("군산 여행"),
  },
  {
    id: "mokpo",
    name: "목포",
    area: "전라",
    themes: ["바다", "역사", "미식"],
    tagline: "맛의 도시, 서남해의 관문",
    whyGo: [
      "유달산~고하도 해상케이블카에서 보는 다도해 노을이 목포 여행의 하이라이트예요.",
      "세발낙지, 홍어삼합, 민어 — '맛의 도시' 타이틀을 가진 몇 안 되는 동네예요.",
    ],
    highlights: [
      { name: "목포해상케이블카", description: "유달산과 고하도를 잇는 국내 최장급 케이블카" },
      { name: "근대역사문화거리", description: "옛 일본영사관 등 근대 건축이 모인 거리" },
      { name: "갓바위", description: "바다 위 부잔교에서 보는 기암" },
      { name: "고하도 전망대", description: "판옥선 모양 전망대와 해안데크길" },
    ],
    food: [
      { name: "세발낙지", description: "탕탕이부터 연포탕까지, 목포의 자존심" },
      { name: "홍어삼합", description: "삭힌 홍어·돼지수육·묵은지의 조합" },
      { name: "민어회", description: "여름 보양 생선의 왕" },
    ],
    seasonalTips: [
      { months: [6, 7, 8], note: "민어 철 — 여름 목포 밥상의 절정", peak: true },
      { months: [10], note: "선선한 바람과 케이블카 노을 뷰가 가장 좋은 때" },
    ],
    festivals: [
      { name: "목포항구축제", months: [10], period: "매년 10월" },
    ],
    access: {
      car: { time: "약 4시간", note: "서해안고속도로" },
      transit: { summary: "KTX 목포역 약 2시간 30분", quality: "편리" },
      localMobility: "뚜벅이 OK",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 근대역사문화거리",
          "점심 — 세발낙지 연포탕",
          "오후 — 해상케이블카(유달산~고하도)",
          "저녁 — 갓바위 야경 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 근대거리와 유달산, 홍어삼합 저녁",
          "1일차 밤 — 목포대교 야경(갓바위 데크)",
          "2일차 — 케이블카 타고 고하도 해안데크",
          "2일차 오후 — 민어의거리에서 점심 후 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 압해도·천사대교 건너 신안 퍼플섬까지.",
    images: placeholderImages("mokpo"),
    kakaoMapUrl: kakaoMap("목포해상케이블카"),
    naverMapUrl: naverMap("목포 여행"),
  },
  {
    id: "gurye",
    name: "구례",
    area: "전라",
    themes: ["자연"],
    tagline: "지리산 자락, 섬진강가의 봄",
    whyGo: [
      "3월 산수유, 4월 벚꽃 — 봄이 가장 먼저, 가장 노랗게 오는 동네예요.",
      "성삼재까지 차로 올라 노고단 운해를 40분 산책으로 만날 수 있어요.",
    ],
    highlights: [
      { name: "화엄사", description: "각황전과 홍매화로 유명한 지리산 대표 사찰" },
      { name: "산수유마을", description: "봄이면 마을 전체가 노란 물결" },
      { name: "노고단", description: "성삼재에서 산책하듯 오르는 지리산 능선 전망" },
      { name: "섬진강변", description: "강 따라 이어지는 벚꽃길과 대숲" },
    ],
    food: [
      { name: "산채정식", description: "지리산 나물 한 상" },
      { name: "다슬기수제비", description: "섬진강 다슬기의 시원한 국물" },
      { name: "참게탕", description: "가을 섬진강의 별미" },
    ],
    seasonalTips: [
      { months: [3], note: "산수유마을이 노랗게 물드는 시기 — 구례의 상징", peak: true },
      { months: [4], note: "섬진강 벚꽃길 만개" },
      { months: [10, 11], note: "피아골 단풍 — 지리산 단풍의 대명사", peak: true },
    ],
    festivals: [
      { name: "구례산수유꽃축제", months: [3], period: "매년 3월" },
    ],
    access: {
      car: { time: "약 3시간 20분", note: "순천완주고속도로" },
      transit: { summary: "KTX·무궁화 구례구역 약 2시간 40분, 이후 택시·버스", quality: "보통" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 화엄사 경내 산책",
          "점심 — 산채정식",
          "오후 — 산수유마을(봄) 또는 섬진강변 걷기",
          "저녁 — 귀가 (이동시간 여유 두기)",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 화엄사와 산수유마을, 산채정식 저녁",
          "1일차 밤 — 지리산 자락의 고요한 밤",
          "2일차 이른 아침 — 성삼재 주차 후 노고단 운해",
          "2일차 오후 — 섬진강변 카페 들렀다 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 하동 화개장터·쌍계사 십리벚꽃길까지 (봄 강추).",
    images: placeholderImages("gurye"),
    kakaoMapUrl: kakaoMap("구례 화엄사"),
    naverMapUrl: naverMap("구례 여행"),
  },
  {
    id: "namwon",
    name: "남원",
    area: "전라",
    themes: ["역사", "자연", "감성"],
    tagline: "춘향과 광한루, 지리산 서쪽 관문",
    whyGo: [
      "광한루원은 오작교와 누각이 연못에 비치는 국내 대표 누원 — 밤 조명이 특히 예뻐요.",
      "지리산 서부(뱀사골·정령치)의 관문이라 계곡과 능선 트레킹의 베이스캠프가 돼요.",
      "춘향전의 무대라 도시 곳곳에 이야기가 깔려 있어 걷는 재미가 있어요.",
    ],
    highlights: [
      { name: "광한루원", description: "오작교와 완월정이 있는 조선의 대표 정원 — 춘향전의 무대" },
      { name: "지리산 뱀사골", description: "여름 피서와 가을 단풍으로 유명한 지리산 서부 계곡" },
      { name: "서도역", description: "소설 『혼불』의 배경이 된 국내에서 가장 오래된 목조 간이역" },
      { name: "혼불문학관", description: "최명희의 대하소설을 품은 노봉마을의 문학관" },
    ],
    food: [
      { name: "추어탕", description: "미꾸라지를 갈아 끓인 남원식 보양 한 그릇" },
      { name: "흑돼지 석쇠구이", description: "지리산 자락에서 즐기는 숯불 향" },
    ],
    seasonalTips: [
      { months: [4, 5], note: "광한루 봄꽃과 춘향제 — 도시가 가장 화사한 시기", peak: true },
      { months: [10, 11], note: "지리산 뱀사골·정령치 단풍", peak: true },
    ],
    festivals: [
      { name: "춘향제", months: [5], period: "매년 5월", note: "광한루원 일대" },
    ],
    access: {
      car: { time: "약 3시간", note: "순천완주고속도로" },
      transit: { summary: "용산발 KTX 남원역 약 2시간, 광한루 근처", quality: "편리" },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "가능", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 광한루원 산책",
          "점심 — 추어탕거리",
          "오후 — 서도역과 혼불문학관",
          "저녁 — 광한루 야경 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 광한루원과 남원 시내, 추어탕 점심",
          "1일차 저녁 — 요천 물빛다리 야경",
          "2일차 — 지리산 뱀사골 또는 정령치 드라이브",
          "2일차 오후 — 서도역 들렀다 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 구례·하동까지 지리산 둘레길을 이어보세요.",
    images: placeholderImages("namwon"),
    kakaoMapUrl: kakaoMap("남원 광한루원"),
    naverMapUrl: naverMap("남원 여행"),
  },
  {
    id: "gochang",
    name: "고창",
    area: "전라",
    themes: ["자연", "역사", "미식"],
    tagline: "청보리밭과 선운사, 고인돌의 고장",
    whyGo: [
      "학원농장의 청보리밭은 봄이면 초록 물결이 지평선까지 이어지는 국내 대표 풍경이에요.",
      "선운사는 봄 동백과 가을 꽃무릇(상사화)으로 사철 다른 얼굴을 보여줘요.",
      "고창 고인돌은 세계 최대 밀집지로 유네스코 유산 — 선사시대를 걷는 경험이에요.",
    ],
    highlights: [
      { name: "학원농장", description: "청보리밭(봄)·해바라기·메밀꽃(가을)이 펼쳐지는 드넓은 농장" },
      { name: "선운사", description: "동백숲과 꽃무릇으로 유명한 도솔산 자락의 고찰" },
      { name: "고창읍성(모양성)", description: "성곽 한 바퀴 답성놀이로 유명한 조선 읍성" },
      { name: "고인돌 유적", description: "세계 최대 규모의 고인돌 밀집지 — 유네스코 유산" },
    ],
    food: [
      { name: "풍천장어", description: "복분자주와 함께 즐기는 고창의 대표 보양식" },
      { name: "바지락죽", description: "곰소만 갯벌이 키운 바지락의 시원한 죽" },
    ],
    seasonalTips: [
      { months: [4, 5], note: "학원농장 청보리밭 절정 — 고창의 시그니처", peak: true },
      { months: [9, 10], note: "선운사 꽃무릇이 숲을 붉게 물들이는 시기", peak: true },
    ],
    festivals: [
      { name: "고창청보리밭축제", months: [4, 5], period: "매년 4~5월", note: "학원농장 일대" },
    ],
    access: {
      car: { time: "약 3시간", note: "서해안고속도로" },
      transit: { summary: "고속버스 고창 약 3시간 30분, 이후 버스·택시", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 학원농장 청보리밭",
          "점심 — 풍천장어",
          "오후 — 선운사 숲길",
          "저녁 — 고창읍성 산책 후 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 학원농장과 고창읍성, 장어 저녁",
          "1일차 밤 — 고창 고인돌박물관 야간(계절별)",
          "2일차 — 선운사와 도솔암 트레킹",
          "2일차 오후 — 곰소염전·젓갈시장 들렀다 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 부안 변산반도까지 서해안을 따라 내려가 보세요.",
    images: placeholderImages("gochang"),
    kakaoMapUrl: kakaoMap("고창 학원농장"),
    naverMapUrl: naverMap("고창 여행"),
  },
  {
    id: "buan",
    name: "부안",
    area: "전라",
    themes: ["자연", "바다"],
    tagline: "변산반도, 채석강과 낙조",
    whyGo: [
      "채석강은 수만 권의 책을 쌓은 듯한 층암 절벽 — 물때 맞춰 걸으면 비현실적이에요.",
      "변산반도 국립공원은 산과 바다가 한 반도에 다 있어 드라이브 코스가 훌륭해요.",
      "내소사 전나무숲길과 곰소 젓갈은 부안 여행의 조용한 하이라이트예요.",
    ],
    highlights: [
      { name: "채석강", description: "파도가 깎은 층암 절벽 — 격포항 옆 부안의 상징" },
      { name: "내소사", description: "일주문부터 이어지는 전나무숲길이 아름다운 고찰" },
      { name: "변산해수욕장", description: "완만한 백사장과 낙조로 유명한 서해 해변" },
      { name: "곰소염전", description: "천일염과 젓갈로 유명한 갯벌 마을" },
    ],
    food: [
      { name: "곰소 젓갈백반", description: "수십 가지 젓갈이 깔리는 짭조름한 한 상" },
      { name: "백합죽", description: "곰소만 백합으로 끓인 담백한 죽" },
    ],
    seasonalTips: [
      { months: [6, 7, 8], note: "변산 해수욕과 해안 드라이브 성수기", peak: true },
      { months: [10, 11], note: "내소사 단풍과 서해 낙조가 깊어지는 계절" },
    ],
    festivals: [],
    access: {
      car: { time: "약 3시간", note: "서해안고속도로" },
      transit: { summary: "고속버스 부안 약 3시간, 이후 버스·택시", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "빠듯", recommendedNights: "1박 2일" },
    courses: [
      {
        duration: "당일",
        plan: [
          "오전 — 내소사 전나무숲길",
          "점심 — 곰소 젓갈백반",
          "오후 — 채석강과 격포항",
          "저녁 — 변산 낙조 보고 귀가",
        ],
      },
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 채석강·격포와 새만금 방조제 드라이브",
          "1일차 저녁 — 변산해수욕장 낙조",
          "2일차 — 내소사와 직소폭포 트레킹",
          "2일차 오후 — 곰소염전 들렀다 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 고창 선운사나 군산까지 서해안을 이어보세요.",
    images: placeholderImages("buan"),
    kakaoMapUrl: kakaoMap("부안 채석강"),
    naverMapUrl: naverMap("부안 여행"),
  },
  {
    id: "wando",
    name: "완도",
    area: "전라",
    themes: ["바다", "자연"],
    tagline: "청산도 슬로길과 전복의 섬",
    whyGo: [
      "청산도는 아시아 첫 슬로시티 — 돌담과 유채밭 사이 슬로길을 걷는 것만으로 힐링이에요.",
      "완도수목원은 국내 최대 난대림, 명사십리는 십 리를 걷는 백사장이에요.",
      "전복의 최대 산지라 전복회·전복죽·전복구이를 가장 신선하게 즐길 수 있어요.",
    ],
    highlights: [
      { name: "청산도", description: "서편제·봄의 왈츠 촬영지 — 유채밭 슬로길이 유명한 슬로시티 섬" },
      { name: "완도수목원", description: "붉가시나무 등 난대 상록수림이 우거진 국내 최대 난대수목원" },
      { name: "명사십리해변", description: "신지도의 완만하고 긴 백사장" },
      { name: "장도(청해진 유적)", description: "장보고가 해상왕국을 세운 청해진의 본거지" },
    ],
    food: [
      { name: "전복 요리", description: "회·죽·구이·물회까지 — 완도가 곧 전복" },
      { name: "매생이국", description: "겨울 완도 갯벌이 키운 매생이의 부드러운 국물" },
    ],
    seasonalTips: [
      { months: [4, 5], note: "청산도 유채·청보리와 슬로걷기축제 — 완도의 절정", peak: true },
      { months: [6, 7, 8], note: "명사십리 해수욕과 섬 여행 성수기" },
      { months: [12, 1, 2], note: "매생이·굴 등 겨울 갯것의 계절" },
    ],
    festivals: [
      { name: "청산도 슬로걷기축제", months: [4], period: "매년 4월", note: "청산도 슬로길 일대" },
    ],
    access: {
      car: { time: "약 4시간 40분", note: "서해안·남해고속도로" },
      transit: { summary: "KTX 목포·광주송정 후 버스 약 5시간, 청산도는 완도항서 배 40분", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "불가", recommendedNights: "1박 2일 ~ 2박 3일" },
    courses: [
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 완도 도착, 완도수목원과 완도타워 전망",
          "1일차 저녁 — 전복 요리와 명사십리 산책",
          "2일차 — 청산도 배편(슬로길 하루 코스)",
          "2일차 오후 — 완도항으로 나와 귀가 (배 시간 여유 두기)",
        ],
      },
    ],
    extendTip: "하루 더 있다면 보길도 윤선도 원림이나 해남 땅끝마을까지.",
    images: placeholderImages("wando"),
    kakaoMapUrl: kakaoMap("완도 청산도"),
    naverMapUrl: naverMap("완도 여행"),
  },
  {
    id: "sinan",
    name: "신안",
    area: "전라",
    themes: ["바다", "감성"],
    tagline: "1004개의 섬, 퍼플섬과 슬로시티",
    whyGo: [
      "퍼플섬은 지붕부터 다리까지 온통 보라색 — 국내에서 가장 사진 찍고 싶은 섬이에요.",
      "증도는 아시아 슬로시티로, 태평염전과 짱뚱어 갯벌이 시간을 늦춰줘요.",
      "천사대교로 섬들이 이어져, 섬마다 색과 표정이 다른 '섬 컬렉션' 여행이 가능해요.",
    ],
    highlights: [
      { name: "퍼플섬(반월·박지도)", description: "라벤더와 아스터, 보라색 지붕이 섬 전체를 물들인 포토 명소" },
      { name: "증도 태평염전", description: "국내 최대 단일 염전 — 소금밭과 소금박물관, 슬로시티" },
      { name: "천사대교", description: "압해도와 암태도를 잇는 국내 최장급 해상교" },
      { name: "자은도 분계해변", description: "여인송숲과 고운 백사장이 있는 한적한 해변" },
    ],
    food: [
      { name: "민어", description: "여름 신안 앞바다 민어회·탕 — 복달임의 왕" },
      { name: "병어·꽃게", description: "신안 갯벌이 키운 제철 해산물" },
    ],
    seasonalTips: [
      { months: [6, 7], note: "퍼플섬 라벤더 개화 — 보라색이 가장 짙은 시기", peak: true },
      { months: [9, 10], note: "아스터(자주색 국화)와 선선한 섬 산책", peak: true },
    ],
    festivals: [],
    access: {
      car: { time: "약 4시간 30분", note: "서해안고속도로 + 천사대교" },
      transit: { summary: "KTX 목포역 약 2시간 30분 후 섬 버스·배 — 자차 없이는 매우 불편", quality: "불편" },
      localMobility: "자차·렌터카 권장",
    },
    tripFit: { dayTrip: "불가", recommendedNights: "1박 2일 ~ 2박 3일" },
    courses: [
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 천사대교 건너 퍼플섬(반월·박지도) 산책",
          "1일차 저녁 — 자은도 해변과 숙소",
          "2일차 — 증도 태평염전과 짱뚱어다리 슬로 산책",
          "2일차 오후 — 목포 경유 귀가",
        ],
      },
    ],
    extendTip: "하루 더 있다면 목포 근대거리·해상케이블카와 묶어 서남해를 완성하세요.",
    images: placeholderImages("sinan"),
    kakaoMapUrl: kakaoMap("신안 퍼플섬"),
    naverMapUrl: naverMap("신안 여행"),
  },
  {
    id: "heuksando-hongdo",
    name: "흑산도·홍도",
    area: "전라",
    themes: ["바다", "자연"],
    tagline: "다도해 서남쪽 끝, 붉은 절벽의 두 섬",
    whyGo: [
      "홍도 유람선에서 보는 33경 기암절벽은 다도해 최고의 해상 절경으로 꼽혀요.",
      "흑산도 일주도로와 상라산 전망대에선 점점이 흩어진 다도해 섬들이 한눈에 들어와요.",
      "가는 길이 멀고 배를 타야 하는 만큼, 다녀오면 오래 남는 섬 여행이 돼요.",
    ],
    highlights: [
      { name: "홍도 유람선(33경)", description: "붉은 기암과 해식동굴을 도는 두 시간 남짓 해상 유람" },
      { name: "홍도 깃대봉", description: "섬 정상까지 오르는 트레킹 — 다도해 조망이 일품" },
      { name: "흑산도 상라산 전망대", description: "일주도로 정상에서 보는 다도해 파노라마" },
      { name: "흑산도 사리마을", description: "정약전이 『자산어보』를 집필한 유배지 마을" },
    ],
    food: [
      { name: "홍어삼합", description: "흑산도 홍어의 본고장 — 삭힌 홍어의 정수" },
      { name: "우럭·전복 요리", description: "청정 해역의 자연산 해산물" },
    ],
    seasonalTips: [
      { months: [5, 6], note: "바다가 잔잔하고 맑아 유람선·입도 확률이 높은 시기", peak: true },
      { months: [9, 10], note: "선선한 가을 바다와 깃대봉 트레킹" },
      { months: [12, 1, 2], note: "겨울 풍랑으로 여객선 결항이 잦아요 — 일정 여유 필수" },
    ],
    festivals: [],
    access: {
      car: { time: "목포까지 약 4시간 + 여객선", note: "섬 안은 유람선·마을버스" },
      transit: {
        summary: "KTX 목포역 약 2시간 30분 + 쾌속선 흑산도 약 2시간·홍도 약 2시간 20분",
        quality: "불편",
      },
      localMobility: "대중교통 보통",
    },
    tripFit: { dayTrip: "불가", recommendedNights: "2박 3일 이상" },
    courses: [
      {
        duration: "1박 2일",
        plan: [
          "1일차 — 목포에서 쾌속선, 홍도 입도 후 유람선 33경",
          "1일차 저녁 — 홍도 마을에서 해산물과 노을",
          "2일차 — 흑산도로 이동, 일주도로와 상라산 전망대",
          "2일차 오후 — 목포행 배로 귀환 (기상 변수 감안)",
        ],
      },
    ],
    extendTip: "하루 더 있다면 홍도 깃대봉 트레킹이나 흑산도 사리마을까지 — 2박 3일이 안정적이에요.",
    images: placeholderImages("heuksando-hongdo"),
    kakaoMapUrl: kakaoMap("홍도 흑산도"),
    naverMapUrl: naverMap("흑산도 홍도 여행"),
  },
];
