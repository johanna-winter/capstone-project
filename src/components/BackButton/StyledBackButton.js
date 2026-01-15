import Link from "next/link";
import styled from "styled-components";

export const StyledBackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font: inherit;
  margin: 0.75rem 0;
  align-self: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  background: var(--grey-900);
  color: var(--grey-100);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    background: var(--grey-700);
  }
`;
