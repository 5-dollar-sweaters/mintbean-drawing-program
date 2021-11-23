import { gsap } from 'gsap';

export const onClick = (elem) => {
  elem.addEve;
};

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
