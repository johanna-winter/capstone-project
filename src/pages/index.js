import EventForm from "@/components/EventForm/EventForm";
import EventList from "@/components/EventList/EventList";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledMain>
      <h1>Memory Wall</h1>
      <EventForm />
      <EventList />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 1rem;
`;
