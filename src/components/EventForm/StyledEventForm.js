import styled from "styled-components";

export const StyledEventForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StyledEventTitle = styled.h2`
  text-align: center;
  font-weight: 600;
`;

export const StyledFormLabel = styled.label`
  font-weight: bold;
`;

export const StyledFormInput = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid var(--grey-700);
  background-color: var(--background-200);
`;

export const CreateButton = styled.button`
  padding: 0.5rem 1.75rem;
  display: block;
  margin: 1rem auto;
  cursor: pointer;
  border: 1px solid var(--grey-900);
  border-radius: 6px;
  font-weight: bold;
  color: var(--background-100);
  background-color: var(--grey-900);
  &:hover {
    background: var(--grey-700);
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
