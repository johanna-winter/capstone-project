import { StyledEventForm } from "./StyledEventForm";

export default function EventForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const eventData = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }
      const data = await response.json();
      console.log("Event created: ", data);
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  }

  function getMinDate() {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10);
    return formattedDate;
  }
  return (
    <>
      <StyledEventForm onSubmit={handleSubmit}>
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
