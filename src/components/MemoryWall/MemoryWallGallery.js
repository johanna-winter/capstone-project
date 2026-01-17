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
import PhotoDetailView from "@/components/PhotoDetailView/PhotoDetailView";
import { useState } from "react";

export default function MemoryWallGallery({ event, mutate }) {
  const uploads = event.uploads ?? [];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  function onNext() {
    setSelectedIndex((current) => {
      if (uploads.length === 0) return 0;
      return (current + 1) % uploads.length;
    });
  }

  function onPrev() {
    setSelectedIndex((current) => {
      if (uploads.length === 0) return 0;
      return (current - 1) % uploads.length;
    });
  }

  async function handleDelete(uploadId) {
    const confirmed = window.confirm(
      "Delete this upload permanently? This cannot be undone."
    );
    if (!confirmed) return;

    try {
      const response = await fetch(
        `/api/events/${event._id}/uploads/${uploadId}`,
        { method: "DELETE" }
      );
      if (!response.ok) throw new Error("Delete failed");
      await mutate();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <GallerySection>
      <GalleryTitle>{event.title} Photo Gallery</GalleryTitle>
      {uploads.length === 0 ? (
        <GalleryEmptyState>No photos added yet.</GalleryEmptyState>
      ) : (
        <GalleryGridLayout>
          {uploads.map((upload, index) => (
            <GalleryItem
              key={upload._id}
              onClick={() => {
                setSelectedIndex(index);
                setIsOpen(true);
              }}
            >
              <GalleryImageWrapper>
                <Image
                  src={upload.imageUrl}
                  alt={upload.caption || "Uploaded memory"}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  unoptimized
                  loading="eager"
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
      {isOpen && (
        <PhotoDetailView
          photos={uploads}
          selectedIndex={selectedIndex}
          onClose={() => setIsOpen(false)}
          onNext={onNext}
          onPrev={onPrev}
        />
      )}
    </GallerySection>
  );
}
