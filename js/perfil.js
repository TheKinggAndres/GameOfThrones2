function mostrarUsuario() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  // Establecer la imagen de fondo en toda la pantalla
  app.style.backgroundImage = "url('https://i.pinimg.com/736x/ac/3b/a9/ac3ba956df0dbd89798da01fbb955ea9.jpg')"; // Reemplaza con la URL de tu imagen
  app.style.backgroundSize = "cover"; // Asegura que la imagen cubra toda la pantalla
  app.style.backgroundPosition = "center"; // Centra la imagen
  app.style.backgroundAttachment = "fixed"; // Fija la imagen para que no se desplace al hacer scroll

  const titulo = document.createElement("h2");
  titulo.textContent = "Game of Thrones API";
  app.appendChild(titulo);

  const imagen = document.createElement("img");
  imagen.src = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Logo_Game_of_Thrones.png";
  imagen.alt = "Logo Game of Thrones";
  app.appendChild(imagen);

  const descripcion = document.createElement("p");
  descripcion.textContent = "Explora los personajes de Game of Thrones usando la ThronesAPI.";
  descripcion.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; // Fondo oscuro semi-transparente para que el texto sea legible
  descripcion.style.padding = "20px";
  descripcion.style.borderRadius = "10px";
  descripcion.style.color = "#fff";
  descripcion.style.maxWidth = "80%";
  descripcion.style.margin = "20px auto";
  app.appendChild(descripcion);

  const github = document.createElement("p");
  github.innerHTML = 'GitHub: <a href="https://github.com/TheKinggAndres" target="_blank">@TheKinggAndres</a>';
  app.appendChild(github);

  const nombre = document.createElement("footer");
  nombre.textContent = "Creado por: Andres Puentes";
  app.appendChild(nombre);
}
