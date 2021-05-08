import styled from 'styled-components';
import Link from 'next/link';

const pages = [
  'Home',
  'Services',
  'Portfolio',
  'News',
  'About Us',
  'Contact',
];

const A = styled.a`
  text-decoration: none;
  text-align: center;
  padding: ${({ theme }) => theme.padding.sm};
  margin: ${({ theme }) => theme.margin.sm};
  font-family: ${({ theme }) => theme.font.family.h};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.tertiary.light};
    border-bottom: 1px solid
      ${({ theme }) => theme.palette.tertiary.light};
  }
`;

const pageLink = pages.map((page) => (
  <Link href={`/${page}`}>
    <A>{page}</A>
  </Link>
));

const Wrapper = styled.div`
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
`;

const Nav = styled.div`
  grid-area: Nav;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: ${({ theme }) => theme.gap.sm};
  justify-content: center;
`;

const Hero = styled.div`
  grid-area: Hero;
`;

const Clients = styled.div`
  grid-area: Clients;
`;

const Services = styled.div`
  grid-area: Services;
`;

const AboutUs = styled.div`
  grid-area: AboutUs;
`;

const ContactUs = styled.div`
  grid-area: ContactUs;
`;

const Footer = styled.div`
  grid-area: Footer;
`;

export default function Home() {
  return (
    <Wrapper>
      <Nav>{pageLink}</Nav>
      <Hero>Hero</Hero>
      <Clients>Clients</Clients>
      <Services>Services</Services>
      <AboutUs>AboutUs</AboutUs>
      <ContactUs>ContactUs</ContactUs>
      <Footer>Footer</Footer>
    </Wrapper>
  );
}
