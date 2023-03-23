import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

/* Initialize Lenis */

const lenis = new Lenis({
  touchMultiplier: 10,
  wheelMultiplier: 5,
  duration: 3,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* Initialize GSAP */
gsap.registerPlugin(ScrollTrigger);

/* It's a way to make ScrollTrigger work with Lenis. */
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

console.log(lenis);

/* ================== */

/* Animation */

//main height
const mainHeight = document.querySelector("main").offsetHeight;

// distance between the first card and the top of the container
const firstCardTop = document.querySelector(".card").offsetTop;

gsap.to(".card", {
  y: -firstCardTop,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: `+=${mainHeight}`,
    scrub: true,
    pin: true,
  },
});
