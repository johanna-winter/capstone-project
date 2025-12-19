import EventDetails from "@/components/EventDetails/EventDetails";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EventDetailPage() {
  const { query } = useRouter();
  const { eventId } = query;
  const guestUploadLink = `/events/${eventId}/upload`;

  const {
    data: event,
    error,
    isLoading,
  } = useSWR(eventId ? `/api/events/${eventId}` : null, fetcher);

  if (error) return <p>Failed to load event</p>;
  if (isLoading || !event) return <p>Loading event data...</p>;

  return (
    <>
      <EventDetails event={event} link={guestUploadLink} />
    </>
  );
}
