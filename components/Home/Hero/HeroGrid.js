import styled from 'styled-components';

const HeroGrid = styled.section`
  grid-area: row1;
  height: 100vh;
  margin: 0 5px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'tl tm tr'
    'ml mm mr'
    'bl bm br';
  justify-items: center;
  align-items: center;
`;

export default HeroGrid;
