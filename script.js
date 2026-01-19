// Typing Animation
const text = "SDET (Software Development Engineer in Test)";
let index = 0;
const element = document.querySelector(".typing");
element.textContent = "";

function typeEffect() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Scroll Animation
const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

/* Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggleBtn.textContent =
      document.body.classList.contains("light") ? "🌞" : "🌙";
  })
  
}); */

// GSAP Hero Animations
gsap.from(".hero h1", {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero h2", {
  opacity: 0,
  delay: 1,
  duration: 1
});

// Modal
function openModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("modal-hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("modal-hidden");
  modal.setAttribute("aria-hidden", "true");
}
