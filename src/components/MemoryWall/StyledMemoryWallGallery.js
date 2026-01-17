import styled from "styled-components";

export const GallerySection = styled.section`
  margin: 25px 0;
`;

export const GalleryTitle = styled.h2`
  margin-bottom: 25px;
  text-align: center;
`;

export const GalleryGridLayout = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const GalleryItem = styled.li`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  background: var(--background-500);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;

export const GalleryImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  img {
    display: block;
    object-fit: cover;
  }
`;

export const GalleryImageMeta = styled.div`
  padding: 10px 12px;
  display: grid;
  gap: 4px;
  background: var(--background-500);
`;

export const GalleryImageName = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 0.9rem;
`;

export const GalleryImageCaption = styled.p`
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.85;
  font-style: italic;
`;

export const GalleryEmptyState = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const DeleteIconButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;

  width: 32px;
  height: 32px;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  display: grid;
  place-items: center;

  background: rgba(0, 0, 0, 0.45);
  color: white;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const DeleteConfirmBox = styled.section`
  margin: 8px;
  display: grid;
  gap: 8px;
`;

export const ConfirmDeletion = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DeleteConfirmText = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 1;
  color: var(--grey-900);

  strong {
    font-weight: 600;
  }
`;

export const CancelButton = styled.button`
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--background-200);
  color: var(--grey-900);
  &:hover {
    background: var(--background-400);
  }
`;

export const DeleteButton = styled.button`
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
  background: var(--error-500);
  border: 1px solid var(--error-500);
  color: var(--grey-100);
  &:hover {
    opacity: 0.6;
    color: var(--background-100);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
