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
} from "./StyledEventDetails";

export default function EventDetails({
  event,
  link,
  isEditing,
  onEdit,
  onCancel,
  onSubmit,
  onDelete,
}) {
  const [copiedLink, setCopiedLink] = useState(false);
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
            {!isEditing ? (
              <>
                <EditButton onClick={onEdit}>Edit</EditButton>
                <DeleteButton onClick={onDelete}>Delete</DeleteButton>
              </>
            ) : (
              <>
                <EditButton onClick={onCancel}>Cancel</EditButton>
                <DeleteButton onClick={onDelete}>Delete</DeleteButton>
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
        <h3>Event Photo Gallery</h3>
        <p>No photos added yet.</p>
      </DetailsWrapper>
    </>
  );
}
