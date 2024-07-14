async function listarProdutos() {
  const conexion = await fetch("http://localhost:3001/productos");

  const conexionConvertida = conexion.json();
  return conexionConvertida;
}

async function enviarProducto(Nombre, Precio, image) {
  const conexion = await fetch("http://localhost:3001/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Nombre,
      Precio,
      image,
    }),
  });
  const conexionConvertida = conexion.json();
  return conexionConvertida;
}

const deleteProduct = async (id) => {
  try {
    const res = await fetch(`http://localhost:3001/productos/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

export const conexiones = {
  listarProdutos,
  enviarProducto,
  deleteProduct,
};

