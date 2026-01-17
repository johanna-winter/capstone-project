import EventDetails from "@/components/EventDetails/EventDetails";
import BackButton from "@/components/BackButton/BackButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import MemoryWallGallery from "@/components/MemoryWall/MemoryWallGallery";
import {
  AccessDeniedText,
  AccessDeniedTitle,
  AccessDeniedWrapper,
  LoginLink,
} from "@/components/EventDetails/StyledEventDetails";

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
  const guestGalleryLink = `/events/${eventId}/gallery`;
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

  const isOrganizer = status === "authenticated";

  if (status === "loading") {
    return null;
  }
  if (status !== "authenticated") {
    return (
      <AccessDeniedWrapper>
        <AccessDeniedTitle>Access denied!</AccessDeniedTitle>
        <AccessDeniedText>Please log in to manage this event.</AccessDeniedText>
        <LoginLink href="/login">→ Go to Login</LoginLink>
      </AccessDeniedWrapper>
    );
  }

  return (
    <>
      <BackButton href="/">Back</BackButton>
      <EventDetails
        event={event}
        uploadLink={guestUploadLink}
        galleryLink={guestGalleryLink}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onCancel={() => setIsEditing(false)}
        onSubmit={handleUpdateEvent}
        onDelete={handleDelete}
        deleteError={deleteError}
      />
      <MemoryWallGallery
        event={event}
        mutate={mutate}
        isOrganizer={isOrganizer}
      />
    </>
  );
}
