import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary_2};
  font-family: 'Montserrat', sans-serif;
`;

export default function Home() {
  return <Title>My page</Title>;
}
