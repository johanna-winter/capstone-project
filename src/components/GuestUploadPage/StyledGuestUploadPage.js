import Link from "next/link";
import styled from "styled-components";

export const UploadPageWrapper = styled.main`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font: inherit;
  margin: 0.75rem 0;
  align-self: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  background: var(--grey-900);
  color: var(--grey-100);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    background: var(--grey-700);
  }
`;

export const UploadPageHeader = styled.header`
  text-align: center;
  h2 {
    margin: 0;
  }
  p {
    margin: 0.25rem 0 0;
    opacity: 0.75;
  }
`;

export const UploadPageContent = styled.section`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
`;

export const UploadPageFooter = styled.footer`
  margin-top: auto;
  padding: 1rem 0 0;
  font-size: 0.8rem;
  opacity: 0.8;
  text-align: center;
`;
