import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollingCards = (elem) =>
  gsap.to(elem, {
    scrollTrigger: {
      trigger: elem,
      toggleActions: "play resume resume pause",
      start: "top 50%",
      end: "bottom 200px",
      scrub: true,
    },
    duration: 5,
    x: -100,
  });
