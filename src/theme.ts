import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const fontStack = `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif`;

// 디자인 방향: 다크 시네마틱 + 포토 퍼스트 + 글래스 + 오로라 그라디언트
// (docs/PLAN.md 8.1 — Chakra는 기능 레이어, 비주얼은 커스텀)
const config = defineConfig({
  globalCss: {
    html: {
      colorScheme: "dark",
    },
    body: {
      minH: "100dvh",
      bg: "#070B14",
      color: "gray.100",
      backgroundImage: `radial-gradient(900px circle at 12% -8%, rgba(15,160,176,0.20), transparent 60%),
         radial-gradient(850px circle at 88% -6%, rgba(139,92,246,0.15), transparent 55%),
         radial-gradient(900px circle at 50% 115%, rgba(249,91,50,0.10), transparent 60%)`,
      backgroundAttachment: "fixed",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: fontStack },
        body: { value: fontStack },
      },
      colors: {
        ocean: {
          50: { value: "#E6F7F8" },
          100: { value: "#C6EDF0" },
          200: { value: "#97DEE4" },
          300: { value: "#62CBD4" },
          400: { value: "#33B5C2" },
          500: { value: "#0FA0B0" },
          600: { value: "#08828F" },
          700: { value: "#0A6873" },
          800: { value: "#0D525B" },
          900: { value: "#0E4348" },
          950: { value: "#072B30" },
        },
        coral: {
          50: { value: "#FFF0EB" },
          100: { value: "#FFDCD1" },
          200: { value: "#FFBBA8" },
          300: { value: "#FF9678" },
          400: { value: "#FF7350" },
          500: { value: "#F95B32" },
          600: { value: "#E04322" },
          700: { value: "#B5331A" },
          800: { value: "#8F2A17" },
          900: { value: "#732517" },
          950: { value: "#3F1109" },
        },
      },
    },
    semanticTokens: {
      colors: {
        // 다크 전용 앱 — 시맨틱 토큰을 다크 기준으로 정의
        ocean: {
          solid: { value: "{colors.ocean.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.ocean.300}" },
          muted: { value: "rgba(15,160,176,0.24)" },
          subtle: { value: "rgba(15,160,176,0.12)" },
          emphasized: { value: "rgba(15,160,176,0.35)" },
          focusRing: { value: "{colors.ocean.400}" },
        },
        coral: {
          solid: { value: "{colors.coral.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.coral.300}" },
          muted: { value: "rgba(249,91,50,0.22)" },
          subtle: { value: "rgba(249,91,50,0.12)" },
          emphasized: { value: "rgba(249,91,50,0.32)" },
          focusRing: { value: "{colors.coral.400}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
