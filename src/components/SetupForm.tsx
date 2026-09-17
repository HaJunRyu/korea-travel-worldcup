"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { DayPicker, type DateRange } from "react-day-picker";
import { ko } from "react-day-picker/locale";
import "react-day-picker/style.css";

import { koreaCup } from "@/data";
import type { Theme, Transport, TripSettings } from "@/types/destination";
import {
  availableThemes,
  excludedFrom,
  filterPool,
  tripNights,
} from "@/lib/personalize";
import { largestBracketSize } from "@/lib/tournament";
import { settingsToParams } from "@/lib/url";
import { clearGame } from "@/lib/storage";
import { Glass, GRADIENT_BRAND, GRADIENT_CTA, GLOW_CTA } from "@/components/ui/glass";

type DateMode = "range" | "month" | "skip";

// 후보 수보다 큰 라운드는 disabled(size > maxSize)로 자동 비활성화됨.
// 소요시간은 표기하지 않음 — "30분" 같은 숫자가 오히려 부담을 준다는 판단.
const SIZE_OPTIONS = [8, 16, 32];

function toIso(d: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function upcomingWeekend(offsetWeeks: number): DateRange {
  const now = new Date();
  const sat = new Date(now);
  sat.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7) + offsetWeeks * 7);
  const sun = new Date(sat);
  sun.setDate(sat.getDate() + 1);
  return { from: sat, to: sun };
}

