import Link from "next/link";
import styled from "styled-components";

export const DetailsWrapper = styled.main`
  padding: 1rem;
`;

export const EventCard = styled.section`
  background-color: papayawhip;
  padding: 1.8rem;
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
  gap: 0.5rem;
`;

export const UploadLink = styled(Link)`
  align-self: center;
  padding: 0.5rem 5rem;
  border-radius: 6px;
  border: 1px solid #000;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #f9e2bdff;
  }
`;

export const CopyLinkButton = styled.button`
  align-self: center;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #333;
    color: #fff;
  }
`;
