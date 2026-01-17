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
  DeleteIconButton,
  ConfirmDeletion,
  DeleteConfirmBox,
  DeleteConfirmText,
  CancelButton,
  DeleteButton,
} from "./StyledMemoryWallGallery";
import PhotoDetailView from "@/components/PhotoDetailView/PhotoDetailView";
import { useState } from "react";
import { StatusMessage } from "@/components/GuestUploadForm/StyledGuestUploadForm";
import { Trash2 } from "lucide-react";

export default function MemoryWallGallery({ event, mutate, isOrganizer }) {
  const uploads = event.uploads ?? [];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onNext() {
    setSelectedIndex((current) => {
      if (uploads.length === 0) return 0;
      return (current + 1) % uploads.length;
    });
  }

  function onPrev() {
    setSelectedIndex((current) => {
      if (uploads.length === 0) return 0;
      return (current - 1 + uploads.length) % uploads.length;
    });
  }

  async function handleDelete(uploadId) {
    const response = await fetch(
      `/api/events/${event._id}/upload/${uploadId}`,
      { method: "DELETE" }
    );
    if (!response.ok) throw new Error("Delete failed");
    await mutate();
  }

  return (
    <GallerySection>
      <GalleryTitle>{event.title} Photo Gallery</GalleryTitle>
      {errorMessage && <StatusMessage>{errorMessage}</StatusMessage>}
      {successMessage && (
        <StatusMessage $success>{successMessage}</StatusMessage>
      )}
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
                {isOrganizer && (
                  <DeleteIconButton
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setConfirmDeleteId(upload._id);
                    }}
                    aria-label="Delete upload"
                  >
                    <Trash2 size={16} />
                  </DeleteIconButton>
                )}
                <Image
                  src={upload.imageUrl}
                  alt={upload.caption || "Uploaded memory"}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  unoptimized
                  loading="eager"
                ></Image>
              </GalleryImageWrapper>
              {confirmDeleteId === upload._id && (
                <DeleteConfirmBox>
                  <DeleteConfirmText>
                    Delete this photo? This can&apos;t be undone.
                  </DeleteConfirmText>
                  <ConfirmDeletion>
                    <CancelButton
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setConfirmDeleteId(null);
                      }}
                    >
                      Cancel
                    </CancelButton>
                    <DeleteButton
                      type="button"
                      onClick={async (event) => {
                        event.stopPropagation();
                        setErrorMessage("");
                        setSuccessMessage("");
                        try {
                          await handleDelete(upload._id);
                          setSuccessMessage("Photo deleted.");
                          setTimeout(() => setSuccessMessage(""), 2500);
                        } catch (error) {
                          setErrorMessage(
                            "Something went wrong. Please try again."
                          );
                          setTimeout(() => setErrorMessage(""), 2500);
                        } finally {
                          setConfirmDeleteId(null);
                        }
                      }}
                    >
                      Delete
                    </DeleteButton>
                  </ConfirmDeletion>
                </DeleteConfirmBox>
              )}
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
