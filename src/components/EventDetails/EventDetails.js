import Link from "next/link";

export default function EventDetails({ event, link }) {
  return (
    <>
      <Link href="/">Back</Link>
      <h2>Event Overview</h2>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>Share this link with your guests:</p>
      <Link href={link}>{link}</Link>
      <button>Copy Link</button>
      <h3>Event Photo Gallery</h3>
      <p>No photos added yet.</p>
    </>
  );
}
