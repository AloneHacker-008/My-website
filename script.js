function toggleMenuAndScroll() {
  document.getElementById("slideMenu").classList.toggle("open");
}

function closeMenu() {
  document.getElementById("slideMenu").classList.remove("open");
}

/* Scroll buttons */
function goToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

function goToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

/* Project toggle */
function toggleProject(e) {
  e.stopPropagation();
  const more = document.getElementById("projectMore");
  const short = document.getElementById("projectShort");
  const view = document.getElementById("viewMoreSpan");

  if (more.style.display === "block") {
    more.style.display = "none";
    short.style.display = "block";
    view.style.display = "inline";
  } else {
    more.style.display = "block";
    short.style.display = "none";
    view.style.display = "none";
  }
}

function openProject(e) {
  e.stopPropagation();
  window.open("https://github.com/AloneHacker-008/Bunny-AI", "_blank");
}

/* Typewriter */
const texts = [
  "Ethical Hacker",
  "Python Developer",
  "Cybersecurity Enthusiast",
  "Open Source Learner"
];

let index = 0, char = 0;
const typingEl = document.getElementById("typing");

function typeEffect() {
  if (char < texts[index].length) {
    typingEl.textContent += texts[index][char++];
    setTimeout(typeEffect, 80);
  } else setTimeout(eraseEffect, 1500);
}

function eraseEffect() {
  if (char > 0) {
    typingEl.textContent = texts[index].substring(0, --char);
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 300);
  }
}
typeEffect();
