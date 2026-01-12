import EventForm from "@/components/EventForm/EventForm";
import EventList from "@/components/EventList/EventList";
import styled from "styled-components";
import { useSWRConfig } from "swr";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { mutate } = useSWRConfig();
  const { status } = useSession();

  async function handleCreateEvent(eventData) {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    if (response.ok) {
      mutate("/api/events");
      return true;
    }
    return false;
  }

  if (status === "loading") {
    return null;
  }
  if (status !== "authenticated") {
    return (
      <StyledMain>
        <h1>Memory Wall</h1>
        <p>Please log in to create and manage your events.</p>
        <p>
          If you are a guest, please use the link you received to view the
          gallery or upload photos.
        </p>
      </StyledMain>
    );
  }

  return (
    <StyledMain>
      <h1>Memory Wall</h1>
      <EventForm onSubmit={handleCreateEvent} />
      <EventList />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 1rem;
`;
