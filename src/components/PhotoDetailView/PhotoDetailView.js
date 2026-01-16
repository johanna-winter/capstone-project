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
import { X, ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function PhotoDetailView({
  photos = [],
  selectedIndex = 0,
  onClose,
  onNext,
  onPrev,
}) {
  const photo = photos[selectedIndex];

  useEffect(() => {
    function handleKeyEvent(event) {
      if (event.key === "Escape") onClose?.();
      if (event.key === "ArrowLeft") onPrev?.();
      if (event.key === "ArrowRight") onNext?.();
    }
    document.addEventListener("keydown", handleKeyEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyEvent);
    };
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <LightboxContainer>
      <LightboxBackdrop aria-hidden="true" onClick={onClose} />
      <LightboxCard>
        <LightboxHeader>
          <CloseButton type="button" onClick={onClose} aria-label="Close">
            <X size={20} />
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
            <ChevronLeft size={22} />
          </button>
          <button type="button" onClick={onNext} aria-label="Next photo">
            <ChevronRight size={22} />
          </button>
        </LightboxMedia>
      </LightboxCard>
    </LightboxContainer>
  );
}
