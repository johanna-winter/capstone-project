import EventForm from "@/components/EventForm/EventForm";
import EventList from "@/components/EventList/EventList";
import { useSWRConfig } from "swr";
import { useSession } from "next-auth/react";
import { LoginGreeting } from "@/components/Login/StyledLoginMessages";

export default function HomePage() {
  const { mutate } = useSWRConfig();
  const { data: session, status } = useSession();

  async function handleCreateEvent(eventData) {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    if (response.ok) {
      mutate("/api/events");
      return true;
    }
    return false;
  }

  if (status === "loading") {
    return null;
  }
  if (status !== "authenticated") {
    return (
      <>
        <p>Please log in to create and manage your events.</p>
        <p>
          If you are a guest, please use the link you received to view the
          gallery or upload photos.
        </p>
      </>
    );
  }

  return (
    <>
      <LoginGreeting>
        Hello{session.user?.name ? `, ${session.user.name}` : ""} &#128075;
      </LoginGreeting>
      <EventForm onSubmit={handleCreateEvent} />
      <EventList />
    </>
  );
}
