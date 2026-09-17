"use client";

import { Badge, Button, Flex, Heading, Text, VStack, Wrap } from "@chakra-ui/react";
import { motion } from "motion/react";
import { roundLabel } from "@/lib/tournament";
import { GRADIENT_BRAND, GLOW_BRAND } from "@/components/ui/glass";

interface Props {
  round: number;
  names: string[];
  onContinue: () => void;
}

export function RoundIntro({ round, names, onContinue }: Props) {
  return (
    <Flex
      position="fixed"
      inset="0"
      bg="rgba(4,7,14,0.8)"
      backdropFilter="blur(8px)"
      zIndex="overlay"
      align="center"
      justify="center"
      p="6"
      onClick={onContinue}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        style={{ width: "100%", maxWidth: "28rem" }}
      >
        <VStack
          bg="rgba(12,19,34,0.9)"
          backdropFilter="blur(20px)"
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          rounded="3xl"
          p="8"
          gap="4"
          w="full"
          shadow={GLOW_BRAND}
          onClick={(e) => e.stopPropagation()}
        >
          <Text fontSize="xs" fontWeight="bold" letterSpacing="0.35em" color="gray.500">
            NEXT ROUND
          </Text>
          <Heading
            size="3xl"
            fontWeight="black"
            bgImage={GRADIENT_BRAND}
            bgClip="text"
            color="transparent"
          >
            {roundLabel(round)} 진출!
          </Heading>
          <Text fontSize="sm" color="gray.400">
            남은 후보 {names.length}곳
          </Text>
          <Wrap justify="center" gap="1.5">
            {names.map((n) => (
              <Badge key={n} colorPalette="ocean" variant="subtle" rounded="full" px="2.5">
                {n}
              </Badge>
            ))}
          </Wrap>
          <Button
            w="full"
            rounded="full"
            fontWeight="bold"
            color="white"
            bgImage={GRADIENT_BRAND}
            _hover={{ filter: "brightness(1.1)" }}
            onClick={onContinue}
          >
            계속하기
          </Button>
        </VStack>
      </motion.div>
    </Flex>
  );
}