function Pill({
  active,
  onClick,
  children,
  disabled,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <Button
      size="sm"
      rounded="full"
      variant={active ? "solid" : "outline"}
      colorPalette={active ? "ocean" : "gray"}
      borderColor={active ? "transparent" : "whiteAlpha.300"}
      color={active ? "white" : "gray.300"}
      shadow={active ? "0 4px 16px rgba(15,160,176,0.35)" : undefined}
      _hover={{ bg: active ? "ocean.solid" : "whiteAlpha.100" }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

function Section({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Glass p="5">
      <Stack gap="3">
        <HStack gap="2.5">
          <Flex
            w="6"
            h="6"
            rounded="full"
            align="center"
            justify="center"
            fontSize="xs"
            fontWeight="black"
            color="white"
            bgImage={GRADIENT_BRAND}
            flexShrink={0}
          >
            {step}
          </Flex>
          <Text fontWeight="extrabold" color="gray.100">
            {title}
          </Text>
        </HStack>
        {children}
      </Stack>
    </Glass>
  );
}

export function SetupForm() {
  const router = useRouter();
  const [transport, setTransport] = useState<Transport | null>(null);
  const [dateMode, setDateMode] = useState<DateMode>("range");
  const [range, setRange] = useState<DateRange | undefined>();
  const [month, setMonth] = useState<number | null>(null);
  const [size, setSize] = useState(16);
  const [theme, setTheme] = useState<Theme | null>(null);
  const [includeExcluded, setIncludeExcluded] = useState(false);

  const settings: TripSettings = useMemo(() => {
    const startDate = dateMode === "range" && range?.from ? toIso(range.from) : null;
    const endDate =
      dateMode === "range" && range?.from ? toIso(range.to ?? range.from) : null;
    return {
      transport,
      startDate,
      endDate,
      month: dateMode === "month" ? month : null,
      includeExcluded,
    };
  }, [transport, dateMode, range, month, includeExcluded]);

  const themes = useMemo(() => availableThemes(koreaCup.destinations), []);
  const pool = useMemo(
    () => filterPool(koreaCup.destinations, settings, theme),
    [settings, theme],
  );
  const excluded = useMemo(
    () => excludedFrom(koreaCup.destinations, settings, theme),
    [settings, theme],
  );
  const maxSize = largestBracketSize(pool.length);
  const effectiveSize = Math.min(size, maxSize);
  const nights = tripNights(settings);

  const start = () => {
    const params = new URLSearchParams(settingsToParams(settings));
    params.set("size", String(effectiveSize));
    if (theme) params.set("theme", theme);
    clearGame();
    router.push(`/play?${params.toString()}`);
  };

  return (
    <Stack gap="4">
      <Section step="1" title="어떻게 이동하세요?">
        <HStack gap="2" flexWrap="wrap">
          <Pill active={transport === "car"} onClick={() => setTransport("car")}>
            🚗 자차·렌터카
          </Pill>
          <Pill active={transport === "transit"} onClick={() => setTransport("transit")}>
            🚆 대중교통
          </Pill>
          <Pill active={transport === null} onClick={() => setTransport(null)}>
            아직 몰라요
          </Pill>
        </HStack>
        <Text fontSize="xs" color="gray.500">
          이동 시간은 서울 출발 기준으로 보여드려요.
        </Text>
      </Section>

      <Section step="2" title="언제 다녀오세요?">
        <HStack gap="2" flexWrap="wrap">
          <Pill active={dateMode === "range"} onClick={() => setDateMode("range")}>
            📅 날짜 선택
          </Pill>
          <Pill active={dateMode === "month"} onClick={() => setDateMode("month")}>
            몇 월쯤만
          </Pill>
          <Pill active={dateMode === "skip"} onClick={() => setDateMode("skip")}>
            아직 몰라요
          </Pill>
        </HStack>

        {dateMode === "range" && (
          <Stack gap="2">
            <HStack gap="2">
              <Button
                size="xs"
                variant="outline"
                rounded="full"
                borderColor="whiteAlpha.300"
                color="gray.300"
                _hover={{ bg: "whiteAlpha.100" }}
                onClick={() => setRange(upcomingWeekend(0))}
              >
                이번 주말
              </Button>
              <Button
                size="xs"
                variant="outline"
                rounded="full"
                borderColor="whiteAlpha.300"
                color="gray.300"
                _hover={{ bg: "whiteAlpha.100" }}
                onClick={() => setRange(upcomingWeekend(1))}
              >
                다음 주말
              </Button>
              {range?.from && (
                <Button
                  size="xs"
                  variant="ghost"
                  color="gray.500"
                  onClick={() => setRange(undefined)}
                >
                  초기화
                </Button>
              )}
            </HStack>
            <Flex
              justify="center"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.100"
              rounded="xl"
              py="2"
              css={{
                // 변수는 .rdp-root에 직접 선언돼 있어 부모 오버라이드가 안 먹는다 →
                // .rdp-root를 직접 겨냥해서 청록/코랄 팔레트로 교체
                "& .rdp-root": {
                  "--rdp-accent-color": "#0FA0B0",
                  "--rdp-accent-background-color": "rgba(15,160,176,0.16)",
                  "--rdp-range_start-color": "#ffffff",
                  "--rdp-range_end-color": "#ffffff",
                  "--rdp-range_middle-color": "#C6EDF0",
                  "--rdp-today-color": "#FF9678",
                  "--rdp-selected-border": "2px solid transparent",
                  "--rdp-day-width": "2.55rem",
                  "--rdp-day-height": "2.55rem",
                  color: "#CBD5E1",
                  fontSize: "0.9rem",
                },
                "& .rdp-chevron": { fill: "#33B5C2" },
                "& .rdp-caption_label": { color: "#E2E8F0", fontWeight: 700 },
                "& .rdp-weekday": { color: "#7A899E", fontWeight: 600 },
                // 선택 안 된 날 hover — 은은한 청록빛
                "& .rdp-day:not(.rdp-selected):not(.rdp-disabled) .rdp-day_button:hover": {
                  backgroundColor: "rgba(51,181,194,0.14)",
                },
                // range 시작/끝 원에 부드러운 글로우
                "& .rdp-range_start .rdp-day_button, & .rdp-range_end .rdp-day_button": {
                  boxShadow: "0 4px 14px rgba(15,160,176,0.45)",
                },
                "& .rdp-disabled": { opacity: 0.28 },
              }}
            >
              <DayPicker
                mode="range"
                selected={range}
                onSelect={(r) => setRange(r)}
                locale={ko}
                numberOfMonths={1}
                disabled={{ before: new Date() }}
              />
            </Flex>
            {range?.from && (
              <Text fontSize="sm" color="ocean.fg" fontWeight="bold" textAlign="center">
                {toIso(range.from)} ~ {toIso(range.to ?? range.from)} ·{" "}
                {nights === 0 ? "당일치기" : `${nights}박 ${(nights ?? 0) + 1}일`}
              </Text>
            )}
          </Stack>
        )}

        {dateMode === "month" && (
          <SimpleGrid columns={6} gap="1.5">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
              <Pill key={m} active={month === m} onClick={() => setMonth(m)}>
                {m}월
              </Pill>
            ))}
          </SimpleGrid>
        )}
      </Section>

      <Section step="3" title="토너먼트 설정">
        {/* 라운드 선택 — 카드형. 소요시간 표기는 부담을 줘서 제거 */}
        <HStack gap="2" align="stretch">
          {SIZE_OPTIONS.map((size) => {
            const active = effectiveSize === size;
            return (
              <Button
                key={size}
                flex="1"
                py="4"
                rounded="xl"
                variant="outline"
                bg={active ? "ocean.subtle" : "transparent"}
                borderColor={active ? "ocean.400" : "whiteAlpha.200"}
                shadow={active ? "0 0 0 1px rgba(51,181,194,0.35), 0 8px 24px rgba(15,160,176,0.25)" : undefined}
                _hover={{ bg: active ? "ocean.muted" : "whiteAlpha.50" }}
                disabled={size > maxSize}
                onClick={() => setSize(size)}
              >
                <Text fontSize="lg" fontWeight="black" color={active ? "ocean.200" : "gray.200"}>
                  {size}강
                </Text>
              </Button>
            );
          })}
        </HStack>

        <Wrap gap="1.5">
          <Pill active={theme === null} onClick={() => setTheme(null)}>
            전체
          </Pill>
          {themes.map((t) => (
            <Pill key={t.theme} active={theme === t.theme} onClick={() => setTheme(t.theme)}>
              {t.theme} {t.count}
            </Pill>
          ))}
        </Wrap>

        <Text fontSize="xs" color="gray.500">
          후보 {pool.length}곳에서 무작위 {effectiveSize}곳이 대진에 올라요.
        </Text>

        {excluded.length > 0 && (
          <Box bg="rgba(249,91,50,0.10)" borderWidth="1px" borderColor="rgba(249,91,50,0.25)" rounded="xl" p="3">
            <Text fontSize="xs" color="coral.300">
              ⚠️ 당일치기로는 어려운 {excluded.length}곳(
              {excluded.map((d) => d.name).join(", ")})은 후보에서 뺐어요.
            </Text>
            <Button
              size="xs"
              mt="2"
              rounded="full"
              variant={includeExcluded ? "solid" : "outline"}
              colorPalette="coral"
              onClick={() => setIncludeExcluded((v) => !v)}
            >
              {includeExcluded ? "포함됨 ✓" : "그래도 포함하기"}
            </Button>
          </Box>
        )}
      </Section>

      <Button
        size="xl"
        h="14"
        rounded="2xl"
        fontWeight="black"
        fontSize="lg"
        color="white"
        bgImage={GRADIENT_CTA}
        shadow={GLOW_CTA}
        _hover={{ filter: "brightness(1.08)", transform: "translateY(-1px)" }}
        _active={{ filter: "brightness(0.95)", transform: "translateY(0)" }}
        transition="all 0.15s"
        onClick={start}
        disabled={pool.length < 2}
      >
        월드컵 시작하기 →
      </Button>
      <Text fontSize="xs" color="gray.500" textAlign="center">
        타이머는 없어요. 천천히 비교하고 고민해서 고르세요 — 중간에 나가도 이어할 수 있어요.
      </Text>
    </Stack>
  );
}
