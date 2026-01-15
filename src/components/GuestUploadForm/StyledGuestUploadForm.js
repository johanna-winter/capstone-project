import styled from "styled-components";

export const UploadFormWrapper = styled.section`
  border: 1.5px solid var(--accent-600);
  border-radius: 16px;
  padding: 24px;
  background-color: var(--background-400);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
`;

// NOTE: similar to EventForm styles, can be refactored later.

export const StyledUploadForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const UploadFormLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.2px;
`;

export const UploadPhotoInput = styled.input`
  font-family: inherit;
  color: var(--grey-900);

  &::file-selector-button {
    padding: 0.5rem 1.25rem;
    margin-right: 0.75rem;
    cursor: pointer;
    background: var(--primary-200);
    border: 1px solid var(--primary-300);
    border-radius: 6px;
    font-weight: bold;
    color: var(--background-100);
  }

  &::file-selector-button:hover {
    background: var(--primary-500);
  }
`;

export const UploadGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

export const UploadFormInput = styled.input`
  margin-top: 4px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--background-400);
  background-color: var(--background-300);
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: var(--grey-700);
  }
`;

export const HelperText = styled.p`
  margin: 0;
  font-size: 0.8rem;
  opacity: 0.7;
  line-height: 1.2;
`;

export const UploadButton = styled.button`
  padding: 0.5rem 1.75rem;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  border: 1px solid var(--primary-300);
  border-radius: 6px;
  font-weight: bold;
  color: var(--background-100);
  background-color: var(--primary-300);
  &:hover {
    background-color: var(--primary-500);
  }
`;

export const StatusMessage = styled.p`
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  background-color: ${(props) =>
    props.$success ? "var(--success-100)" : "var(--error-100)"};
  border: 1px solid
    ${(props) => (props.$success ? "var(--success-300)" : "var(--error-300)")};
  color: ${(props) =>
    props.$success ? "var(--success-500)" : "var(--error-600)"};
`;
