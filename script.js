const menuBar = document.querySelector(".bars");
const sideNav = document.querySelector(".sidenav");
const closeBtn = document.querySelector(".close-btn");
const sideNavItem = document.querySelectorAll("sidenav a");
menuBar.addEventListener("click", () => {
  sideNav.classList.add("is-active");
});
closeBtn.addEventListener("click", () => {
  sideNav.classList.remove("is-active");
});

