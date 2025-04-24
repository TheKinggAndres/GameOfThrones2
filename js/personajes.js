async function mostrarPersonajes() {
  const app = document.getElementById("app");
  app.innerHTML = "<h2>Personajes</h2>";

  if (personajesGlobal.length === 0) {
    personajesGlobal = await obtenerPersonajes();
  }

  renderizarLista(personajesGlobal);
}
