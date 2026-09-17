import { notFound } from "next/navigation";
import { koreaCup, getDestination } from "@/data";
import { DestinationDetail } from "@/components/DestinationDetail";

export function generateStaticParams() {
  return koreaCup.destinations.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const d = getDestination(id);
  if (!d) return { title: "여행지 – 국내 여행지 월드컵" };
  return {
    title: `${d.name} – 국내 여행지 월드컵`,
    description: `${d.tagline} · ${d.whyGo[0] ?? ""}`,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const destination = getDestination(id);
  if (!destination) notFound();
  return <DestinationDetail destination={destination} />;
}
