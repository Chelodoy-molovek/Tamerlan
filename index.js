gsap.fromTo(
  ".center__blocksStyle",
  { transformOrigin: "bottom", scaleY: 0 },
  { scaleY: 1, opacity: 1, duration: 2, delay: 1 }
);
gsap.fromTo(".timer", { y: 200 }, { y: -10, duration: 1 });
gsap.fromTo(".timer", { y: -10 }, { y: -600, duration: 2, delay: 1 });

let timer = document.querySelector(".timer");
let timerFor;
function timerCount() {
  let sec = 0;
  timerFor = setInterval(() => {
    if (sec == 100) {
      clearInterval(timerFor);
    }
    timer.innerHTML = sec;
    sec++;
  }, 16);
}

let displNoneTimer = document.querySelector(".timer");
function dispNone() {
  displNoneTimer.style.display = "none";
}
setTimeout(dispNone, 4000);
setTimeout(timerCount, 1000);

gsap.to(".timer", { y: -700, duration: 0.7, delay: 3 });

gsap.fromTo(
  ".loadTextLeft",
  { y: 200 },
  { y: 0, opacity: 1, duration: 0.5, delay: 4 }
);
gsap.fromTo(
  ".loadTextRight",
  { y: 200 },
  { y: 0, opacity: 1, duration: 1, delay: 4 }
);

// gsap.fromTo(
//   ".lineImg",
//   { scaleX: 1, duration: 1,transformOrigin: "right"},
//   { opacity: 1, scaleX: 20, duration: 1, delay: 4.5 }
// );
gsap
  .timeline()
  .fromTo(
    ".lineImg",
    { scaleX: 1, duration: 1, transformOrigin: "right" },
    { opacity: 1, scaleX: 20, duration: 1, delay: 4.5 }
  )
  .fromTo(".loadTextLeft", { x: 0 }, { x: -410, duration: 1 }, "-=1")
  .to(".lineImg", { scaleX: 0, duration: 0.6 })
  .to(".centerLoadText", { y: -200, duration: 2 })
  .to(".center__block", { scale: 5, y: -80, duration: 2 }, "-=2.5")
  .fromTo(
    ".center__blockLeft",
    { backgroundColor: "white"},
    { transformOrigin: "bottom", backgroundColor: "#FC5C7D", duration: 1 },
    "-=2"
  )
  .fromTo(
    ".center__blockRight",
    { backgroundColor: "white" },
    { transformOrigin: "bottom", backgroundColor: "#6A82FB", duration: 1 },
    "-=2"
  );
