async function mostrarPersonajes() {
    const app = document.getElementById("app");
    app.innerHTML = "<h2>Personajes</h2>";
  
    const personajes = await obtenerPersonajes();
    const lista = document.createElement("div");
    lista.classList.add("c-lista");
  
    personajes.slice(0, 10).forEach(personaje => {
      const card = document.createElement("div");
      card.classList.add("c-card");
  
      card.innerHTML = `
        <h3>${personaje.fullName}</h3>
        <img src="${personaje.imageUrl}" alt="${personaje.fullName}">
        <p>${personaje.title}</p>
      `;
  
      lista.appendChild(card);
    });
  
    app.appendChild(lista);
  }
  