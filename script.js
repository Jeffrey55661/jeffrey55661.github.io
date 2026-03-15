// PARTICLES CONFIG

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#38bdf8" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#38bdf8",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    },
    modes: {}
  },
  retina_detect: true
});


// PARTICLE PARALLAX ON SCROLL

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const particles = document.getElementById("particles-js");
  particles.style.transform = `translateY(${scrollY * 0.3}px)`;
});


// TYPING EFFECT

const textArray = [
  "Software Developer",
  "Web Developer",
  "Tech Enthusiast"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (index >= textArray.length) index = 0;
  currentText = textArray[index];

  if (!isDeleting) {
    document.getElementById("typing").textContent =
      currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    document.getElementById("typing").textContent =
      currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index++;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);