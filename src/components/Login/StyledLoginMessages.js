import styled from "styled-components";

export const LoginMessage = styled.p`
  margin: 0 0 1rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;

  color: ${(props) =>
    props.$error ? "var(--error-600)" : "var(--success-500)"};
  background-color: ${(props) =>
    props.$error ? "var(--error-100)" : "var(--success-100)"};
  border: 1px solid
    ${(props) => (props.$error ? "var(--error-300)" : "var(--success-300)")};
`;

export const LoginGreeting = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  font-style: italic;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  color: var(--grey-900);
  text-align: center;
`;
