import styled from "styled-components";

export const LoginMessage = styled.p`
  margin: 0 0 1rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;

  color: ${(props) => (props.$error ? "#721c24" : "#155724")};
  background-color: ${(props) => (props.$error ? "#f8d7da" : "#d4edda")};
  border: 1px solid ${(props) => (props.$error ? "#f5c6cb" : "#c3e6cb")};
`;

export const LoginGreeting = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  line-height: 1;
  white-space: nowrap;
  color: #0b1226;
  text-align: center;
`;
