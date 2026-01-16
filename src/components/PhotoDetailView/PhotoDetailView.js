import Image from "next/image";
import {
  LightboxContainer,
  LightboxBackdrop,
  LightboxCard,
  LightboxHeader,
  LightboxMedia,
  CloseButton,
} from "./StyledPhotoDetailView";
import { useEffect } from "react";

export default function PhotoDetailView({
  photos = [],
  selectedIndex = 0,
  onClose,
  onNext,
  onPrev,
}) {
  const photo = photos[selectedIndex];

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        onClose?.();
      }
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  if (!photo) return null;

  return (
    <LightboxContainer>
      <LightboxBackdrop aria-hidden="true" onClick={onClose} />
      <LightboxCard>
        <LightboxHeader>
          <CloseButton type="button" onClick={onClose}>
            x
          </CloseButton>
        </LightboxHeader>

        <LightboxMedia>
          <Image
            src={photo.imageUrl}
            alt="Memory photo"
            width={400}
            height={300}
          />
          <button type="button" onClick={onPrev} aria-label="Previous photo">
            Prev
          </button>
          <button type="button" onClick={onNext} aria-label="Next photo">
            Next
          </button>
        </LightboxMedia>
      </LightboxCard>
    </LightboxContainer>
  );
}
