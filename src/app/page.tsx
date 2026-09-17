"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Container, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { SetupForm } from "@/components/SetupForm";
import { Glass, GRADIENT_BRAND } from "@/components/ui/glass";
import { koreaCup } from "@/data";
import { clearGame, loadGame, type SavedGame } from "@/lib/storage";
import { view, roundLabel } from "@/lib/tournament";

export default function HomePage() {
  const router = useRouter();
  const [saved, setSaved] = useState<SavedGame | null>(null);

  useEffect(() => {
    const game = loadGame();
    if (game && !view(game.tournament).finished) setSaved(game);
  }, []);

  return (
    <Container maxW="lg" py="8">
      <Stack gap="6">
        <Stack gap="3" textAlign="center" pt="6" pb="2">
          <Text fontSize="xs" fontWeight="bold" letterSpacing="0.4em" color="ocean.fg">
            TRAVEL WORLDCUP · KOREA
          </Text>
          <Heading size={{ base: "3xl", md: "4xl" }} lineHeight="1.2" fontWeight="black" color="white">
            이번 여행지,
            <br />
            <Text as="span" bgImage={GRADIENT_BRAND} bgClip="text" color="transparent">
              토너먼트로 정하자
            </Text>
          </Heading>
          <Text fontSize="sm" color="gray.400" lineHeight="1.7">
            교통편과 날짜를 알려주시면, 전국 {koreaCup.destinations.length}곳을
            <br />내 조건 기준으로 비교하며 최종 목적지를 골라드려요.
          </Text>
        </Stack>

        {saved && (
          <Glass
            p="5"
            borderColor="ocean.emphasized"
            shadow="0 0 32px rgba(15,160,176,0.18)"
          >
            <Text fontWeight="extrabold" color="ocean.fg">
              ⏸ 진행 중인 월드컵이 있어요
            </Text>
            <Text fontSize="sm" color="gray.400" mt="1">
              {roundLabel(view(saved.tournament).round)}{" "}
              {view(saved.tournament).matchIndex + 1}/{view(saved.tournament).totalMatches} ·{" "}
              {new Date(saved.savedAt).toLocaleString("ko-KR", {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}{" "}
              저장됨
            </Text>
            <HStack mt="3" gap="2">
              <Button
                colorPalette="ocean"
                size="sm"
                rounded="full"
                onClick={() => router.push("/play?resume=1")}
              >
                이어서 하기
              </Button>
              <Button
                variant="outline"
                size="sm"
                rounded="full"
                borderColor="whiteAlpha.300"
                color="gray.300"
                _hover={{ bg: "whiteAlpha.100" }}
                onClick={() => {
                  clearGame();
                  setSaved(null);
                }}
              >
                지우고 새로 시작
              </Button>
            </HStack>
          </Glass>
        )}

        <SetupForm />
      </Stack>
    </Container>
  );
}
