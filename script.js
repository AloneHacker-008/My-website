/* Menu */
function toggleMenu() {
  document.getElementById("slideMenu").classList.toggle("open");
}

function closeMenu() {
  document.getElementById("slideMenu").classList.remove("open");
}

/* Scroll */
function goToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

function goToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function openProject(url) {
  window.open(url, "_blank");
}

/* Typewriter */
const texts = [
  "Ethical Hacker",
  "Python Developer",
  "Cybersecurity Enthusiast",
  "Open Source Learner"
];

let index = 0;
let char = 0;
const typingEl = document.getElementById("typing");

function typeEffect() {
  if (char < texts[index].length) {
    typingEl.textContent += texts[index].charAt(char);
    char++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (char > 0) {
    typingEl.textContent = texts[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();
