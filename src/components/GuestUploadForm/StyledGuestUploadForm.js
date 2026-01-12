import styled from "styled-components";

export const UploadFormWrapper = styled.section`
  border: 1.5px solid #733944;
  border-radius: 16px;
  padding: 24px;
  background-color: #d9afb2;
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
    background: #5d8c8c;
    border: 1px solid #025751;
    border-radius: 6px;
    font-weight: bold;
    color: #fff;
  }

  &::file-selector-button:hover {
    background: #003f3b;
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
  border: 1px solid #c9a5a8;
  background-color: #ecd6d5;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #333;
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
  border: 1px solid #025751;
  border-radius: 6px;
  font-weight: bold;
  color: #fff;
  background-color: #025751;
  &:hover {
    background-color: #003f3b;
  }
`;

export const StatusMessage = styled.p`
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  background-color: ${(props) => (props.$success ? "#e6f4ea" : "#fdecea")};
  border: 1px solid ${(props) => (props.$success ? "#34a853" : "#d93025")};
  color: ${(props) => (props.$success ? "#137333" : "#a50e0e")};
`;
