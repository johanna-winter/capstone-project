import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const EventListGrid = styled.ul`
  padding: 0;
  margin: 1rem 0 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--grey-900);
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

export const ListTitle = styled.h2`
  color: var(--grey-900);
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
