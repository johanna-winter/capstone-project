import GuestUploadForm from "@/components/GuestUploadForm/GuestUploadForm";
import {
  UploadPageWrapper,
  UploadPageHeader,
  UploadPageContent,
} from "./StyledGuestUploadPage";

export default function GuestUploadPage({ event, eventId }) {
  const formattedDate = event?.date
    ? new Date(event.date).toLocaleDateString("en-GB")
    : null;
  return (
    <UploadPageWrapper>
      <UploadPageHeader>
        <h2>{event.title}</h2>
        {formattedDate && <p>{formattedDate}</p>}
      </UploadPageHeader>
      <UploadPageContent>
        {eventId ? <GuestUploadForm eventId={eventId} /> : null}
      </UploadPageContent>
    </UploadPageWrapper>
  );
}
