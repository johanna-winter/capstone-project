import Image from "next/image";
import {
  LightboxContainer,
  LightboxCard,
  LightboxHeader,
  LightboxMedia,
  CloseButton,
} from "./StyledPhotoDetailView";

export default function PhotoDetailView({
  photos = [],
  selectedIndex = 0,
  onClose,
}) {
  const photo = photos[selectedIndex];
  if (!photo) return null;

  return (
    <LightboxContainer>
      <div aria-hidden="true"></div>
      <LightboxCard>
        <LightboxHeader>
          <CloseButton type="button" onClick={onClose}>
            Close
          </CloseButton>
        </LightboxHeader>

        <LightboxMedia>
          <Image
            src={photo.imageUrl}
            alt="Memory photo"
            width={400}
            height={300}
          />
        </LightboxMedia>
      </LightboxCard>
    </LightboxContainer>
  );
}
