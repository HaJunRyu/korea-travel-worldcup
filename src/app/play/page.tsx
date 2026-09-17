"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "motion/react";
import { GRADIENT_BAR, GRADIENT_BRAND, GLOW_BRAND } from "@/components/ui/glass";

import { koreaCup, getDestination } from "@/data";
import type { Destination, Theme, TripSettings } from "@/types/destination";
import { filterPool } from "@/lib/personalize";
import {
  createTournament,
  pick,
  undo,
  view,
  roundLabel,
  type Tournament,
} from "@/lib/tournament";
import { loadGame, saveGame, clearGame, appendHistory } from "@/lib/storage";
import { encodePicks, settingsFromParams, settingsToParams, themeFromParams } from "@/lib/url";
import { DestinationCard } from "@/components/DestinationCard";
import { DetailSheet } from "@/components/DetailSheet";
import { RoundIntro } from "@/components/RoundIntro";

interface GameSession {
  settings: TripSettings;
  theme: Theme | null;
  tournament: Tournament;
}

function PlayClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const [session, setSession] = useState<GameSession | null>(null);
  const [failed, setFailed] = useState(false);
  const [introRound, setIntroRound] = useState<number | null>(null);
  const [detail, setDetail] = useState<Destination | null>(null);

  // 초기화 — 이어하기 또는 새 대진 생성
  useEffect(() => {
    if (sp.get("resume") === "1") {
      const saved = loadGame();
      if (saved && !view(saved.tournament).finished) {
        setSession({
          settings: saved.settings,
          theme: saved.themeFilter,
          tournament: saved.tournament,
        });
        return;
      }
    }
    const settings = settingsFromParams((k) => sp.get(k));
    const theme = themeFromParams((k) => sp.get(k));
    const size = Number(sp.get("size")) || 16;
    const pool = filterPool(koreaCup.destinations, settings, theme).map((d) => d.id);
    if (pool.length < 2) {
      setFailed(true);
      return;
    }
    const tournament = createTournament(pool, size);
    const s: GameSession = { settings, theme, tournament };
    setSession(s);
    saveGame({ settings, themeFilter: theme, tournament, savedAt: Date.now() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 진행 중 이탈 방지 (자동 저장이 있어 데이터 유실은 없지만, 실수 방지용)
  useEffect(() => {
    const inProgress =
      session && session.tournament.picks.length > 0 && !view(session.tournament).finished;
    if (!inProgress) return;
    const handler = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [session]);

  const finish = useCallback(
    (t: Tournament, s: GameSession) => {
      const v = view(t);
      if (!v.champion || !v.runnerUp) return;
      clearGame();
      appendHistory({ winnerId: v.champion, finishedAt: Date.now() });
      const params = new URLSearchParams(settingsToParams(s.settings));
      params.set("w", v.champion);
      params.set("f", v.runnerUp);
      params.set("size", String(t.size));
      params.set("picks", encodePicks(t.picks));
      router.replace(`/result?${params.toString()}`);
    },
    [router],
  );

  const onPick = useCallback(
    (winnerId: string) => {
      setDetail(null);
      setSession((prev) => {
        if (!prev) return prev;
        const before = view(prev.tournament);
        const next = pick(prev.tournament, winnerId);
        const after = view(next);
        if (after.finished) {
          finish(next, prev);
        } else {
          saveGame({
            settings: prev.settings,
            themeFilter: prev.theme,
            tournament: next,
            savedAt: Date.now(),
          });
          if (after.round < before.round) setIntroRound(after.round);
        }
        return { ...prev, tournament: next };
      });
    },
    [finish],
  );

  const onUndo = useCallback(() => {
    setSession((prev) => {
      if (!prev) return prev;
      const next = undo(prev.tournament);
      saveGame({
        settings: prev.settings,
        themeFilter: prev.theme,
        tournament: next,
        savedAt: Date.now(),
      });
      return { ...prev, tournament: next };
    });
    setIntroRound(null);
  }, []);

  if (failed) {
    return (
      <Container maxW="lg" py="16" textAlign="center">
        <Stack gap="4" align="center">
          <Text>조건에 맞는 후보가 부족해요. 설정을 바꿔서 다시 시작해 주세요.</Text>
          <Button colorPalette="ocean" onClick={() => router.push("/")}>
            처음으로
          </Button>
        </Stack>
      </Container>
    );
  }

  if (!session) {
    return (
      <Flex h="100dvh" align="center" justify="center">
        <Spinner size="lg" color="ocean.solid" />
      </Flex>
    );
  }

  const v = view(session.tournament);
  const [aId, bId] = v.current ?? [null, null];
  const a = getDestination(aId);
  const b = getDestination(bId);

  return (
    <Container maxW="5xl" py={{ base: 3, md: 6 }}>
      {/* 상단 진행 표시 */}
      <Stack gap="2" mb={{ base: 3, md: 5 }}>
        <HStack justify="space-between">
          <Button
            variant="ghost"
            size="xs"
            colorPalette="gray"
            onClick={() => router.push("/")}
          >
            ← 처음으로
          </Button>
          <HStack gap="2">
            <Box
              px="3"
              py="0.5"
              rounded="full"
              bgImage={GRADIENT_BRAND}
              color="white"
              fontSize="sm"
              fontWeight="black"
            >
              {roundLabel(v.round)}
            </Box>
            <Text fontSize="sm" fontWeight="bold" color="gray.300">
              {v.matchIndex + 1} / {v.totalMatches}
            </Text>
          </HStack>
          <Button
            variant="ghost"
            size="xs"
            colorPalette="gray"
            disabled={session.tournament.picks.length === 0}
            onClick={onUndo}
          >
            ↩︎ 되돌리기
          </Button>
        </HStack>
        <Box bg="whiteAlpha.100" rounded="full" h="1.5" overflow="hidden">
          <Box
            bgImage={GRADIENT_BAR}
            h="full"
            rounded="full"
            transition="width 0.3s"
            shadow="0 0 12px rgba(51,181,194,0.6)"
            style={{ width: `${Math.round(v.progress * 100)}%` }}
          />
        </Box>
      </Stack>

      {/* 대결 */}
      {a && b && (
        <AnimatePresence mode="wait">
          <motion.div
            key={session.tournament.picks.length}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Flex direction={{ base: "column", md: "row" }} gap={{ base: 3, md: 4 }} align="stretch">
              <Box flex="1" minW="0">
                <DestinationCard
                  destination={a}
                  settings={session.settings}
                  onSelect={() => onPick(a.id)}
                  onDetail={() => setDetail(a)}
                />
              </Box>
              <Flex align="center" justify="center">
                <Flex rounded="full" p="2px" bgImage={GRADIENT_BRAND} shadow={GLOW_BRAND} flexShrink={0}>
                  <Flex
                    bg="#0A0F1E"
                    color="white"
                    rounded="full"
                    w={{ base: "10", md: "14" }}
                    h={{ base: "10", md: "14" }}
                    align="center"
                    justify="center"
                    fontWeight="black"
                    fontStyle="italic"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    VS
                  </Flex>
                </Flex>
              </Flex>
              <Box flex="1" minW="0">
                <DestinationCard
                  destination={b}
                  settings={session.settings}
                  onSelect={() => onPick(b.id)}
                  onDetail={() => setDetail(b)}
                />
              </Box>
            </Flex>
          </motion.div>
        </AnimatePresence>
      )}

      {/* 다음 매치 이미지 프리로드 */}
      <NextMatchPreload tournament={session.tournament} />

      <DetailSheet
        destination={detail}
        settings={session.settings}
        open={detail !== null}
        onClose={() => setDetail(null)}
      />

      {introRound !== null && (
        <RoundIntro
          round={introRound}
          names={view(session.tournament)
            .entrants.map((id) => getDestination(id)?.name ?? id)}
          onContinue={() => setIntroRound(null)}
        />
      )}
    </Container>
  );
}

/** 다음 매치 카드 이미지를 미리 로드해 전환 시 끊김을 줄인다 */
function NextMatchPreload({ tournament }: { tournament: Tournament }) {
  const v = view(tournament);
  if (!v.current) return null;
  const idx = v.matchIndex + 1;
  const nextIds =
    idx * 2 + 1 < v.entrants.length ? [v.entrants[idx * 2], v.entrants[idx * 2 + 1]] : [];
  return (
    <Box display="none" aria-hidden>
      {nextIds.map((id) => {
        const d = getDestination(id);
        return d ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={id} src={d.images[0]} alt="" />
        ) : null;
      })}
    </Box>
  );
}

export default function PlayPage() {
  return (
    <Suspense
      fallback={
        <Flex h="100dvh" align="center" justify="center">
          <Spinner size="lg" color="ocean.solid" />
        </Flex>
      }
    >
      <PlayClient />
    </Suspense>
  );
}
