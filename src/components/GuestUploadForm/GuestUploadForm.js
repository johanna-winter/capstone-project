import { useEffect, useState } from "react";
import {
  UploadFormWrapper,
  StyledUploadForm,
  UploadFormLabel,
  UploadPhotoInput,
  UploadFormInput,
  HelperText,
  UploadButton,
  StatusMessage,
  UploadGroup,
} from "@/components/GuestUploadForm/StyledGuestUploadForm";

export default function GuestUploadForm({ eventId }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [photoCount, setPhotoCount] = useState(0);

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
      <UploadFormWrapper>
        <StyledUploadForm onSubmit={handleUpload}>
          <h3>Upload your memory:</h3>
          <UploadGroup>
            <UploadFormLabel htmlFor="guest-images">
              {" "}
              Photo Upload:{" "}
            </UploadFormLabel>
            <UploadPhotoInput
              id="guest-images"
              type="file"
              name="images"
              accept="image/*"
              multiple
              required
              onChange={(event) => setPhotoCount(event.target.files.length)}
            />
            {photoCount > 0 && (
              <HelperText> {photoCount} / 5 images selected.</HelperText>
            )}
            <HelperText>You can upload up to 5 images.</HelperText>
          </UploadGroup>
          <UploadFormLabel htmlFor="guest-name">Your name: </UploadFormLabel>
          <UploadFormInput
            id="guest-name"
            type="text"
            name="name"
            maxLength="30"
            placeholder="(Optional) Add your name"
          />
          <UploadFormLabel htmlFor="guest-caption">
            {" "}
            Photo Caption:{" "}
          </UploadFormLabel>

          <UploadFormInput
            id="guest-caption"
            type="text"
            name="caption"
            maxLength="30"
            placeholder="(Optional) Add photo caption"
          />
          <UploadButton type="submit"> Upload Photo</UploadButton>
        </StyledUploadForm>
      </UploadFormWrapper>
      {errorMessage && <StatusMessage>{errorMessage}</StatusMessage>}
      {successMessage && (
        <StatusMessage $success>{successMessage}</StatusMessage>
      )}
    </>
  );
}
