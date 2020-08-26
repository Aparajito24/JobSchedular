const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".sidenav");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

document.querySelector(".icon").addEventListener("click", function () {
  document.querySelector("input").classList.toggle("active");
});
