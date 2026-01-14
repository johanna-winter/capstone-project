import Image from "next/image";
import {
  GallerySection,
  GalleryTitle,
  GalleryEmptyState,
  GalleryGridLayout,
  GalleryItem,
  GalleryImageWrapper,
  GalleryImageMeta,
  GalleryImageName,
  GalleryImageCaption,
} from "./StyledMemoryWallGallery";

export default function MemoryWallGallery({ event }) {
  const uploads = event.uploads ?? [];
  return (
    <GallerySection>
      <GalleryTitle>{event.title} Photo Gallery</GalleryTitle>
      {uploads.length === 0 ? (
        <GalleryEmptyState>No photos added yet.</GalleryEmptyState>
      ) : (
        <GalleryGridLayout>
          {uploads.map((upload) => (
            <GalleryItem key={upload._id}>
              <GalleryImageWrapper>
                <Image
                  src={upload.imageUrl}
                  alt={upload.caption || "Uploaded memory"}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  unoptimized
                ></Image>
              </GalleryImageWrapper>
              {(upload.name || upload.caption) && (
                <GalleryImageMeta>
                  {upload.name && (
                    <GalleryImageName>
                      Uploaded by {upload.name}
                    </GalleryImageName>
                  )}
                  {upload.caption && (
                    <GalleryImageCaption>{upload.caption}</GalleryImageCaption>
                  )}
                </GalleryImageMeta>
              )}
            </GalleryItem>
          ))}
        </GalleryGridLayout>
      )}
    </GallerySection>
  );
}
