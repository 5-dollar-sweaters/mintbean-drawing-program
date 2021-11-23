import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollingCards = (el) =>
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      toggleActions: "reverse reverse reverse reverse",
      start: "top 50%",
      end: "bottom 200px",
      markers: true,
    },
    duration: 5,
    x: -100,
  });

const tl = gsap.timeline();
export const hiddenText = (elem, elem2, elem3) => {
  tl.fromTo(
    elem,
    { duration: 50, ease: "power1.out", y: "-200px", rotate: "-20" },
    { y: "0px", rotate: 0 }
  )
    .fromTo(
      elem2,
      {
        duration: 50,
        ease: "bounce.out",
        y: "200px",
        rotate: "-20",
      },
      { y: 0, rotate: 0 },
      "-=0.4"
    )
    .fromTo(
      elem3,
      { duration: 50, ease: "power1.in", opacity: 0 },
      { opacity: 1 }
    );
};
