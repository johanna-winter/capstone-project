import styled from "styled-components";

export const StyledEventForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StyledFormLabel = styled.label`
  font-weight: bold;
`;

export const StyledFormInput = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #000;
  background-color: #fff;
`;

export const StyledCreateButton = styled.button`
  padding: 0.5rem 1.75rem;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 6px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  &:hover {
    background: #333;
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
