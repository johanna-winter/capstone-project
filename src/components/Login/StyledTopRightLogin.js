import styled from "styled-components";
import Link from "next/link";

export const LoginNav = styled.nav`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
`;

export const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;

  cursor: pointer;
  background-color: #0b1226;
  color: #fff;
`;

export const LoginLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: white;
  background-color: #0b1226;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledRelativeDiv = styled.div`
  position: relative;
`;
