import { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import {
  StyledEventForm,
  StyledFormLabel,
  StyledFormInput,
  StyledCreateButton,
  StatusMessage,
} from "./StyledEventForm";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EventForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { mutate } = useSWR("/api/events", fetcher);
  const router = useRouter();

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

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
      setSuccessMessage("Your event was successfully created!");
      setErrorMessage("");
      mutate();
      event.target.reset();
      router.push(`/events/${data.id}`);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage("");
      console.error("Failed to create event");
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
        <StyledFormLabel htmlFor="event-title">Title:</StyledFormLabel>
        <StyledFormInput
          id="event-title"
          type="text"
          name="title"
          maxLength="50"
          placeholder="Name your event"
          required
        />
        <StyledFormLabel htmlFor="event-description">
          Description:
        </StyledFormLabel>
        <StyledFormInput
          id="event-description"
          type="text"
          name="description"
          maxLength="300"
          placeholder="Describe your event"
        />
        <StyledFormLabel htmlFor="event-date">Date:</StyledFormLabel>
        <StyledFormInput
          id="event-date"
          type="date"
          name="date"
          min={getMinDate()}
        />
        <StyledCreateButton type="submit">Create event</StyledCreateButton>
      </StyledEventForm>
      {successMessage && (
        <StatusMessage $success>{successMessage}</StatusMessage>
      )}
      {errorMessage && <StatusMessage>{errorMessage}</StatusMessage>}
    </>
  );
}
