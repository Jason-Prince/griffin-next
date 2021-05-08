import styled from 'styled-components';
import Link from 'next/link';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

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
const P = styled.p`
  font-family: ${({ theme }) => theme.font.family.p};
  font-size: ${({ theme }) => theme.font.size.p};
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

export const myAnimation = (comp) => {
  gsap.to(comp, {
    duration: 1,
    ease: 'expo',
    y: -20,
    opacity: 1,
  });
};

export default function Home() {
  let ref = useRef(null);

  useEffect(() => {
    myAnimation(ref.current);
  }, [ref]);

  return (
    <Wrapper>
      <Nav>{pageLink}</Nav>
      <Hero>
        <P ref={ref}>Hero</P>
      </Hero>
      <Clients>
        <P>Clients</P>
      </Clients>
      <Services>
        <P>Services</P>
      </Services>
      <AboutUs>
        <P>AboutUs</P>
      </AboutUs>
      <ContactUs>
        <P>ContactUs</P>
      </ContactUs>
      <Footer>
        <P>Footer</P>
      </Footer>
    </Wrapper>
  );
}
