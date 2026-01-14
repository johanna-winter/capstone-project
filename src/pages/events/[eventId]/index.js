import EventDetails from "@/components/EventDetails/EventDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import MemoryWallGallery from "@/components/MemoryWall/MemoryWallGallery";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
};

export default function EventDetailOrganizerPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [deleteError, setDeleteError] = useState("");
  const router = useRouter();
  const { eventId } = router.query;
  const guestUploadLink = `/events/${eventId}/upload`;
  const { status } = useSession();

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

  if (status === "loading") {
    return null;
  }
  if (status !== "authenticated") {
    return (
      <>
        <h2>Access denied!</h2>
        <p>Please log in to manage this event.</p>
        <Link href="/login">Go to Login</Link>
      </>
    );
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
      <MemoryWallGallery event={event} />
    </>
  );
}

export const BackButton = styled(Link)`
  display: inline-block;
  margin: 1rem 0;
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
