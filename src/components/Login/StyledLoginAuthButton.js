import styled from "styled-components";
import Link from "next/link";

export const LoginNav = styled.nav`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
`;

export const LoginButton = styled.button`
  display: inline-flex;
  align-items: center;
  font: inherit;
  line-height: 1;

  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  background-color: var(--accent-100);
  color: var(--grey-900);
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    background-color: var(--accent-300);
  }
`;

export const LoginLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font: inherit;
  line-height: 1;

  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  color: var(--grey-900);
  background-color: var(--accent-100);
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;
