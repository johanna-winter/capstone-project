import { StyledBackButton } from "./StyledBackButton";

export default function BackButton({ href, children = "Back" }) {
  return <StyledBackButton href={href}>{children}</StyledBackButton>;
}
