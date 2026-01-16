import styled from "styled-components";

export const LightboxContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
`;

export const LightboxBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 0;
`;

export const LightboxCard = styled.section`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);

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
