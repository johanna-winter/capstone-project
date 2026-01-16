import styled from "styled-components";
import LoginAuthButton from "./Login/LoginAuthButton";
import { useSession } from "next-auth/react";
import LoggedOutFooter from "./FooterLoggedOut/FooterLoggedOut";
import Link from "next/link";

export default function Layout({ children }) {
  const { status } = useSession();

  return (
    <PageWrapper>
      <Main>
        <Header>
          <HeaderNav>
            <TitleLink href="/">
              <Title>Memory Wall</Title>
            </TitleLink>
            <AuthArea>
              {status === "authenticated" && <LoginAuthButton />}
            </AuthArea>
          </HeaderNav>
        </Header>
        {children}
      </Main>
      {status !== "authenticated" && <LoggedOutFooter />}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding: 80px 1rem 1rem;

  @media (min-width: 421px) {
    padding-top: 80px;
  }
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: var(--primary-500);
`;

export const HeaderNav = styled.nav`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

export const TitleLink = styled(Link)`
  grid-column: 2;
  justify-self: center;
  text-decoration: none;
  color: inherit;
  display: inline-block;

  @media (max-width: 520px) {
    grid-column: 1;
    justify-self: start;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.2rem;
  color: var(--background-300);
  white-space: nowrap;

  @media (max-width: 520px) {
    font-size: 1.9rem;
  }
  @media (max-width: 360px) {
    font-size: 1.7rem;
  }
`;

const AuthArea = styled.div`
  grid-column: 3;
  justify-self: end;
`;
