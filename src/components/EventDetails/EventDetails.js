import { useEffect, useState } from "react";
import EventForm from "@/components/EventForm/EventForm";
import {
  DetailsWrapper,
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
  link,
  isEditing,
  onEdit,
  onCancel,
  onSubmit,
  onDelete,
  deleteError,
}) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const displayDate = event.date
    ? new Date(event.date).toLocaleDateString("en-GB")
    : "";

  async function handleCopyLink() {
    const fullLink = `${window.location.origin}${link}`;
    await navigator.clipboard.writeText(fullLink);
    setCopiedLink(true);
  }
  useEffect(() => {
    if (!copiedLink) return;
    const timeout = setTimeout(() => setCopiedLink(false), 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [copiedLink]);

  return (
    <>
      <DetailsWrapper>
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
                <EventLinkText>Share this link with your guests:</EventLinkText>
                <UploadLink href={link}>{event.title} Event</UploadLink>
                <CopyLinkButton onClick={handleCopyLink}>
                  {copiedLink ? "Successfully copied!" : "Copy Link"}
                </CopyLinkButton>
              </ShareSection>
            </>
          ) : (
            <EventForm event={event} onSubmit={onSubmit} onCancel={onCancel} />
          )}
        </EventCard>
      </DetailsWrapper>
    </>
  );
}
