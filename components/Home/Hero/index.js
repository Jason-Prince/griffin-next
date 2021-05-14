import styled from 'styled-components';

export const Hero = styled.section`
  grid-area: 1 / 1 /2 /2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  height: 100vh;
`;

export const Box = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: inline-block;
  border-top: 1px solid ${({ theme }) => theme.palette.tertiary.main};
  height: 110px;
  background-color: whitesmoke;
  z-index: 10;
`;

export const CompanySvg = styled.svg.attrs({
  viewBox: '0 0 2560.4 306.23',
})`
  grid-area: 1 / 1 / 2 / 2;
  width: 90vw;
  opacity: 0;
  .cls-1 {
    fill: #231f20;
  }
  .cls-2 {
    fill: #4082a5;
  }
  .cls-3 {
    fill: #287a6b;
  }
`;
