function toggleMenu() {
  document.getElementById("slideMenu").classList.toggle("open");
}

function closeMenu() {
  document.getElementById("slideMenu").classList.remove("open");
}

function scrollToProjects() {
  const btn = document.getElementById("glowBtn");

  btn.classList.add("active");

  setTimeout(() => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth"
    });
    btn.classList.remove("active");
  }, 400);
}
