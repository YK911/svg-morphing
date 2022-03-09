const btn = document.getElementById("cta");
const btn2 = document.getElementById("cta2");

btn.onclick = function () {
  const morphing = anime({
    targets: ".polymorph",
    points: [{ value: "215,110 0,110 0,0 47.7,0 67,76" }, { value: "215,110 0,110 0,0 0,0 67,76" }],
    easing: "easeOutQuad",
    duration: 1200,
    perspective: 200,
    loop: false,
  });

  anime({
    targets: "#blip",
    opacity: 1,
    delay: 500,
    duration: 800,
    translateY: 110,
    translateX: 100,
  });

  const promise = morphing.finished.then(() => {
    btn2.onclick = function () {
      const morphing = anime({
        targets: ".polymorph",
        points: [{ value: "215,110 0,110 0,0 47.7,0 67,76" }, { value: "215,110 0,110 0,0 47.7,0 215,0" }],
        easing: "easeOutQuad",
        duration: 1200,
        loop: false,
      });

      anime({
        targets: "#blip",
        opacity: 0,
        duration: 500,
        translateY: -50,
        translateX: -50,
      });
    };
  });
};
