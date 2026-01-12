import GuestUploadForm from "../GuestUploadForm/GuestUploadForm";
import {
  UploadPageWrapper,
  UploadPageHeader,
  UploadPageContent,
  UploadPageFooter,
} from "./StyledGuestUploadPage";

export default function GuestUploadPage({ event, eventId }) {
  const formattedDate = event?.date
    ? new Date(event.date).toLocaleDateString("en-GB")
    : null;
  return (
    <UploadPageWrapper>
      <UploadPageHeader>
        <h2>Memory Wall for {event.title}</h2>
        {formattedDate && <p>{formattedDate}</p>}
      </UploadPageHeader>
      <UploadPageContent>
        {eventId ? <GuestUploadForm eventId={eventId} /> : null}
      </UploadPageContent>
      <UploadPageFooter>Powered by Memory Wall</UploadPageFooter>
    </UploadPageWrapper>
  );
}
