gsap.from("header h1", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from("section", {
  duration: 1,
  opacity: 0,
  y: 30,
  stagger: 0.3,
  ease: "power2.out"
});
