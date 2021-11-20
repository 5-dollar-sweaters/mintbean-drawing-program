import gsap from "gsap";

export const entrance = (elem) =>
  gsap.from(elem, { duration: 1, ease: "power2.out", x: -500 });

export const buttonSlide = (elem) =>
  gsap.from(elem, { duration: 1, ease: "bounce1.out", x: -50 });
