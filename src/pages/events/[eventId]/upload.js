import GuestUploadPage from "@/components/GuestUploadPage/GuestUploadPage";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UploadPage() {
  const router = useRouter();
  const { eventId } = router.query;

  const {
    data: event,
    error,
    isLoading,
  } = useSWR(eventId ? `/api/events/${eventId}` : null, fetcher);

  if (error) return <p>Failed to load event</p>;
  if (isLoading || !event) return <p>Loading event data...</p>;

  return <GuestUploadPage event={event} eventId={eventId} />;
}
