import { conexiones } from "./conexionAPI.js";

const lista = document.querySelector("[data-producto]");

function crearCard(id, Nombre, Precio, image) {
  const card = document.createElement("div");
  card.classList.add = "card";
  card.innerHTML = `<div data-producto class="lista-card" >
      <div class="card">
      <div class="imagen_container">
            <img class="imagen_card" src="${image}"/>
                    <div class="card-container--info">
                      <p>${Nombre}</p>
                    </div>
                      <div class="card-container--value">
                        <p> S/.${Precio}</p>
                            <img class="delete_button" src="./assets/delete_icon.svg" />
                           
                      </div>
                    </div>
                  </div>  `;

  const deleteButton = card.querySelector(".delete_button");
  deleteButton.addEventListener("click", () => {
    conexiones
      .deleteProduct(id)
      .then(() => {
        card.remove();
      })
      .catch((err) => console.log(err));
  });

  lista.appendChild(card);
  return card;
}

const product = async () => {
  try {
    const listaProduct = await conexiones.listarProdutos();

    listaProduct.forEach((productos) => {
      lista.appendChild(
        crearCard(
          productos.id,
          productos.Nombre,
          productos.Precio,
          productos.image
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

product();
