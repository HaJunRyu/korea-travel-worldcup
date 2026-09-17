"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Stack,
  Tag,
  Text,
  Wrap,
} from "@chakra-ui/react";
import type { Destination, TripSettings } from "@/types/destination";
import { accessLine, cardSignals, warnings } from "@/lib/personalize";
import { GRADIENT_CTA, SCRIM_BOTTOM, SCRIM_TOP, BLUR_FALLBACK } from "@/components/ui/glass";

interface Props {
  destination: Destination;
  settings: TripSettings;
  onSelect: () => void;
  onDetail: () => void;
}

function ChipGroup({ icon, label, items }: { icon: string; label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <Stack gap="1">
      <Text
        fontSize="2xs"
        fontWeight="bold"
        color="gray.500"
        letterSpacing="0.06em"
      >
        {icon} {label}
      </Text>
      <Wrap gap="1">
        {items.map((name) => (
          <Tag.Root key={name} size="sm" rounded="full" bg="whiteAlpha.100" color="gray.200">
            <Tag.Label>{name}</Tag.Label>
          </Tag.Root>
        ))}
      </Wrap>
    </Stack>
  );
}

const SIGNAL_STYLE = {
  peak: { icon: "✨", color: "yellow.300" },
  tip: { icon: "🌿", color: "green.300" },
  festival: { icon: "🎪", color: "purple.300" },
} as const;

export function DestinationCard({ destination: d, settings, onSelect, onDetail }: Props) {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    setImgIdx(0);
  }, [d.id]);

  const access = accessLine(d, settings);
  const warns = warnings(d, settings);
  const signals = cardSignals(d, settings);

  return (
    <Flex
      direction="column"
      h="full"
      rounded="3xl"
      overflow="hidden"
      bg="whiteAlpha.50"
      backdropFilter="blur(14px)"
      borderWidth="1px"
      borderColor="whiteAlpha.100"
      transition="transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease"
      _hover={{
        md: {
          transform: "translateY(-4px)",
          borderColor: "whiteAlpha.300",
          shadow: "0 24px 60px rgba(0,0,0,0.5)",
        },
      }}
    >
      {/* 사진 — 지역명 오버레이 (포토 퍼스트) */}
      <Box position="relative" h={{ base: "220px", md: "300px" }} flexShrink={0} bg="ocean.subtle">
        {/* 모든 사진을 겹쳐 두고 opacity로 전환 — 미리 로드되어 캐러셀 넘김이 즉각 반응.
            로딩 중엔 공통 blur placeholder가 깔렸다가 사진 로드 완료 시 자연스럽게 교체 */}
        {d.images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${d.name} 사진 ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL={BLUR_FALLBACK}
            priority={i === 0}
            loading={i === 0 ? undefined : "eager"}
            style={{
              objectFit: "cover",
              opacity: i === imgIdx ? 1 : 0,
              transition: "opacity 0.3s ease",
              pointerEvents: i === imgIdx ? "auto" : "none",
            }}
          />
        ))}
        <Box position="absolute" inset="0" bgImage={SCRIM_TOP} />
        <Box position="absolute" inset="0" bgImage={SCRIM_BOTTOM} />

        {/* 상단 칩: 권역 + 테마 */}
        <HStack position="absolute" top="3" left="3" right="3" justify="space-between">
          <Badge
            bg="blackAlpha.600"
            backdropFilter="blur(8px)"
            color="gray.100"
            rounded="full"
            px="2.5"
            fontSize="2xs"
          >
            {d.area}
          </Badge>
          <HStack gap="1">
            {d.themes.map((t) => (
              <Badge
                key={t}
                bg="blackAlpha.600"
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
        </HStack>

        {/* 하단 오버레이: 이름 + 태그라인 */}
        <Stack position="absolute" bottom="0" left="0" right="0" p="4" gap="0.5">
          <Heading
            size={{ base: "2xl", md: "3xl" }}
            fontWeight="black"
            color="white"
            textShadow="0 2px 16px rgba(0,0,0,0.6)"
            letterSpacing="-0.02em"
          >
            {d.name}
          </Heading>
          <Text fontSize="sm" color="gray.200" textShadow="0 1px 8px rgba(0,0,0,0.7)">
            “{d.tagline}”
          </Text>
        </Stack>

        {d.images.length > 1 && (
          <>
            <IconButton
              aria-label="이전 사진"
              size="2xs"
              rounded="full"
              bg="blackAlpha.500"
              color="white"
              backdropFilter="blur(6px)"
              _hover={{ bg: "blackAlpha.700" }}
              position="absolute"
              left="2"
              top="40%"
              onClick={() => setImgIdx((i) => (i - 1 + d.images.length) % d.images.length)}
            >
              ‹
            </IconButton>
            <IconButton
              aria-label="다음 사진"
              size="2xs"
              rounded="full"
              bg="blackAlpha.500"
              color="white"
              backdropFilter="blur(6px)"
              _hover={{ bg: "blackAlpha.700" }}
              position="absolute"
              right="2"
              top="40%"
              onClick={() => setImgIdx((i) => (i + 1) % d.images.length)}
            >
              ›
            </IconButton>
            <HStack position="absolute" top="3" left="50%" transform="translateX(-50%)" gap="1">
              {d.images.map((_, i) => (
                <Box
                  key={i}
                  w="1.5"
                  h="1.5"
                  rounded="full"
                  bg={i === imgIdx ? "white" : "whiteAlpha.500"}
                />
              ))}
            </HStack>
          </>
        )}
      </Box>

      {/* 정보 */}
      <Stack p={{ base: 3.5, md: 4 }} gap="1.5" flex="1">
        <Text fontSize="xs" color="gray.300">
          {access.icon} {access.text}
        </Text>

        {warns.length > 0 && (
          <HStack gap="1" flexWrap="wrap">
            {warns.map((w) => (
              <Badge key={w} colorPalette="orange" variant="subtle" rounded="full" fontSize="2xs">
                ⚠️ {w}
              </Badge>
            ))}
          </HStack>
        )}

        {signals.map((s) => (
          <Text key={s.text} fontSize="xs" fontWeight="bold" color={SIGNAL_STYLE[s.kind].color}>
            {SIGNAL_STYLE[s.kind].icon} {s.text}
          </Text>
        ))}

        <Stack gap="2.5" mt="1">
          <ChipGroup
            icon="📍"
            label="가볼 만한 곳"
            items={d.highlights.slice(0, 4).map((h) => h.name)}
          />
          <ChipGroup icon="🍽" label="먹거리" items={d.food.slice(0, 3).map((f) => f.name)} />
        </Stack>
      </Stack>

      {/* 액션 — 선택은 버튼으로만 (제품 원칙 5) */}
      <HStack p={{ base: 3.5, md: 4 }} pt="0" gap="2">
        <Button
          variant="outline"
          size="sm"
          rounded="full"
          flex="1"
          borderColor="whiteAlpha.300"
          color="gray.200"
          _hover={{ bg: "whiteAlpha.100" }}
          onClick={onDetail}
        >
          자세히 보기
        </Button>
        <Button
          size="sm"
          rounded="full"
          flex="1.5"
          fontWeight="black"
          color="white"
          bgImage={GRADIENT_CTA}
          shadow="0 6px 20px rgba(249,91,50,0.35)"
          _hover={{ filter: "brightness(1.1)" }}
          _active={{ filter: "brightness(0.95)" }}
          onClick={onSelect}
        >
          여기로 갈래
        </Button>
      </HStack>
    </Flex>
  );
}
