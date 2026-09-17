/**
 * 폴백 플레이스홀더 이미지 (deterministic).
 * 실사진은 Wikimedia Commons에서 수집해 photos.generated.ts에 있고, index.ts의
 * withRealPhotos가 이를 우선 적용한다. 이 함수는 수집 실패한 여행지의 폴백용. — docs/PLAN.md 7.4
 */
export function placeholderImages(id: string, count = 4): string[] {
  return Array.from(
    { length: count },
    (_, i) => `https://picsum.photos/seed/tw-${id}-${i}/1200/900`,
  );
}

export function kakaoMap(query: string): string {
  return `https://map.kakao.com/link/search/${encodeURIComponent(query)}`;
}

export function naverMap(query: string): string {
  return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
}
