import { StyledEventForm } from "./StyledEventForm";

export default function EventForm() {
  function getMinDate() {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10);
    return formattedDate;
  }
  return (
    <>
      <StyledEventForm>
        <h2>Add your event</h2>
        <label htmlFor="event-title">Title:</label>
        <input
          id="event-title"
          type="text"
          name="title"
          maxLength="50"
          placeholder="Name your event"
          required
        />
        <label htmlFor="event-description">Description:</label>
        <input
          id="event-description"
          type="text"
          name="description"
          maxLength="300"
          placeholder="Describe your event"
        />
        <label htmlFor="event-date">Date:</label>
        <input id="event-date" type="date" name="date" min={getMinDate()} />
        <button type="submit">Create event</button>
      </StyledEventForm>
    </>
  );
}
