import styled from "styled-components";

export const GallerySection = styled.section`
  margin-top: 15px;
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
  background: #a6818b;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
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
  background: #a6818b;
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
