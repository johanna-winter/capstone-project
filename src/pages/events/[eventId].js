import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EventDetailPage() {
  const { query } = useRouter();
  const { eventId } = query;

  const {
    data: event,
    error,
    isLoading,
  } = useSWR(eventId ? `/api/events/${eventId}` : null, fetcher);

  if (error) return <p>Failed to load event</p>;
  if (isLoading || !event) return <p>Loading event data...</p>;

  return (
    <>
      <Link href="/">Back</Link>
      <h2>Event Overview</h2>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>Share this link with your guests:</p>
      <button>Copy Link</button>
      <h3>Event Photo Gallery</h3>
      <p>No photos added yet.</p>
    </>
  );
}
