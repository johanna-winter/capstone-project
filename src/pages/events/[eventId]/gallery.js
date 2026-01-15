import MemoryWallGallery from "@/components/MemoryWall/MemoryWallGallery";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

export default function GalleryPage() {
  const router = useRouter();
  const { eventId } = router.query;

  const {
    data: event,
    error,
    isLoading,
  } = useSWR(
    router.isReady && eventId ? `/api/events/${eventId}` : null,
    fetcher
  );

  if (error) return <p>Failed to load event gallery</p>;
  if (isLoading || !event) return <p>Loading event gallery...</p>;

  return (
    <>
      <MemoryWallGallery event={event} />
    </>
  );
}
