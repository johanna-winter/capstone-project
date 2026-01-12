import { useEffect, useState } from "react";
import {
  StyledEventForm,
  StyledFormLabel,
  StyledFormInput,
  CreateButton,
  StatusMessage,
} from "@/components/EventForm/StyledEventForm";

export default function GuestUploadForm({ eventId }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!successMessage && !errorMessage) return;

    const timer = setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);

  async function handleUpload(event) {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!eventId) {
      console.error("Missing eventId");
      setErrorMessage("Something went wrong. Please try again.");
      return;
    }
    const formData = new FormData(event.target);
    try {
      const response = await fetch(`/api/events/${eventId}/upload`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Photo upload failed");
      }

      const data = await response.json();
      console.log("Upload request sent successfully");
      setSuccessMessage(
        `Thanks! ${data.uploaded} photo${
          data.uploaded > 1 ? "s" : ""
        } uploaded successfully!`
      );
      event.target.reset();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  }
  return (
    <>
      <StyledEventForm onSubmit={handleUpload}>
        <StyledFormLabel htmlFor="guest-images">
          {" "}
          Photo Upload:
          <StyledFormInput
            id="guest-images"
            type="file"
            name="images"
            accept="image/*"
            multiple
            required
          />
        </StyledFormLabel>
        <StyledFormLabel htmlFor="guest-name">
          Name:
          <StyledFormInput
            id="guest-name"
            type="text"
            name="name"
            maxLength="30"
            placeholder="Enter your name"
          />
        </StyledFormLabel>
        <StyledFormLabel htmlFor="guest-caption">
          {" "}
          Photo Caption:
          <StyledFormInput
            id="guest-caption"
            type="text"
            name="caption"
            maxLength="30"
            placeholder="Enter photo caption"
          />
        </StyledFormLabel>
        <CreateButton type="submit"> Upload Photo</CreateButton>
      </StyledEventForm>
      {errorMessage && <StatusMessage>{errorMessage}</StatusMessage>}
      {successMessage && (
        <StatusMessage $success>{successMessage}</StatusMessage>
      )}
    </>
  );
}
