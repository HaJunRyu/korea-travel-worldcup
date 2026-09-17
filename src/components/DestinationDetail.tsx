"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { Destination } from "@/types/destination";
import { photoCredits } from "@/data";
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

export function DestinationDetail({ destination: d }: { destination: Destination }) {
  const router = useRouter();
  const credit = photoCredits(d.id)[0];

  return (
    <Container maxW="lg" py={{ base: 4, md: 8 }}>
      <Stack gap="4">
        <Button
          variant="ghost"
          size="xs"
          color="gray.400"
          alignSelf="flex-start"
          _hover={{ bg: "whiteAlpha.100" }}
          onClick={() => router.push("/destinations")}
        >
          ← 여행지 목록
        </Button>

        {/* 히어로 */}
        <Box
          position="relative"
          rounded="3xl"
          overflow="hidden"
          h={{ base: "260px", md: "360px" }}
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          shadow="0 24px 60px rgba(0,0,0,0.5)"
        >
          <Image
            src={d.images[0]}
            alt={d.name}
            fill
            sizes="(max-width: 768px) 100vw, 512px"
            style={{ objectFit: "cover" }}
            priority
          />
          <Box
            position="absolute"
            inset="0"
            bgImage="linear-gradient(180deg, rgba(7,11,20,0.15) 0%, rgba(7,11,20,0) 35%, rgba(7,11,20,0.6) 72%, rgba(7,11,20,0.95) 100%)"
          />
          <Stack position="absolute" bottom="0" left="0" right="0" p={{ base: 5, md: 6 }} gap="1.5">
            <HStack gap="1.5">
              {d.themes.map((t) => (
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
              <Heading size={{ base: "3xl", md: "4xl" }} fontWeight="black" color="white" letterSpacing="-0.02em">
                {d.name}
              </Heading>
              <Text fontSize="sm" color="gray.300">
                {d.area}
              </Text>
            </HStack>
            <Text color="gray.200" textShadow="0 1px 10px rgba(0,0,0,0.7)">
              “{d.tagline}”
            </Text>
          </Stack>
          {credit && (
            <Text
              position="absolute"
              bottom="1.5"
              right="2.5"
              fontSize="2xs"
              color="whiteAlpha.700"
              textShadow="0 1px 4px rgba(0,0,0,0.9)"
              maxW="60%"
              textAlign="right"
              lineClamp={1}
            >
              📷 {credit}
            </Text>
          )}
        </Box>

        {/* 가는 법 */}
        <Section title="🧭 가는 법 (서울 출발 기준)">
          <Text fontSize="sm" color="gray.200">
            🚗 {d.access.car.time}
            {d.access.car.note ? ` — ${d.access.car.note}` : ""}
          </Text>
          <Text fontSize="sm" color="gray.200">
            🚆 {d.access.transit.summary} ({d.access.transit.quality})
          </Text>
          <Text fontSize="sm" color="gray.400">
            현지 이동: {d.access.localMobility} · 추천 일정: {d.tripFit.recommendedNights}
          </Text>
          <HStack gap="2" mt="1">
            <Link href={d.kakaoMapUrl} target="_blank" rel="noreferrer" flex="1">
              <Button variant="outline" size="sm" w="full" rounded="full" borderColor="whiteAlpha.300" color="gray.200" _hover={{ bg: "whiteAlpha.100" }}>
                카카오맵
              </Button>
            </Link>
            {d.naverMapUrl && (
              <Link href={d.naverMapUrl} target="_blank" rel="noreferrer" flex="1">
                <Button variant="outline" size="sm" w="full" rounded="full" borderColor="whiteAlpha.300" color="gray.200" _hover={{ bg: "whiteAlpha.100" }}>
                  네이버지도
                </Button>
              </Link>
            )}
          </HStack>
        </Section>

        {/* 추천 코스 */}
        <Section title="🗓 추천 코스">
          {d.courses.map((c) => (
            <Box key={c.duration}>
              <Text fontSize="sm" fontWeight="bold" color="gray.100" mb="1">
                {c.duration}
              </Text>
              <Stack gap="0.5">
                {c.plan.map((line) => (
                  <Text key={line} fontSize="sm" color="gray.300">
                    {line}
                  </Text>
                ))}
              </Stack>
            </Box>
          ))}
          {d.extendTip && (
            <Text fontSize="sm" color="ocean.fg" mt="1">
              ➕ {d.extendTip}
            </Text>
          )}
        </Section>

        {/* 숙박 & 예상 비용 */}
        <Section title="🏨 숙박 & 예상 비용">
          {d.stay && (
            <Text fontSize="sm" color="gray.200">
              <b>숙박</b> — {d.stay}
            </Text>
          )}
          {d.cost && (
            <Text fontSize="sm" color="gray.200">
              <b>예상 비용</b> — {d.cost}
            </Text>
          )}
          <Text fontSize="2xs" color="gray.500">
            비용은 서울 출발·2인 기준의 대략치예요. 시즌·예약에 따라 달라질 수 있어요.
          </Text>
        </Section>

        {/* 왜 가야 하나 */}
        <Section title="💡 왜 여기냐면">
          {d.whyGo.map((w) => (
            <Text key={w} fontSize="sm" color="gray.200">
              · {w}
            </Text>
          ))}
        </Section>

        {/* 명소 & 음식 */}
        <Section title="📍 대표 명소 & 음식">
          {d.highlights.map((h) => (
            <Text key={h.name} fontSize="sm" color="gray.100">
              <b>📍 {h.name}</b>{" "}
              <Text as="span" color="gray.400">
                — {h.description}
              </Text>
            </Text>
          ))}
          {d.food.map((f) => (
            <Text key={f.name} fontSize="sm" color="gray.100">
              <b>🍽 {f.name}</b>{" "}
              <Text as="span" color="gray.400">
                — {f.description}
              </Text>
            </Text>
          ))}
        </Section>

        {/* 시기 정보 */}
        {(d.seasonalTips.length > 0 || d.festivals.length > 0) && (
          <Section title="🌤 언제 가면 좋을까">
            {d.seasonalTips.map((t) => (
              <Text key={t.note} fontSize="sm" color={t.peak ? "yellow.300" : "gray.300"}>
                {t.peak ? "✨" : "·"} [{t.months.join("·")}월] {t.note}
              </Text>
            ))}
            {d.festivals.map((f) => (
              <Text key={f.name} fontSize="sm" color="purple.300" fontWeight="medium">
                🎪 {f.name} — {f.period}
                {f.note ? ` · ${f.note}` : ""}
              </Text>
            ))}
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
            onClick={() => router.push("/destinations")}
          >
            목록으로
          </Button>
          <Button
            flex="1.5"
            rounded="full"
            fontWeight="black"
            color="white"
            bgImage={GRADIENT_CTA}
            shadow={GLOW_CTA}
            _hover={{ filter: "brightness(1.1)" }}
            onClick={() => router.push("/")}
          >
            월드컵으로 골라보기 →
          </Button>
        </Flex>
        <Text fontSize="xs" color="gray.600" textAlign="center" pb="4">
          사진 출처: Wikimedia Commons (CC 라이선스). 소요시간·비용·축제 시기는 대략적인 정보이니
          출발 전 확인하세요.
        </Text>
      </Stack>
    </Container>
  );
}
