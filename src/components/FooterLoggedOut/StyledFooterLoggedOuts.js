import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 1.25rem 1rem;
  border-top: 1px solid var(--grey-300);
  color: var(--grey-700);
  font-size: 0.9rem;

  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  margin: 0 auto;
`;

export const FooterLinks = styled.nav`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  a {
    color: var(--grey-700);
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    color: var(--grey-900);
    text-decoration: underline;
  }
`;
