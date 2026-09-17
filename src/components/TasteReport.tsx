"use client";

import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import type { TasteEntry } from "@/lib/taste";
import { tasteSummary } from "@/lib/taste";
import { GRADIENT_BAR } from "@/components/ui/glass";

export function TasteReport({ entries }: { entries: TasteEntry[] }) {
  const summary = tasteSummary(entries);
  if (entries.length === 0) return null;

  return (
    <Stack gap="3">
      {entries.slice(0, 3).map((e, i) => (
        <Box key={e.theme}>
          <HStack justify="space-between" mb="1">
            <Text fontSize="sm" fontWeight="bold" color={i === 0 ? "white" : "gray.300"}>
              {i === 0 ? "👑 " : ""}
              {e.theme}
            </Text>
            <Text fontSize="sm" fontWeight="bold" color={i === 0 ? "ocean.fg" : "gray.500"}>
              {e.pct}%
            </Text>
          </HStack>
          <Box bg="whiteAlpha.100" rounded="full" h="2" overflow="hidden">
            <Box
              bgImage={GRADIENT_BAR}
              h="full"
              rounded="full"
              shadow={i === 0 ? "0 0 10px rgba(51,181,194,0.5)" : undefined}
              style={{ width: `${e.pct}%` }}
            />
          </Box>
        </Box>
      ))}
      {summary && (
        <Text fontSize="sm" color="gray.300" mt="1">
          {summary}
        </Text>
      )}
    </Stack>
  );
}
