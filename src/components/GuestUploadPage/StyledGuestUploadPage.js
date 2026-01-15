import styled from "styled-components";

export const UploadPageHeader = styled.header`
  text-align: center;
  width: 100%;
`;

export const InvitationText = styled.p`
  margin: 0 0 0.75rem;
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
  margin-top: 1rem;
  width: 100%;
`;
