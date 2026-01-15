import { useEffect, useState } from "react";
import EventForm from "@/components/EventForm/EventForm";
import {
  EventCard,
  EventLinkText,
  ShareSection,
  UploadLink,
  CopyLinkButton,
  EditButton,
  DeleteButton,
  DeleteStatusMessage,
} from "./StyledEventDetails";

export default function EventDetails({
  event,
  uploadLink,
  galleryLink,
  isEditing,
  onEdit,
  onCancel,
  onSubmit,
  onDelete,
  deleteError,
}) {
  const [copiedUploadLink, setCopiedUploadLink] = useState(false);
  const [copiedGalleryLink, setCopiedGalleryLink] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const displayDate = event.date
    ? new Date(event.date).toLocaleDateString("en-GB")
    : "";

  async function handleCopyUploadLink() {
    const fullLink = `${window.location.origin}${uploadLink}`;
    await navigator.clipboard.writeText(fullLink);
    setCopiedUploadLink(true);
  }
  async function handleCopyGalleryLink() {
    const fullLink = `${window.location.origin}${galleryLink}`;
    await navigator.clipboard.writeText(fullLink);
    setCopiedGalleryLink(true);
  }
  useEffect(() => {
    if (!copiedUploadLink) return;
    const timeout = setTimeout(() => setCopiedUploadLink(false), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [copiedUploadLink]);

  useEffect(() => {
    if (!copiedGalleryLink) return;
    const timeout = setTimeout(() => setCopiedUploadLink(false), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [copiedGalleryLink]);

  return (
    <>
      <EventCard>
        <section>
          {deleteError && (
            <DeleteStatusMessage>{deleteError}</DeleteStatusMessage>
          )}
          {!showConfirmDelete ? (
            <>
              <EditButton onClick={isEditing ? onCancel : onEdit}>
                {isEditing ? "Cancel" : "Edit"}
              </EditButton>

              <DeleteButton
                type="button"
                onClick={() => setShowConfirmDelete(true)}
              >
                Delete
              </DeleteButton>
            </>
          ) : (
            <>
              <DeleteStatusMessage>
                Are you sure you want to delete this event?
              </DeleteStatusMessage>

              <DeleteButton
                type="button"
                onClick={() => {
                  onDelete();
                  setShowConfirmDelete(false);
                }}
              >
                Delete
              </DeleteButton>

              <EditButton
                type="button"
                onClick={() => setShowConfirmDelete(false)}
              >
                Cancel
              </EditButton>
            </>
          )}
        </section>
        {!isEditing ? (
          <>
            <h2>Event Details</h2>
            <h3>{event.title}</h3>
            {event.description && <p>{event.description}</p>}
            {event.date && (
              <p>
                <strong>When?</strong> {displayDate}
              </p>
            )}
            <ShareSection>
              <EventLinkText>Share upload link with your guests:</EventLinkText>
              <UploadLink href={uploadLink}>
                {event.title} Upload Page
              </UploadLink>
              <CopyLinkButton onClick={handleCopyUploadLink}>
                {copiedUploadLink ? "Successfully copied!" : "Copy Link"}
              </CopyLinkButton>
              <EventLinkText>
                Share gallery link with your guests:
              </EventLinkText>
              <UploadLink href={galleryLink}>
                {event.title} Public Gallery
              </UploadLink>
              <CopyLinkButton onClick={handleCopyGalleryLink}>
                {copiedGalleryLink ? "Successfully copied!" : "Copy Link"}
              </CopyLinkButton>
            </ShareSection>
          </>
        ) : (
          <EventForm event={event} onSubmit={onSubmit} onCancel={onCancel} />
        )}
      </EventCard>
    </>
  );
}
