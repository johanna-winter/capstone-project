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
  background-color: #a9c7d9;
  color: #0b1226;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const LoginLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font: inherit;
  line-height: 1;

  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  color: #0b1226;
  background-color: #a9c7d9;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;
