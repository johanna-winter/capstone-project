import styled from "styled-components";
import LoginAuthButton from "./Login/LoginAuthButton";

export default function Layout({ children }) {
  return (
    <>
      <Main>
        <Header>
          <Title>Memory Wall</Title>
          <LoginAuthButton />
        </Header>
        {children}
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 80px 1rem 80px 1rem;
  background-color: #ecd6d5;
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 1000;

  background-color: #003f3b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: #ecd6d5;
`;
