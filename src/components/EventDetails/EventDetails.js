import { useEffect, useState } from "react";
import {
  DetailsWrapper,
  EventCard,
  EventLinkText,
  ShareSection,
  UploadLink,
  CopyLinkButton,
} from "./StyledEventDetails";

export default function EventDetails({ event, link }) {
  const [copiedLink, setCopiedLink] = useState(false);

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
          <h2>Event Details</h2>
          <h3>{event.title}</h3>
          {event.description && <p>{event.description}</p>}
          {event.date && <p>{event.date}</p>}
          <ShareSection>
            <EventLinkText>Share this link with your guests:</EventLinkText>
            <UploadLink href={link}>{event.title} Event</UploadLink>
            <CopyLinkButton onClick={handleCopyLink}>
              {copiedLink ? "Successfully copied!" : "Copy Link"}
            </CopyLinkButton>
          </ShareSection>
        </EventCard>
        <h3>Event Photo Gallery</h3>
        <p>No photos added yet.</p>
      </DetailsWrapper>
    </>
  );
}
