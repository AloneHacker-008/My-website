/* Menu */
function toggleMenuAndScroll() {
  const menu = document.getElementById("slideMenu");
  const navLinks = document.querySelector('.nav-links');
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    navLinks.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    navLinks.style.display = 'flex';
  }
}

function closeMenu() {
  const menu = document.getElementById("slideMenu");
  const navLinks = document.querySelector('.nav-links');
  menu.classList.remove("open");
  navLinks.style.display = 'flex';
}

/* Scroll buttons with header offset */
function goToProjects() {
  const headerOffset = 60;
  const element = document.getElementById("projects");
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
}

function goToContact() {
  const headerOffset = 60;
  const element = document.getElementById("contact");
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
}

/* Project toggle */
function toggleProject(event) {
  event.stopPropagation();
  const more = document.getElementById("projectMore");
  const short = document.getElementById("projectShort");
  const viewMoreSpan = document.getElementById("viewMoreSpan");
  if (more.style.display === "block") {
    more.style.display = "none";
    short.style.display = "block";
    viewMoreSpan.style.display = "inline";
  } else {
    more.style.display = "block";
    short.style.display = "none";
    viewMoreSpan.style.display = "none";
  }
}

/* Collapse project when clicking outside */
document.addEventListener('click', function(event) {
  const projectBox = document.querySelector('.project-box');
  const more = document.getElementById("projectMore");
  const short = document.getElementById("projectShort");
  const viewMoreSpan = document.getElementById("viewMoreSpan");
  
  if (!projectBox.contains(event.target)) {
    more.style.display = "none";
    short.style.display = "block";
    viewMoreSpan.style.display = "inline";
  }
});

/* Open project GitHub */
function openProject(event) {
  event.stopPropagation();
  window.open("https://github.com/AloneHacker-008/Bunny-AI", "_blank");
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
    setTimeout(eraseEffect, 1400);
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
