import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF/WebP로 자동 변환 + 최적화 결과 30일 캐시 → 재요청 시 즉시
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2_592_000,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      // 실제 여행지 사진 (Wikimedia Commons, CC 라이선스) — CDN이라 빠름.
      // thumb.*(썸네일)과 upload.*(원본) 둘 다 나올 수 있어 모두 허용.
      { protocol: "https", hostname: "thumb.wikimedia.org" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
