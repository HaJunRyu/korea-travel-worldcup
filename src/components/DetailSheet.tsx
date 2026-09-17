"use client";

import {
  Badge,
  Box,
  Button,
  CloseButton,
  Drawer,
  HStack,
  Link,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { Destination, TripSettings } from "@/types/destination";
import { matchedFestivals, matchedTips, tripMonths, tripNights } from "@/lib/personalize";
import { photoCredits } from "@/data";

interface Props {
  destination: Destination | null;
  settings: TripSettings;
  open: boolean;
  onClose: () => void;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text fontSize="xs" fontWeight="black" color="ocean.fg" letterSpacing="0.08em">
      {children}
    </Text>
  );
}

export function DetailSheet({ destination: d, settings, open, onClose }: Props) {
  const months = tripMonths(settings);
  const nights = tripNights(settings);
  const tipMatches = d ? matchedTips(d, settings) : [];
  const festMatches = d ? matchedFestivals(d, settings) : [];

  return (
    <Drawer.Root open={open} onOpenChange={(e) => !e.open && onClose()} placement="bottom">
      <Drawer.Backdrop bg="rgba(4,7,14,0.7)" backdropFilter="blur(4px)" />
      <Drawer.Positioner>
        <Drawer.Content
          roundedTop="3xl"
          maxH="85dvh"
          bg="rgba(12,19,34,0.97)"
          backdropFilter="blur(20px)"
          borderTopWidth="1px"
          borderColor="whiteAlpha.200"
          color="gray.100"
        >
          {d && (
            <>
              <Drawer.Header>
                <Drawer.Title>
                  <HStack align="baseline" gap="2">
                    <Text fontSize="xl" fontWeight="black" color="white">
                      {d.name}
                    </Text>
                    <Text fontSize="sm" color="gray.400">
                      {d.area} · {d.themes.join(" · ")}
                    </Text>
                  </HStack>
                </Drawer.Title>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" position="absolute" top="3" right="3" color="gray.400" />
                </Drawer.CloseTrigger>
              </Drawer.Header>

              <Drawer.Body>
                <Stack gap="4" pb="2">
                  <Stack gap="1.5">
                    <SectionTitle>왜 가야 하나</SectionTitle>
                    {d.whyGo.map((w) => (
                      <Text key={w} fontSize="sm" color="gray.200">
                        · {w}
                      </Text>
                    ))}
                  </Stack>

                  <Separator borderColor="whiteAlpha.200" />

                  <Stack gap="1.5">
                    <SectionTitle>
                      시기 정보{months.length > 0 ? ` (${months.join("·")}월 여행 기준)` : ""}
                    </SectionTitle>
                    {(months.length > 0 ? tipMatches : d.seasonalTips).map((t) => (
                      <Text key={t.note} fontSize="sm" color={t.peak ? "yellow.300" : "gray.300"}>
                        {t.peak ? "✨" : "·"} [{t.months.join("·")}월] {t.note}
                      </Text>
                    ))}
                    {months.length > 0 && tipMatches.length === 0 && (
                      <Text fontSize="sm" color="gray.500">
                        이 시기의 특별한 포인트는 없어요 — 사계절 무난한 곳이에요.
                      </Text>
                    )}
                    {(months.length > 0 ? festMatches : d.festivals).map((f) => (
                      <HStack key={f.name} gap="1.5" flexWrap="wrap">
                        <Text fontSize="sm" color="purple.300" fontWeight="medium">
                          🎪 {f.name} — {f.period}
                        </Text>
                        {months.length > 0 && (
                          <Badge colorPalette="purple" variant="subtle" rounded="full" fontSize="2xs">
                            여행 시기와 겹칠 수 있어요
                          </Badge>
                        )}
                      </HStack>
                    ))}
                  </Stack>

                  <Separator borderColor="whiteAlpha.200" />

                  <Stack gap="1.5">
                    <SectionTitle>가는 법 (서울 출발 기준)</SectionTitle>
                    <Text
                      fontSize="sm"
                      color={settings.transport === "car" ? "white" : "gray.300"}
                      fontWeight={settings.transport === "car" ? "bold" : "normal"}
                    >
                      🚗 {d.access.car.time}
                      {d.access.car.note ? ` — ${d.access.car.note}` : ""}
                    </Text>
                    <Text
                      fontSize="sm"
                      color={settings.transport === "transit" ? "white" : "gray.300"}
                      fontWeight={settings.transport === "transit" ? "bold" : "normal"}
                    >
                      🚆 {d.access.transit.summary} ({d.access.transit.quality})
                    </Text>
                    <Text fontSize="sm" color="gray.300">
                      🧭 현지 이동: {d.access.localMobility}
                    </Text>
                  </Stack>

                  <Separator borderColor="whiteAlpha.200" />

                  <Stack gap="1.5">
                    <SectionTitle>일정 적합도</SectionTitle>
                    <Text fontSize="sm" color="gray.200">
                      추천 일정: <b>{d.tripFit.recommendedNights}</b> · 당일치기{" "}
                      {d.tripFit.dayTrip}
                      {nights !== null && (
                        <Text as="span" color="gray.500">
                          {" "}
                          (내 일정: {nights === 0 ? "당일치기" : `${nights}박 ${nights + 1}일`})
                        </Text>
                      )}
                    </Text>
                  </Stack>

                  <Separator borderColor="whiteAlpha.200" />

                  <Stack gap="1.5">
                    <SectionTitle>대표 명소</SectionTitle>
                    {d.highlights.map((h) => (
                      <Box key={h.name}>
                        <Text fontSize="sm" fontWeight="bold" color="gray.100">
                          📍 {h.name}
                        </Text>
                        <Text fontSize="sm" color="gray.400">
                          {h.description}
                        </Text>
                      </Box>
                    ))}
                  </Stack>

                  <Separator borderColor="whiteAlpha.200" />

                  <Stack gap="1.5">
                    <SectionTitle>대표 음식</SectionTitle>
                    {d.food.map((f) => (
                      <Box key={f.name}>
                        <Text fontSize="sm" fontWeight="bold" color="gray.100">
                          🍽 {f.name}
                        </Text>
                        <Text fontSize="sm" color="gray.400">
                          {f.description}
                        </Text>
                      </Box>
                    ))}
                  </Stack>

                  <Separator borderColor="whiteAlpha.200" />

                  <HStack gap="2">
                    <Link href={d.kakaoMapUrl} target="_blank" rel="noreferrer" flex="1">
                      <Button
                        variant="outline"
                        size="sm"
                        w="full"
                        rounded="full"
                        borderColor="whiteAlpha.300"
                        color="gray.200"
                        _hover={{ bg: "whiteAlpha.100" }}
                      >
                        카카오맵에서 보기
                      </Button>
                    </Link>
                    {d.naverMapUrl && (
                      <Link href={d.naverMapUrl} target="_blank" rel="noreferrer" flex="1">
                        <Button
                          variant="outline"
                          size="sm"
                          w="full"
                          rounded="full"
                          borderColor="whiteAlpha.300"
                          color="gray.200"
                          _hover={{ bg: "whiteAlpha.100" }}
                        >
                          네이버지도에서 보기
                        </Button>
                      </Link>
                    )}
                  </HStack>

                  {photoCredits(d.id).length > 0 && (
                    <Text fontSize="2xs" color="gray.500" mt="1">
                      📷 사진: {photoCredits(d.id).join(" · ")} — via Wikimedia Commons
                    </Text>
                  )}
                </Stack>
              </Drawer.Body>

              {/* 정보 열람용 시트 — 선택은 카드의 '여기로 갈래'에서만.
                  실수 픽 방지를 위해 하단은 강조색 없는 '확인'(닫기)만 둔다. */}
              <Drawer.Footer>
                <Button
                  w="full"
                  rounded="full"
                  variant="outline"
                  borderColor="whiteAlpha.300"
                  color="gray.200"
                  _hover={{ bg: "whiteAlpha.100" }}
                  onClick={onClose}
                >
                  확인
                </Button>
              </Drawer.Footer>
            </>
          )}
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}
