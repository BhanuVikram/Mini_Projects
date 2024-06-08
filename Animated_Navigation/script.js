const toggler = document.querySelector(".toggler");
const nav = document.querySelector("nav");

toggler.addEventListener("click", () => {
  nav.classList.toggle("collapsed");
});