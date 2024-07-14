import { conexiones } from "./conexionAPI.js";

const formulario = document.querySelector("[data-form]");

async function crearProducto(evento) {
  evento.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  await conexiones.enviarProducto(name, price, image);
}

formulario.addEventListener("submit", (evento) => crearProducto(evento));
