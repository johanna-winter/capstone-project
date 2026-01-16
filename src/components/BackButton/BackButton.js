import { StyledBackButton } from "./StyledBackButton";
import { useRouter } from "next/router";

export default function BackButton({ fallbackHref = "/", children = "Back" }) {
  const router = useRouter();

  function handleBack(event) {
    event.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  }
  return (
    <StyledBackButton href={fallbackHref} onClick={handleBack}>
      {children}
    </StyledBackButton>
  );
}
