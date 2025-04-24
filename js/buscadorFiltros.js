let personajesGlobal = [];

// Función para cargar los personajes
async function cargarPersonajes() {
  personajesGlobal = await obtenerPersonajes(); // usa la función de apiGot.js
  renderizarLista(personajesGlobal);
}

// Función para buscar personajes por nombre
function buscarPersonaje() {
  const input = document.getElementById("buscador").value.toLowerCase();

  if (!input) {
    renderizarLista(personajesGlobal);
    return;
  }

  const filtrados = personajesGlobal.filter(p =>
    p.fullName.toLowerCase().includes(input)
  );

  renderizarLista(filtrados);
}

// Función para filtrar personajes por casa
function filtrarPorCasa() {
  const valor = document.getElementById("filtro").value;

  const filtrados = valor
    ? personajesGlobal.filter(p => p.family && p.family.includes(valor))
    : personajesGlobal;

  renderizarLista(filtrados);
}

// Función para renderizar los personajes en la vista
function renderizarLista(lista) {
  const app = document.getElementById("app");
  app.innerHTML = "<h2>Personajes</h2>";

  const contenedor = document.createElement("div");
  contenedor.classList.add("c-lista");

  lista.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("c-card");
    card.innerHTML = `
      <h3>${p.fullName}</h3>
      <img src="${p.imageUrl}" alt="${p.fullName}">
      <p>${p.title}</p>
      <p><strong>${p.family}</strong></p>
    `;
    contenedor.appendChild(card);
  });

  app.appendChild(contenedor);
}

// Activar búsqueda con Enter
function activarBusquedaConEnter(event) {
  if (event.key === "Enter") {
    buscarPersonaje();
  }
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  cargarPersonajes();

  document.getElementById("buscador").addEventListener("keydown", activarBusquedaConEnter);
  document.getElementById("filtro").addEventListener("change", filtrarPorCasa);
});
