//////////////////////// load
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

let deg = gsap.utils.random(25, 115);
let deg2 = gsap.utils.random(218, 320);
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
  .to(".center__block", { scale: 5, y: -80, duration: 1.5 }, "-=2.5")

  .fromTo(
    ".center__blockLeft",
    { background: "white)" },
    {
      ease: "none",
      duration: 2,
      background: "linear-gradient(#7F00FF,#f953c6, #b91d73) ",
    },
    "-=2.5"
  )
  .fromTo(
    ".center__blockRight",
    { background: "white)" },
    {
      ease: "none",
      duration: 2,
      background: "linear-gradient(#7F00FF,#FFFFFF) ",
    },
    "-=2.5"
  )
  .to(".center__block", { y: -1000, duration: 3 }, "-=1.5")
  .to(
    ".preload",
    { background: "white", transform: "top", duration: 4 },
    "-=2.5"
  );

function deletePreLoad() {
  let preload = document.querySelector(".preload");
  preload.remove();
}
setTimeout(deletePreLoad, 9000); //9000

//////////////////////// load

gsap
  .timeline()
  .fromTo(
    ".textMaximum",
    { y: 150, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay:9}
  )
  .fromTo(
    ".maximumdisignText",
    { y: 200, x: 500 },
    { x: 500, y: 0, opacity: 1, duration: 2 }
  ).fromTo(
    ".maxDisaindContainer",
    { background: "white"},
    {
      ease: "none",
      duration: 1,
      background: "linear-gradient(to bottom,#bca2e1,#ffffff) ",
    },
    "-=1"
  )
  .fromTo(
    ".lineImgBlack",
    { scaleX: 1, duration: 1, transformOrigin: "right" },
    { opacity: 1, scaleX: 9.7, scaleY: 4, duration: 1 }
  )
  .fromTo(".textOF", { y: 0 }, { x: -440, opacity: 1, duration: 1 }, "-=1")
  .to(".logoYoyo", {duration: 2, y: -10, repeat: -1, yoyo: true})
  
  
  document.body.style.overflow = "hidden";
