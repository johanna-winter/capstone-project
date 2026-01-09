import {
  Card,
  CardTitle,
  CardImage,
  CardLink,
  CardImageWrapper,
} from "./StyledEventCard";

export function EventCard({ event }) {
  return (
    <Card>
      <CardLink href={`/events/${event._id}`}>
        <CardImageWrapper>
          <CardImage
            src={event.imageUrl}
            alt={event.title}
            width={1600}
            height={1200}
            priority={false}
          />
        </CardImageWrapper>
        <CardTitle>{event.title}</CardTitle>
      </CardLink>
    </Card>
  );
}
