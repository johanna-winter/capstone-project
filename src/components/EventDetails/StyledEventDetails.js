import Link from "next/link";
import styled from "styled-components";

export const EventCard = styled.section`
  position: relative;
  background-color: var(--background-400);
  padding: 2.5rem 1.8rem 1.8rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

export const EventLinkText = styled.p`
  font-weight: bold;
`;

export const ShareSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const UploadLink = styled(Link)`
  align-self: center;
  padding: 0.5rem 5rem;
  border-radius: 6px;
  border: 1px solid var(--primary-500);
  background-color: var(--primary-500);
  text-decoration: none;
  color: var(--grey-100);
  &:hover {
    background-color: var(--primary-600);
    color: var(--grey-100);
  }
`;

export const EditButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 7rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  background: var(--grey-900);
  border: 1px solid var(--grey-900);
  border-radius: 6px;
  font-weight: bold;
  color: var(--grey-100);

  &:hover {
    background: var(--grey-700);
  }
`;

export const DeleteButton = styled(EditButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--error-600);
  border: 1px solid var(--error-600);

  &:hover {
    background: var(--error-500);
  }
`;

export const DeleteStatusMessage = styled.p`
  margin: 2rem 0;
  padding: 0.75rem 1rem;
  background-color: var(--error-100);
  border: 1px solid var(--error-600);
  border-radius: 6px;
  color: var(--error-600);
  font-weight: 500;
  text-align: center;
`;

export const CopyLinkButton = styled.button`
  align-self: center;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  border: 1px solid var(--primary-300);
  background: var(--primary-300);
  color: var(--grey-100);
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: var(--primary-500);
  }
`;
