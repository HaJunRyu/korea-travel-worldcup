"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { koreaCup } from "@/data";
import { SCRIM_BOTTOM, GRADIENT_BRAND, BLUR_FALLBACK } from "@/components/ui/glass";

export default function DestinationsPage() {
  const router = useRouter();
  const list = koreaCup.destinations;

  return (
    <Container maxW="6xl" py={{ base: 5, md: 8 }}>
      <Stack gap="5">
        <Stack gap="2">
          <Button
            variant="ghost"
            size="xs"
            color="gray.400"
            alignSelf="flex-start"
            _hover={{ bg: "whiteAlpha.100" }}
            onClick={() => router.push("/")}
          >
            ← 처음으로
          </Button>
          <Heading size={{ base: "xl", md: "2xl" }} fontWeight="black" color="white">
            국내 여행지{" "}
            <Text as="span" bgImage={GRADIENT_BRAND} bgClip="text" color="transparent">
              {list.length}곳
            </Text>
          </Heading>
          <Text fontSize="sm" color="gray.400">
            월드컵에 오르는 후보들이에요. 눌러서 추천 코스·숙박·교통편·예상 비용을 확인해보세요.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={{ base: 2.5, md: 4 }}>
          {list.map((d) => (
            <Link key={d.id} href={`/destinations/${d.id}`}>
              <Box
                position="relative"
                h={{ base: "150px", md: "180px" }}
                rounded="2xl"
                overflow="hidden"
                borderWidth="1px"
                borderColor="whiteAlpha.100"
                bg="ocean.subtle"
                transition="transform 0.15s, border-color 0.15s"
                _hover={{ transform: "translateY(-3px)", borderColor: "whiteAlpha.300" }}
              >
                <Image
                  src={d.images[0]}
                  alt={d.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL={d.imageBlurs?.[0] ?? BLUR_FALLBACK}
                />
                <Box position="absolute" inset="0" bgImage={SCRIM_BOTTOM} />
                <Badge
                  position="absolute"
                  top="2"
                  left="2"
                  bg="blackAlpha.600"
                  backdropFilter="blur(8px)"
                  color="gray.100"
                  rounded="full"
                  px="2"
                  fontSize="2xs"
                >
                  {d.area}
                </Badge>
                <Stack position="absolute" bottom="0" left="0" right="0" p="3" gap="0.5">
                  <Heading
                    size={{ base: "md", md: "lg" }}
                    fontWeight="black"
                    color="white"
                    textShadow="0 2px 12px rgba(0,0,0,0.6)"
                  >
                    {d.name}
                  </Heading>
                  <Text
                    fontSize="2xs"
                    color="gray.300"
                    lineClamp={1}
                    textShadow="0 1px 6px rgba(0,0,0,0.7)"
                  >
                    {d.themes.join(" · ")}
                  </Text>
                </Stack>
              </Box>
            </Link>
          ))}
        </SimpleGrid>

        <HStack justify="center" pt="2">
          <Button
            colorPalette="ocean"
            rounded="full"
            size="sm"
            onClick={() => router.push("/")}
          >
            월드컵 시작하러 가기 →
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
}
