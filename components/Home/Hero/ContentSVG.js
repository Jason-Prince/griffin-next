import styled from 'styled-components';

const ContentSVG = styled.svg.attrs({
  viewBox: '0 0 2560.4 306.23',
  preserveAspectRatio: 'none',
  version: '1.1',
})`
  grid-area: svg;
  /* background-color: red; */
  .primary {
    fill: #231f20;
  }
  .secondary {
    fill: #4082a5;
  }
  .tertiary {
    fill: #287a6b;
  }
  .left {
  }
  .right {
  }
  .middle {
  }
  .hideMe {
    opacity: 0;
  }
`;

export default ContentSVG;
