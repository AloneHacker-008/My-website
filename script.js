function openMenu() {
  const menu = document.getElementById("slideMenu");
  menu.classList.toggle("open");

  menu.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function closeMenu() {
  document.getElementById("slideMenu").classList.remove("open");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
