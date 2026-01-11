import GuestUploadForm from "@/components/GuestUploadForm/GuestUploadForm";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function GuestUploadPage() {
  const router = useRouter();
  const { eventId } = router.query;
  return (
    <StyledMain>
      <h2>Guest Upload Page</h2>
      {eventId ? <GuestUploadForm eventId={eventId} /> : null}
      <p>You can upload up to 5 images.</p>
      <footer>Powered by Memory Wall</footer>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 1rem;
`;
