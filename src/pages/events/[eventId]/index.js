import EventDetails from "@/components/EventDetails/EventDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EventDetailPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const router = useRouter();
  const { eventId } = router.query;
  const guestUploadLink = `/events/${eventId}/upload`;

  const {
    data: event,
    error,
    isLoading,
    mutate,
  } = useSWR(eventId ? `/api/events/${eventId}` : null, fetcher);

  useEffect(() => {
    if (deleteError) {
      const timer = setTimeout(() => {
        setDeleteError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [deleteError]);

  if (error) return <p>Failed to load event</p>;
  if (isLoading || !event) return <p>Loading event data...</p>;

  async function handleUpdateEvent(updatedEvent) {
    const response = await fetch(`/api/events/${eventId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEvent),
    });
    if (response.ok) {
      mutate();
      setIsEditing(false);
      return true;
    }
    return false;
  }

  async function handleDelete() {
    setDeleteError("");
    console.log("router.asPath:", router.asPath);
    console.log("router.query.eventId:", eventId, eventId?.length);
    console.log("event._id:", event?._id, String(event?._id)?.length);

    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        setDeleteError("The event could not be deleted. Please try again.");
        return;
      }
      router.push("/");
    } catch (error) {
      setDeleteError("The event could not be deleted. Please try again.");
    }
  }

  return (
    <>
      <BackButton href="/">Back</BackButton>
      <EventDetails
        event={event}
        link={guestUploadLink}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onCancel={() => setIsEditing(false)}
        onSubmit={handleUpdateEvent}
        onDelete={handleDelete}
        deleteError={deleteError}
      />
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
