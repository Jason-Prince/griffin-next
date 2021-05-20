import styled from 'styled-components';

const NavGrid = styled.div`
  grid-area: row1;
  margin-top: 5px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: ${({ theme }) => theme.gap.base};
  justify-content: center;
  z-index: 2;
  height: 25px;
`;

export default NavGrid;
