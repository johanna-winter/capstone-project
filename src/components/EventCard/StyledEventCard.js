import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Card = styled.li`
  list-style: none;
  background-color: var(--background-500);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: var(--grey-900);
  display: block;
`;

export const CardImageWrapper = styled.section`
  aspect-ratio: 4 / 3;
  width: 100%;
  overflow: hidden;
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  margin: 0;
  color: var(--grey-900);
  font-size: 1.5rem;
  min-height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
`;

export const DateTag = styled.span`
  background: var(--primary-500);
  color: var(--grey-100);
  padding: 0.4rem 0.7rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid var(--primary-500);
`;
