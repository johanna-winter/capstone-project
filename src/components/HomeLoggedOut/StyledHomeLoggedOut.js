import styled from "styled-components";

export const LoggedOutWrapper = styled.section`
  max-width: 980px;
  margin: 0 auto;
  padding: 2.5rem 1rem 1.5rem;
`;

export const HeaderCard = styled.header`
  margin-bottom: 3rem;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  background: var(--background-400);
  border: none;
  box-shadow: 0 12px 30px rgba(146, 83, 95, 0.2);
`;

export const CardHead = styled.p`
  margin: 0 0 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--primary-300);
`;

export const CardTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-size: 1.8rem;
  line-height: 1.15;
  color: var(--grey-900);

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const CardSubtitle = styled.p`
  margin: 0;
  max-width: 44rem;
  font-size: 1.05rem;
  color: var(--grey-700);
  margin-bottom: 1.5rem;
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.6rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--grey-900);
  background: var(--grey-900);
  color: var(--grey-100);

  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: var(--grey-700);
    border-color: var(--grey-700);
  }
`;

export const FeatureWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  margin-top: 1.25rem;
`;

export const FeatureCard = styled.article`
  grid-column: span 12;
  padding: 1.25rem 1.25rem;
  border-radius: 14px;
  background: var(--background-200);
  box-shadow: 0 12px 30px rgba(146, 83, 95, 0.2);
  margin-bottom: 0.5rem;
  @media (min-width: 760px) {
    grid-column: span 4;
  }
`;

export const FeatureTitle = styled.h2`
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
  color: var(--grey-900);
`;

export const FeatureText = styled.p`
  margin: 0;
  color: var(--grey-700);
`;

export const GuestMessage = styled.p`
  margin: 2rem 0 0;
  color: var(--grey-700);
  max-width: 42rem;

  strong {
    color: var(--grey-900);
  }
`;
