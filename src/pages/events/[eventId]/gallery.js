import { useRouter } from "next/router";

export default function GalleryPage() {
  const router = useRouter();
  const { eventId } = router.query;
  return (
    <>
      <h2>Public Gallery Page</h2>
      <p>
        Content will be added later. At the moment, this page has only been
        created for access control.
      </p>
    </>
  );
}
