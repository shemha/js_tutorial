document
  .getElementById("tunnel")
  .animate(
    [
      { transform: "translate3D(0, 0, 0)" },
      { transform: "translate3D(0, -300px, 0)" },
    ],
    {
      duration: 1000,
      iterations: Infinity,
    }
  );

var aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];

var aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};

document.getElementById("alice").animate(aliceTumbling, aliceTiming);
