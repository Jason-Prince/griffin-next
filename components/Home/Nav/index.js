import styled from 'styled-components';

export const pages = [
  'Services',
  'Portfolio',
  'News',
  'About Us',
  'Contact',
];

export const A = styled.a`
  text-decoration: none;
  text-align: center;
  padding: ${({ theme }) => theme.padding.sm};
  margin: ${({ theme }) => theme.margin.sm};
  font-family: ${({ theme }) => theme.font.family.secondary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.tertiary.light};
    border-bottom: 1px solid
      ${({ theme }) => theme.palette.tertiary.light};
  }
`;

export const Nav = styled.div`
  grid-area: Nav;
  margin-top: 5px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: ${({ theme }) => theme.gap.base};
  justify-content: center;
  z-index: 2;
  height: 25px;
`;
