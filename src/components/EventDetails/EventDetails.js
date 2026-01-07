import { useEffect, useState } from "react";
import EventForm from "@/components/EventForm/EventForm";
import {
  DetailsWrapper,
  EventCard,
  EventLinkText,
  ShareSection,
  UploadLink,
  CopyLinkButton,
  ButtonWrapper,
  EditButton,
} from "./StyledEventDetails";

export default function EventDetails({
  event,
  link,
  isEditing,
  onEdit,
  onCancel,
  onSubmit,
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
          <ButtonWrapper>
            {!isEditing ? (
              <EditButton onClick={onEdit}>Edit</EditButton>
            ) : (
              <EditButton onClick={onCancel}>Cancel</EditButton>
            )}
          </ButtonWrapper>
          {!isEditing ? (
            <>
              <h2>Event Details</h2>
              <h3>{event.title}</h3>
              {event.description && <p>{event.description}</p>}
              {event.date && <p>When? {displayDate}</p>}
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
