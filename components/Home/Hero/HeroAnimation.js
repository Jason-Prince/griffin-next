import { gsap } from 'gsap/dist/gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin);

const HeroAnimation = (left, right, middle, hideMe, gsapRaise) => {
  let tl = gsap.timeline();
  tl.to(hideMe, { opacity: 1 });
  tl.from(middle, {
    duration: 2,
    yPercent: -400,
    ease: 'elastic.out(1, 0.3)',
  });
  tl.addLabel('join', '-=2');
  tl.from(
    left,
    {
      duration: 2,
      xPercent: -100,
      ease: 'bounce.out',
    },
    'join',
  );
  tl.from(
    right,
    {
      duration: 2,
      xPercent: 100,
      ease: 'bounce.out',
    },
    'join',
  );
  tl.to(
    gsapRaise,
    {
      duration: 2,
      yPercent: -100,
      ease: 'back.out(1.7)',
    },
    '+=1',
  );
  // Widen box
  // tl.to(heroHiddenRef, {
  //   duration: 1,
  //   width: '99vw',
  //   ease: 'power4.inOut',
  // });
  // Make companySVG visable but hidden by box
  // tl.to(heroSVGRef, {
  //   duration: 3,
  //   opacity: 1,
  //   ease: 'power4.inOut',
  // });
  // Bring box down to reveal h1
  // tl.to(heroHiddenRef, {
  //   duration: 1,
  //   y: 110,
  //   ease: 'power4.inOut',
  // });
  // Remove box width
  // tl.to(heroHiddenRef, {
  //   duration: 1,
  //   width: 0,
  //   ease: 'power4.inOut',
  // });
};

export default HeroAnimation;
