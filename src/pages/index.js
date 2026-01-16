import EventForm from "@/components/EventForm/EventForm";
import EventList from "@/components/EventList/EventList";
import { useSWRConfig } from "swr";
import { useSession } from "next-auth/react";
import { LoginGreeting } from "@/components/Login/StyledLoginMessages";
import HomeLoggedOut from "@/components/HomeLoggedOut/HomeLoggedOut";

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
    return <HomeLoggedOut />;
  }

  return (
    <>
      <LoginGreeting>
        Hello{session.user?.name ? `, ${session.user.name}!` : "!"} &#128075;
      </LoginGreeting>
      <EventForm onSubmit={handleCreateEvent} />
      <EventList />
    </>
  );
}
