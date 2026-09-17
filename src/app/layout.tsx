import type { Metadata, Viewport } from "next";
import { Provider } from "@/components/ui/provider";
import { koreaCup } from "@/data";
import "./globals.css";

export const metadata: Metadata = {
  title: "국내 여행지 월드컵",
  description: `교통편과 여행 날짜를 알려주면, 전국 여행지 ${koreaCup.destinations.length}곳을 비교하며 이번 여행의 목적지를 정해드려요.`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
