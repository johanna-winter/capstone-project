import styled from "styled-components";

export const LightboxContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: grid;
  place-items: center;
  padding: 16px;
`;

export const LightboxBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const LightboxCard = styled.section`
  width: min(900px, 100%);
  background: var(--background-300);
  border-radius: 12px;
  padding: 16px;
`;

export const LightboxHeader = styled.header`
  display: flex;
  justify-content: flex-end;
`;

export const LightboxMedia = styled.figure`
  margin: 0;
  display: grid;
  place-items: center;
  gap: 8px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
`;
