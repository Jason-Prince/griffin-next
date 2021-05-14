import styled from 'styled-components';
import Link from 'next/link';
import { Wrapper, Section } from '../components/Home';
import { A, pages, Nav } from '../components/Home/Nav';
import { Hero, HeroText } from '../components/Home/Hero';
import { Clients } from '../components/Home/Clients';
import { Services } from '../components/Home/Services';
import { AboutUs } from '../components/Home/AboutUs';
import { ContactUs } from '../components/Home/ContactUs';
import { Footer } from '../components/Home/Footer';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin);

const pageLink = pages.map((page) => (
  <Link key={page} href={`/${page}`}>
    <A>{page}</A>
  </Link>
));

const LineHorizontal = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  height: 1vw;
  z-index: -1;
  background: ${({ theme }) => theme.palette.tertiary.main};
`;

const cursorAnimation = (comp) => {
  gsap.to(comp, { repeat: -1, opacity: 1, ease: 'Power2.inOut' });
};

const companyNameAnimation = (comp) => {
  gsap.to(comp, {
    opacity: 1,
    duraation: 5,
    text: 'Griffin EnrG Consulting',
  });
};

const heroAnimation = (el) => {};

export default function Home() {
  let cursorRef = useRef(null);
  let companyNameRef = useRef(null);

  useEffect(() => {
    cursorAnimation(cursorRef.current);
    companyNameAnimation(companyNameRef.current);
  }, []);

  return (
    <Wrapper>
      <Nav>
        <Link href={`/`}>
          <A>Home</A>
        </Link>
        {pageLink}
      </Nav>
      <Hero>
        <LineHorizontal></LineHorizontal>
        <HeroText ref={companyNameRef}></HeroText>
      </Hero>
      <Clients>
        <Section>Clients</Section>
      </Clients>
      <Services>
        <Section>Services</Section>
      </Services>
      <AboutUs>
        <Section>AboutUs</Section>
      </AboutUs>
      <ContactUs>
        <Section>ContactUs</Section>
      </ContactUs>
      <Footer>
        <Section>Footer</Section>
      </Footer>
    </Wrapper>
  );
}
