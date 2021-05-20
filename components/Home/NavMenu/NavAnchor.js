import styled from 'styled-components';

const NavAnchor = styled.a`
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

export default NavAnchor;
