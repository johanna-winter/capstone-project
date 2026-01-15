import { FooterLinks, FooterWrapper } from "./StyledFooterLoggedOuts";

export default function LoggedOutFooter() {
  return (
    <FooterWrapper>
      <span>© {new Date().getFullYear()} Memory Wall</span>
      <FooterLinks>
        <a href="/login">Login</a>
      </FooterLinks>
    </FooterWrapper>
  );
}
