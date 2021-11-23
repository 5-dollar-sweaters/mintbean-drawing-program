import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const scrollingCards = (elem) =>
  gsap.to(elem, {
    scrollTrigger: {
      trigger: elem,
      toggleActions: "reverse reverse reverse reverse",
      start: "top 50%",
      end: "bottom 200px",
      scrub: true,
    },
    duration: 5,
    x: -100,
  });

const tl = gsap.timeline();
export const hiddenText = (elem, elem2, elem3) => {
  tl.fromTo(
    elem,
    { ease: "power4.out", y: "-200px", rotate: "-25" },
    { duration: 1, y: "0px", rotate: 0 }
  )
    .fromTo(
      elem2,
      {
        y: "200px",
        rotate: "-25",
      },
      { ease: "power4.out", duration: 1, y: 0, rotate: 0 },
      "-=0.4"
    )
    .fromTo(
      elem3,
      { opacity: 0 },
      { ease: "power1.out", duration: 1.5, opacity: 1 },
      "-=0.5"
    );
};
