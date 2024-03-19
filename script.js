const abrir = document.querySelector(".img-menu img");
const fechar = document.querySelector(".fechar img");
const menu = document.querySelector(".menu-mobile");
const seta = document.querySelector(".seta-baixo");
const links = document.querySelector(".links");

seta.addEventListener("click", () => {
  seta.classList.toggle("ativo");
  links.classList.toggle("ativo");
});

abrir.addEventListener("click", () => {
  menu.classList.add("ativo");
});
fechar.addEventListener("click", () => {
  menu.classList.remove("ativo");
});

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && event.target !== abrir) {
    menu.classList.remove("ativo");
  }
});
