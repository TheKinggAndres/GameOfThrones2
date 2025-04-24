function mostrarInformacion() {
    const app = document.getElementById("app");
    app.innerHTML = "<h2>Información General</h2>";
    app.innerHTML += `
      <p>Bienvenido a la aplicacion sobre la API Game of Thrones.</p>
      <p>Aquí podrás explorar los personajes, casas y más sobre el mundo de Westeros.</p>
    `;

    const imagen = document.createElement("img");
    imagen.src = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Game_of_Thrones.png"; 
    imagen.alt = "Logo Game of Thrones";
    app.appendChild(imagen);

    
  }
  