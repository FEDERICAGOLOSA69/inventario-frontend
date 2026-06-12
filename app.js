const API_URL = "https://inventario-backend-959h.onrender.com/productos";

const form = document.getElementById("formProducto");
const tabla = document.getElementById("tablaProductos");

async function cargarProductos() {
    const respuesta = await fetch(API_URL);
    const productos = await respuesta.json();

    tabla.innerHTML = "";

    productos.forEach(producto => {
        tabla.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.existencia}</td>
            </tr>
        `;
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const existencia = document.getElementById("existencia").value;

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            precio,
            existencia
        })
    });

    form.reset();
    cargarProductos();
});

cargarProductos();