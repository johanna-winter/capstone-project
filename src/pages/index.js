import EventForm from "@/components/EventForm/EventForm";
import EventList from "@/components/EventList/EventList";
import styled from "styled-components";

export default function HomePage() {
  async function handleCreateEvent(eventData) {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });
    return response.ok;
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
