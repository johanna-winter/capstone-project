import styled from "styled-components";

export const UploadPageWrapper = styled.main`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
