import GuestUploadPage from "@/components/GuestUploadPage/GuestUploadPage";
import { useRouter } from "next/router";
import useSWR from "swr";
import BackButton from "@/components/BackButton/BackButton";
import { useSession } from "next-auth/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UploadPage() {
  const router = useRouter();
  const { eventId } = router.query;
  const { status } = useSession();

  const {
    data: event,
    error,
    isLoading,
  } = useSWR(eventId ? `/api/events/${eventId}` : null, fetcher);

  if (error) return <p>Failed to load event</p>;
  if (isLoading || !event) return <p>Loading event data...</p>;

  return (
    <>
      {" "}
      {status === "authenticated" && (
        <BackButton href={`/events/${eventId}/`}></BackButton>
      )}
      <GuestUploadPage event={event} eventId={eventId} />
    </>
  );
}
