"use client";

import { Box, type BoxProps } from "@chakra-ui/react";

/** 다크 글래스 서피스 — 카드·섹션 공용 */
export function Glass(props: BoxProps) {
  return (
    <Box
      bg="whiteAlpha.50"
      backdropFilter="blur(14px)"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      rounded="2xl"
      {...props}
    />
  );
}

/** 브랜드 그라디언트 — 오션(청록) → 바이올렛. 타이틀·뱃지·진행바 */
export const GRADIENT_BRAND = "linear-gradient(120deg, #33B5C2 0%, #62CBD4 40%, #8B5CF6 100%)";

/** CTA 그라디언트 — 코랄 → 핑크. [여기로 갈래]·공유 전용 */
export const GRADIENT_CTA = "linear-gradient(135deg, #FF7350 0%, #F95B32 45%, #E8437E 100%)";

/** 진행바·게이지용 수평 그라디언트 */
export const GRADIENT_BAR = "linear-gradient(90deg, #33B5C2, #8B5CF6)";

/** 사진 위 하단 스크림 — 텍스트 가독성 확보 */
export const SCRIM_BOTTOM =
  "linear-gradient(180deg, rgba(7,11,20,0) 30%, rgba(7,11,20,0.55) 72%, rgba(7,11,20,0.92) 100%)";

/** 사진 위 상단 스크림 — 밝은 사진에서도 상단 태그가 보이도록 살짝만 dim (중앙 이하는 안 가림) */
export const SCRIM_TOP =
  "linear-gradient(180deg, rgba(7,11,20,0.5) 0%, rgba(7,11,20,0.18) 38%, transparent 62%)";

export const GLOW_CTA = "0 10px 30px rgba(249,91,50,0.35)";
export const GLOW_BRAND = "0 0 24px rgba(51,181,194,0.45)";

/**
 * 이미지 로딩 중 placeholder — 어두운 ocean 톤 solid (next/image `placeholder="blur"`용).
 * 이미지별 실제 blur는 번들을 400KB+ 키워 초기 로딩을 오히려 느리게 하므로,
 * 공통 placeholder + 캐러셀 이미지 프리로드로 로딩 체감을 개선한다.
 */
export const BLUR_FALLBACK =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE1IiBmaWxsPSIjMGUyNTMwIi8+PC9zdmc+";
