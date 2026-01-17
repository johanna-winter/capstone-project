import MemoryWallGallery from "@/components/MemoryWall/MemoryWallGallery";
import { useRouter } from "next/router";
import useSWR from "swr";
import BackButton from "@/components/BackButton/BackButton";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

export default function GalleryPage() {
  const router = useRouter();
  const { eventId, from } = router.query;
  const { status } = useSession();

  const {
    data: event,
    error,
    isLoading,
    mutate,
  } = useSWR(
    router.isReady && eventId ? `/api/events/${eventId}` : null,
    fetcher
  );

  if (error) return <p>Failed to load event gallery</p>;
  if (isLoading || !event) return <p>Loading event gallery...</p>;

  const isOrganizer = status === "authenticated";
  const cameFromUpload = from === "upload";

  return (
    <>
      {isOrganizer && <BackButton fallbackHref={`/events/${eventId}/`} />}
      {!isOrganizer && cameFromUpload && (
        <BackButton fallbackHref={`/events/${eventId}/upload`} />
      )}
      <MemoryWallGallery
        event={event}
        mutate={mutate}
        isOrganizer={isOrganizer}
      />
    </>
  );
}
