import GuestUploadForm from "@/components/GuestUploadForm/GuestUploadForm";
import {
  UploadPageHeader,
  InvitationText,
  UploadPageTitle,
  UploadDateRow,
  UploadPageContent,
  GalleryCallout,
  GalleryCalloutText,
  GalleryLinkButton,
} from "./StyledGuestUploadPage";

export default function GuestUploadPage({ event, eventId }) {
  const formattedDate = event?.date
    ? new Date(event.date).toLocaleDateString("en-GB")
    : null;
  return (
    <>
      <UploadPageHeader>
        <InvitationText>
          You have been invited to share your photos from:
        </InvitationText>
        <UploadPageTitle>{event.title}</UploadPageTitle>
        {formattedDate && <UploadDateRow>{formattedDate}</UploadDateRow>}
      </UploadPageHeader>
      <GalleryCallout>
        <GalleryCalloutText>
          Got photos to share? Add them to the album so everyone can relive the
          best moments together 💛
        </GalleryCalloutText>
      </GalleryCallout>
      <UploadPageContent>
        {eventId ? <GuestUploadForm eventId={eventId} /> : null}
      </UploadPageContent>
      <GalleryCallout>
        <GalleryCalloutText>
          Curious what others have shared already? ✨ Take a look at the event’s
          memory wall.
        </GalleryCalloutText>

        <GalleryLinkButton href={`/events/${eventId}/gallery`}>
          View the gallery
        </GalleryLinkButton>
      </GalleryCallout>
    </>
  );
}
