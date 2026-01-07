import { useEffect, useState } from "react";
import useSWR from "swr";
import {
  StyledEventForm,
  StyledFormLabel,
  StyledFormInput,
  StyledCreateButton,
  StatusMessage,
} from "./StyledEventForm";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EventForm({ event, onSubmit, onCancel }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isEditMode = Boolean(event?._id);

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

  function getMinDate() {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10);
    return formattedDate;
  }

  const defaultDate = event?.date ? String(event.date).slice(0, 10) : "";

  async function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    const formData = new FormData(submitEvent.target);
    const eventData = Object.fromEntries(formData);

    try {
      const ok = await onSubmit(eventData);

      if (!ok) {
        throw new Error("Failed to create event");
      }

      setErrorMessage("");
      setSuccessMessage(
        isEditMode
          ? "Your event has been successfully updated!"
          : "Your event was successfully created!"
      );
      if (!event?._id) {
        submitEvent.target.reset();
      }
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Something went wrong. Please try again.");
      console.error("Failed to create event");
    }
  }

  return (
    <>
      <StyledEventForm onSubmit={handleSubmit}>
        {!isEditMode && <h2>Add your event</h2>}
        {isEditMode && <h2>Edit your event</h2>}
        <StyledFormLabel htmlFor="event-title">Title:</StyledFormLabel>
        <StyledFormInput
          id="event-title"
          type="text"
          name="title"
          defaultValue={event?.title}
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
          defaultValue={event?.description}
          maxLength="300"
          placeholder="Describe your event"
        />
        <StyledFormLabel htmlFor="event-date">Date:</StyledFormLabel>
        <StyledFormInput
          id="event-date"
          type="date"
          name="date"
          defaultValue={defaultDate}
          min={!isEditMode ? getMinDate() : undefined}
        />
        {!isEditMode && (
          <StyledCreateButton type="submit">Create event</StyledCreateButton>
        )}
        {isEditMode && (
          <StyledCreateButton type="submit">Save event</StyledCreateButton>
        )}
      </StyledEventForm>
      {successMessage && (
        <StatusMessage $success>{successMessage}</StatusMessage>
      )}
      {errorMessage && <StatusMessage>{errorMessage}</StatusMessage>}
    </>
  );
}
