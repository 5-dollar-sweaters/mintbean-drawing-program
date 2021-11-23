import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollingCards = (elem) =>
  gsap.to(elem, {
    scrollTrigger: {
      trigger: elem,
      toggleActions: "reverse reverse reverse reverse",
      start: "top 50%",
      end: "bottom 200px",
    },
    duration: 5,
    // x: -100,
  });
