import Image from "next/image";
import {
  LightboxContainer,
  LightboxBackdrop,
  LightboxCard,
  LightboxHeader,
  LightboxImageWrap,
  LightboxMedia,
  CloseButton,
  NavButton,
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
          <LightboxImageWrap>
            <Image
              src={photo.imageUrl}
              alt="Memory photo"
              sizes="(max-width: 600px) 92vw, (max-width: 1024px) 80vw, 900px"
              loading="eager"
              fill
              unoptimized
            />
          </LightboxImageWrap>
          <NavButton
            $left
            type="button"
            onClick={onPrev}
            aria-label="Previous photo"
          >
            <ChevronLeft size={26} />
          </NavButton>
          <NavButton
            $right
            type="button"
            onClick={onNext}
            aria-label="Next photo"
          >
            <ChevronRight size={26} />
          </NavButton>
        </LightboxMedia>
      </LightboxCard>
    </LightboxContainer>
  );
}
