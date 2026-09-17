"use client";

import { Suspense, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

import { destinationById, getDestination, photoCredits } from "@/data";
import { decodePicks, settingsFromParams } from "@/lib/url";
import {
  accessLine,
  courseFor,
  formatTransport,
  formatTrip,
  matchedFestivals,
  matchedTips,
  tripMonths,
} from "@/lib/personalize";
import { roundLabel } from "@/lib/tournament";
import { analyzeTaste } from "@/lib/taste";
import { TasteReport } from "@/components/TasteReport";
import { Glass, GRADIENT_CTA, GLOW_CTA } from "@/components/ui/glass";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Glass p="5">
      <Stack gap="3">
        <Text fontWeight="black" color="ocean.fg" fontSize="sm" letterSpacing="0.04em">
          {title}
        </Text>
        {children}
      </Stack>
    </Glass>
  );
}

function ResultClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const [copied, setCopied] = useState(false);

  const winner = getDestination(sp.get("w"));
  const finalist = getDestination(sp.get("f"));
  const settings = settingsFromParams((k) => sp.get(k));
  const size = Number(sp.get("size")) || 16;
  const picks = useMemo(() => decodePicks(sp.get("picks") ?? "", size), [sp, size]);

  const journey = useMemo(
    () => (winner ? picks.filter((p) => p.winnerId === winner.id) : []),
    [picks, winner],
  );
  const semifinalLosers = useMemo(
    () =>
      picks
        .filter((p) => p.round === 4)
        .map((p) => p.loserId)
        .filter((id) => id !== winner?.id && id !== finalist?.id),
    [picks, winner, finalist],
  );
  const taste = useMemo(() => analyzeTaste(picks, destinationById), [picks]);

  if (!winner) {
    return (
      <Container maxW="lg" py="16" textAlign="center">
        <Stack gap="4" align="center">
          <Text color="gray.300">결과를 찾을 수 없어요.</Text>
          <Button colorPalette="ocean" rounded="full" onClick={() => router.push("/")}>
            처음으로
          </Button>
        </Stack>
      </Container>
    );
  }

  const trip = formatTrip(settings);
  const transport = formatTransport(settings);
  const months = tripMonths(settings);
  const tips = matchedTips(winner, settings);
  const fests = matchedFestivals(winner, settings);
  const course = courseFor(winner, settings);
  const access = accessLine(winner, settings);

  const share = async () => {
    const url = window.location.href;
    const text = `내 국내 여행지 월드컵 우승: ${winner.name} 🏆`;
    try {
      if (navigator.share) {
        await navigator.share({ title: text, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // 사용자가 공유 시트를 닫은 경우 등 — 무시
    }
  };

  return (
    <Container maxW="lg" py={{ base: 4, md: 8 }}>
      <Stack gap="4">
        {/* 우승 히어로 — 풀 포토 + 오버레이 */}
        <Box
          position="relative"
          rounded="3xl"
          overflow="hidden"
          h={{ base: "340px", md: "420px" }}
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          shadow="0 30px 80px rgba(0,0,0,0.55)"
        >
          <Image
            src={winner.images[0]}
            alt={winner.name}
            fill
            sizes="(max-width: 768px) 100vw, 512px"
            style={{ objectFit: "cover" }}
            priority
          />
          <Box
            position="absolute"
            inset="0"
            bgImage="linear-gradient(180deg, rgba(7,11,20,0.15) 0%, rgba(7,11,20,0) 30%, rgba(7,11,20,0.6) 70%, rgba(7,11,20,0.95) 100%)"
          />
          <Box
            position="absolute"
            top="4"
            left="4"
            px="3.5"
            py="1.5"
            rounded="full"
            bgImage={GRADIENT_CTA}
            color="white"
            fontWeight="black"
            fontSize="sm"
            shadow={GLOW_CTA}
          >
            🏆 우승
          </Box>
          {photoCredits(winner.id)[0] && (
            <Text
              position="absolute"
              bottom="1.5"
              right="2.5"
              fontSize="2xs"
              color="whiteAlpha.700"
              textShadow="0 1px 4px rgba(0,0,0,0.9)"
              maxW="70%"
              textAlign="right"
              lineClamp={1}
            >
              📷 {photoCredits(winner.id)[0]}
            </Text>
          )}
          <Stack position="absolute" bottom="0" left="0" right="0" p={{ base: 5, md: 6 }} gap="1.5">
            <HStack gap="1.5">
              {winner.themes.map((t) => (
                <Badge
                  key={t}
                  bg="rgba(15,160,176,0.35)"
                  backdropFilter="blur(8px)"
                  color="ocean.100"
                  rounded="full"
                  px="2"
                  fontSize="2xs"
                >
                  {t}
                </Badge>
              ))}
            </HStack>
            <HStack align="baseline" gap="2.5">
              <Heading
                size={{ base: "3xl", md: "4xl" }}
                fontWeight="black"
                color="white"
                letterSpacing="-0.02em"
                textShadow="0 2px 20px rgba(0,0,0,0.6)"
              >
                {winner.name}
              </Heading>
              <Text fontSize="sm" color="gray.300">
                {winner.area}
              </Text>
            </HStack>
            <Text color="gray.200" textShadow="0 1px 10px rgba(0,0,0,0.7)">
              “{winner.tagline}”
            </Text>
            {(trip || transport) && (
              <Text fontSize="xs" color="gray.400">
                {[trip, transport && `${transport} 이동`].filter(Boolean).join(" · ")}
              </Text>
            )}
          </Stack>
        </Box>

        {/* 가는 법 */}
        <Section title="🧭 가는 법 (서울 출발 기준)">
          <Text fontSize="sm" color="gray.200">
            {access.icon} {access.text}
          </Text>
          <Text fontSize="sm" color="gray.400">
            현지 이동: {winner.access.localMobility} · 추천 일정: {winner.tripFit.recommendedNights}
          </Text>
          <HStack gap="2" mt="1">
            <Link href={winner.kakaoMapUrl} target="_blank" rel="noreferrer" flex="1">
              <Button
                variant="outline"
                size="sm"
                w="full"
                rounded="full"
                borderColor="whiteAlpha.300"
                color="gray.200"
                _hover={{ bg: "whiteAlpha.100" }}
              >
                카카오맵
              </Button>
            </Link>
            {winner.naverMapUrl && (
              <Link href={winner.naverMapUrl} target="_blank" rel="noreferrer" flex="1">
                <Button
                  variant="outline"
                  size="sm"
                  w="full"
                  rounded="full"
                  borderColor="whiteAlpha.300"
                  color="gray.200"
                  _hover={{ bg: "whiteAlpha.100" }}
                >
                  네이버지도
                </Button>
              </Link>
            )}
          </HStack>
        </Section>

        {/* 시기 정보 */}
        {months.length > 0 && (tips.length > 0 || fests.length > 0) && (
          <Section title={`🌤 내 여행 시기 (${months.join("·")}월)`}>
            {tips.map((t) => (
              <Text key={t.note} fontSize="sm" color={t.peak ? "yellow.300" : "gray.300"}>
                {t.peak ? "✨" : "·"} {t.note}
              </Text>
            ))}
            {fests.map((f) => (
              <Text key={f.name} fontSize="sm" color="purple.300" fontWeight="medium">
                🎪 {f.name} — {f.period}
                {f.note ? ` · ${f.note}` : ""}
              </Text>
            ))}
          </Section>
        )}

        {/* 추천 코스 */}
        <Section title={`🗓 ${course.title}`}>
          {course.plan.map((line) => (
            <Text key={line} fontSize="sm" color="gray.200">
              {line}
            </Text>
          ))}
          {course.extend && (
            <Text fontSize="sm" color="ocean.fg" mt="1">
              ➕ {course.extend}
            </Text>
          )}
        </Section>

        {/* 왜 가야 하나 */}
        <Section title="💡 왜 여기냐면">
          {winner.whyGo.map((w) => (
            <Text key={w} fontSize="sm" color="gray.200">
              · {w}
            </Text>
          ))}
        </Section>

        <Section title="📍 대표 명소 & 음식">
          {winner.highlights.map((h) => (
            <Text key={h.name} fontSize="sm" color="gray.100">
              <b>📍 {h.name}</b>{" "}
              <Text as="span" color="gray.400">
                — {h.description}
              </Text>
            </Text>
          ))}
          {winner.food.map((f) => (
            <Text key={f.name} fontSize="sm" color="gray.100">
              <b>🍽 {f.name}</b>{" "}
              <Text as="span" color="gray.400">
                — {f.description}
              </Text>
            </Text>
          ))}
        </Section>

        {/* 우승 여정 */}
        {journey.length > 0 && (
          <Section title="🏁 우승 여정">
            {journey.map((p, i) => (
              <HStack key={i} gap="2">
                <Badge
                  colorPalette="ocean"
                  variant="subtle"
                  rounded="full"
                  minW="12"
                  justifyContent="center"
                >
                  {roundLabel(p.round)}
                </Badge>
                <Text fontSize="sm" color="gray.200">
                  vs {getDestination(p.loserId)?.name ?? p.loserId} <b>승</b>
                </Text>
              </HStack>
            ))}
          </Section>
        )}

        {/* 취향 분석 */}
        {taste.length > 0 && (
          <Section title="🧭 이번 선택으로 본 당신의 여행 취향">
            <TasteReport entries={taste} />
          </Section>
        )}

        {/* TOP 4 */}
        {finalist && (
          <Section title="🎖 다음 여행 후보로 킵">
            <SimpleGrid columns={{ base: 1, sm: 3 }} gap="2">
              {[finalist, ...semifinalLosers.map((id) => getDestination(id))].map(
                (d, i) =>
                  d && (
                    <Box
                      key={d.id}
                      bg="whiteAlpha.50"
                      rounded="xl"
                      p="3"
                      borderWidth="1px"
                      borderColor="whiteAlpha.100"
                    >
                      <Text fontSize="xs" color="gray.500">
                        {i === 0 ? "🥈 준우승" : "🥉 4강"}
                      </Text>
                      <Text fontWeight="bold" color="gray.100">
                        {d.name}
                      </Text>
                      <Text fontSize="xs" color="gray.400">
                        {d.area} · {d.themes.join("·")}
                      </Text>
                    </Box>
                  ),
              )}
            </SimpleGrid>
          </Section>
        )}

        {/* 액션 */}
        <Flex gap="2" mt="2">
          <Button
            flex="1"
            variant="outline"
            rounded="full"
            borderColor="whiteAlpha.300"
            color="gray.200"
            _hover={{ bg: "whiteAlpha.100" }}
            onClick={() => router.push("/")}
          >
            다시 하기
          </Button>
          <Button
            flex="1.5"
            rounded="full"
            fontWeight="black"
            color="white"
            bgImage={GRADIENT_CTA}
            shadow={GLOW_CTA}
            _hover={{ filter: "brightness(1.1)" }}
            onClick={share}
          >
            {copied ? "링크 복사됨 ✓" : "결과 공유하기"}
          </Button>
        </Flex>
        <Text fontSize="xs" color="gray.600" textAlign="center" pb="4">
          사진 출처: Wikimedia Commons (CC 라이선스). 소요시간·축제 시기는 대략적인 정보이니
          출발 전 확인하세요.
        </Text>
      </Stack>
    </Container>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <Flex h="100dvh" align="center" justify="center">
          <Spinner size="lg" color="ocean.solid" />
        </Flex>
      }
    >
      <ResultClient />
    </Suspense>
  );
}
