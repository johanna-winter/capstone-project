import EventForm from "@/components/EventForm/EventForm";
import EventList from "@/components/EventList/EventList";
import styled from "styled-components";
import { useSWRConfig } from "swr";

export default function HomePage() {
  const { mutate } = useSWRConfig();
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
