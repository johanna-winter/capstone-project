import GuestUploadForm from "@/components/GuestUploadForm/GuestUploadForm";
import {
  UploadPageHeader,
  InvitationText,
  UploadPageTitle,
  UploadDateRow,
  UploadPageContent,
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
      <UploadPageContent>
        {eventId ? <GuestUploadForm eventId={eventId} /> : null}
      </UploadPageContent>
    </>
  );
}
