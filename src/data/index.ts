import type { Cup, Destination } from "@/types/destination";
import { gangwon } from "./gangwon";
import { chungcheong } from "./chungcheong";
import { jeolla } from "./jeolla";
import { gyeongsang } from "./gyeongsang";
import { jeju } from "./jeju";
import { sudogwon } from "./sudogwon";
import { destinationPhotos } from "./photos.generated";
import { logistics } from "./logistics";

// 수도권(서울·수원·가평·양평)은 후보에서 제외 (2026-09-15, 사용자 판단).
// 기준: "마음먹고 떠나는 여행 목적지"가 아니라 생활권/근교 나들이 성격 — docs/PLAN.md 3.1.1
// 단, 강화도는 여행 목적지로 인정해 포함. 나머지 수도권 데이터는 sudogwon.ts에 보존.
const ganghwado = sudogwon.filter((d) => d.id === "ganghwado");

// 실제 여행지 사진(Wikimedia Commons)이 수집돼 있으면 placeholder를 대체.
// 없으면(수집 실패한 곳) 데이터 파일의 placeholder를 그대로 유지.
function withRealPhotos(d: Destination): Destination {
  const photos = destinationPhotos[d.id];
  if (!photos?.length) return d;
  return {
    ...d,
    images: photos.map((p) => p.url),
    imageBlurs: photos.map((p) => p.blurDataURL),
  };
}

/** 숙박·예상비용(logistics.ts)을 병합 */
function withLogistics(d: Destination): Destination {
  const l = logistics[d.id];
  return l ? { ...d, stay: l.stay, cost: l.cost } : d;
}

/** 1차 팩: 국내 여행지 (전국). 이후 심화편 팩은 여기에 추가 — docs/PLAN.md 3.1 */
export const koreaCup: Cup = {
  id: "korea",
  title: "국내 여행지 월드컵",
  destinations: [
    ...gangwon,
    ...chungcheong,
    ...jeolla,
    ...gyeongsang,
    ...jeju,
    ...ganghwado,
  ]
    .map(withRealPhotos)
    .map(withLogistics),
};

/** 우승지 등에 표기할 사진 크레딧(저작자·라이선스) — CC 라이선스 준수 */
export function photoCredits(id: string): string[] {
  return (destinationPhotos[id] ?? []).map((p) => p.credit);
}

export const destinationById: Map<string, Destination> = new Map(
  koreaCup.destinations.map((d) => [d.id, d]),
);

export function getDestination(id: string | null | undefined): Destination | null {
  if (!id) return null;
  return destinationById.get(id) ?? null;
}
