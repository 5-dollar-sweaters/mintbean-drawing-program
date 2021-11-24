import { gsap } from 'gsap';

const tl = gsap.timeline();
export const hiddenText = (elem, elem2, elem3) => {
  tl.fromTo(
    elem,
    { ease: 'power4.out', y: '-200px', rotate: '-25' },
    { duration: 1, y: '0px', rotate: 0 }
  )
    .fromTo(
      elem2,
      {
        y: '200px',
        rotate: '-25',
      },
      { ease: 'power4.out', duration: 1, y: 0, rotate: 0 },
      '-=0.4'
    )
    .fromTo(
      elem3,
      { opacity: 0 },
      { ease: 'power1.out', duration: 1.5, opacity: 1 },
      '-=0.5'
    );
};

const tl2 = gsap.timeline();
export const buttonColor = (button, button2) => {
  tl2
    .to(button2, {
      backgroundColor: '#1D4ED8',
      borderColor: '#1D4ED8',
    })
    .fromTo(
      button,
      { y: 0, color: 'white' },
      { duration: 1, ease: 'power1.in', y: -50 },
      '-=0.5'
    )
    .to(button2, { opacity: 0 }, '-=0.8');
};

export const hoverText = (hover) => {
  gsap.fromTo(hover, { scale: 1 }, { scale: 1.1 });
};
