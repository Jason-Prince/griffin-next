import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: whitesmoke;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: max-content;
  grid-template-areas:
    'Nav'
    'Hero'
    'Clients'
    'Services'
    'AboutUs'
    'ContactUs'
    'Footer';
  justify-content: center;
  overflow: hidden;
`;

export const Section = styled.section`
  font-family: ${({ theme }) => theme.font.family.p};
  font-size: ${({ theme }) => theme.font.size.p};
`;
