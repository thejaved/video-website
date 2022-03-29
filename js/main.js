const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const navContainer = document.querySelector(".nav_container");

openMenu.addEventListener("click", () => {
  navContainer.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  navContainer.classList.remove("active");
});
