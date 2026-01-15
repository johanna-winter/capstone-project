import {
  LoggedOutWrapper,
  HeaderCard,
  CardHead,
  CardTitle,
  CardSubtitle,
  CTAButton,
  FeatureWrapper,
  FeatureCard,
  FeatureTitle,
  FeatureText,
  GuestMessage,
} from "./StyledHomeLoggedOut";

export default function HomeLoggedOut() {
  return (
    <LoggedOutWrapper>
      <HeaderCard>
        <CardHead>Memory Wall</CardHead>
        <CardTitle>Your event: all memories in one place.</CardTitle>
        <CardSubtitle>
          Create an event, share a link with your guests, and collect photos
          together — simple, beautiful, and made for real moments.
        </CardSubtitle>
        <CTAButton href="/login">Log in to create an event</CTAButton>
      </HeaderCard>

      <FeatureWrapper>
        <FeatureCard>
          <FeatureTitle>Share links with your guests</FeatureTitle>
          <FeatureText>
            Guests can upload photos or view the gallery via a shared event
            link.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>Organizers stay in control</FeatureTitle>
          <FeatureText>
            Create, edit, and manage events securely when you’re logged in.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureTitle>All memories, nicely organized</FeatureTitle>
          <FeatureText>
            No more scattered chats — keep everything together in one gallery.
          </FeatureText>
        </FeatureCard>
      </FeatureWrapper>

      <GuestMessage>
        <strong>Are you a guest?</strong> Use the link you received to upload
        photos or view the event gallery.
      </GuestMessage>
    </LoggedOutWrapper>
  );
}
