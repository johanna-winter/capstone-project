import styled from "styled-components";

export const LightboxContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  padding: 20px;
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
  width: min(870px, 100%);
  height: min(55vh, 720px);

  @media (min-width: 1200px) {
    height: min(65vh, 640px);
  }

  background: rgba(236, 214, 213, 0.88);
  border-radius: 12px;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export const LightboxHeader = styled.header`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
`;

export const LightboxImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    object-fit: contain;
  }
`;

export const LightboxMedia = styled.figure`
  margin: 0;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const CloseButton = styled.button`
  border: none;
  border-radius: 50px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: grid;
  place-items: center;
  color: inherit;
  background: rgba(255, 255, 255, 0.3);
  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  cursor: pointer;

  display: grid;
  place-items: center;

  background: rgba(255, 255, 255, 0.3);
  color: inherit;

  left: ${(props) => (props.$left ? "12px" : "auto")};
  right: ${(props) => (props.$right ? "12px" : "auto")};

  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }

  @media (max-width: 600px) {
    width: 44px;
    height: 44px;
  }
`;
