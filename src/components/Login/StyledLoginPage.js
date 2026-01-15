import styled from "styled-components";

export const LoginPageMain = styled.main`
  min-height: 80vh;
  display: grid;
  place-items: center;
  padding: 2rem 1rem;
`;

export const LoginCard = styled.section`
  width: 100%;
  max-width: 440px;
  background-color: var(--background-400);
  border: 1px solid var(--background-400);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 12px 30px rgba(146, 83, 95, 0.28);
`;

export const LoginCardHeader = styled.header`
  margin-bottom: 1.25rem;
`;

export const LoginCardTitle = styled.h2`
  font-size: 1.5rem;
`;

export const LoginCardText = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.4;
`;

export const LoginProviderButton = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font: inherit;
  font-weight: 600;
  font-weight: bold;
  cursor: pointer;
  background-color: var(--grey-900);
  color: var(--background-100);
  margin-bottom: 0.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;
