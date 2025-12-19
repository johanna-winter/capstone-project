import EventDetails from "@/components/EventDetails/EventDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
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
      <BackButton href="/">Back</BackButton>
      <EventDetails event={event} link={guestUploadLink} />
    </>
  );
}

export const BackButton = styled(Link)`
  display: inline-block;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #333;
  }
`;
