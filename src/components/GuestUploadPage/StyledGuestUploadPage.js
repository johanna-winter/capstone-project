import Link from "next/link";
import styled from "styled-components";

export const UploadPageHeader = styled.header`
  text-align: center;
  width: 100%;
`;

export const InvitationText = styled.p`
  margin: 0.75rem 0 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--primary-300);
`;

export const UploadPageTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-size: 2rem;
  line-height: 1.15;
  color: var(--grey-900);

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const UploadDateRow = styled.p`
  margin: 0.75rem 0 0;
  color: var(--grey-700);
  opacity: 0.9;
  font-weight: 600;
`;

export const UploadPageContent = styled.section`
  text-align: left;
  width: 100%;
`;

export const GalleryCallout = styled.section`
  margin: 1.5rem auto;
  padding: 1.25rem 1.5rem;
  max-width: 44rem;
  width: 100%;
  border-radius: 10px;
  background-color: var(--background-500);
  border: 1px solid var(--accent-600);
  text-align: center;
`;

export const GalleryCalloutText = styled.p`
  margin: 0 0 0.75rem;
  color: var(--grey-100);
  line-height: 1.4;
`;

export const GalleryLinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  background: var(--accent-600);
  color: var(--grey-100);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;
