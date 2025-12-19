import {
  DetailsWrapper,
  EventCard,
  EventLinkText,
  ShareSection,
  UploadLink,
  CopyLinkButton,
} from "./StyledEventDetails";

export default function EventDetails({ event, link }) {
  function handleCopyLink() {
    navigator.clipboard.writeText();
  }
  return (
    <>
      <DetailsWrapper>
        <EventCard>
          <h2>Event Details</h2>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <ShareSection>
            <EventLinkText>Share this link with your guests:</EventLinkText>
            <UploadLink href={link}>{event.title} Event</UploadLink>
            <CopyLinkButton onClick={handleCopyLink}>Copy Link</CopyLinkButton>
          </ShareSection>
        </EventCard>
        <h3>Event Photo Gallery</h3>
        <p>No photos added yet.</p>
      </DetailsWrapper>
    </>
  );
}
