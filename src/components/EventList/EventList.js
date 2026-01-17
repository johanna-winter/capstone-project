import useSWR from "swr";
import { EventCard } from "../EventCard/EventCard";
import { EventListGrid, EventListTitle } from "./StyledEventList";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EventList() {
  const { data: events, error, isLoading } = useSWR("/api/events", fetcher);

  if (error) return <p>Failed to load events</p>;
  if (isLoading) return <p>Loading events...</p>;
  if (!events || events.length === 0) return <p>No events created yet</p>;

  const sortedEvents = [...events].sort((a, b) => b._id.localeCompare(a._id));

  return (
    <>
      <EventListTitle>Your Events</EventListTitle>
      <EventListGrid>
        {sortedEvents.map((event) => (
          <EventCard key={event._id} event={event}></EventCard>
        ))}
      </EventListGrid>
    </>
  );
}
