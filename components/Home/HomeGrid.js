import styled from 'styled-components';

const HomeGrid = styled.div`
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, minmax(auto, max-content));
  grid-template-areas:
    'row1'
    'row2'
    'row3'
    'row4'
    'row5'
    'row6';
  justify-content: center;
  overflow: hidden;
`;

export default HomeGrid;
