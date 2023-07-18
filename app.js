const toggleMenu = () => {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
};

const navbarToggle = document.getElementById("navbar-toggle");
navbarToggle.addEventListener("change", toggleMenu);
