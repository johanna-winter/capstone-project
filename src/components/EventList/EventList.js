import useSWR from "swr";
import { StyledLink } from "./StyledEventList";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EventList() {
  const { data: events, error, isLoading } = useSWR("/api/events", fetcher);

  if (error) return <p>Failed to load events</p>;
  if (isLoading) return <p>Loading events...</p>;
  if (!events || events.length === 0) return <p>No events created yet</p>;

  const sortedEvents = [...events].sort((a, b) => b._id.localeCompare(a._id));

  return (
    <ul>
      {sortedEvents.map((event) => (
        <li key={event._id}>
          <StyledLink href={`/events/${event._id}`}>{event.title}</StyledLink>
        </li>
      ))}
    </ul>
  );
}
