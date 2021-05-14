import styled from 'styled-components';

export const Hero = styled.section`
  grid-area: NavHero;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  height: 100vh;
`;

export const HeroText = styled.h1`
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size.plus16};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  opacity: 0;
`;
