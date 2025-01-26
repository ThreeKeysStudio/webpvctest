function toggleContactBox() {
  const contactBox = document.getElementById("contact-form");
  const button = document.getElementById("contact-button");

  // Alternar visibilidad del recuadro de contacto
  if (contactBox.classList.contains("hidden") || contactBox.classList.contains("hidden_first") ) {
    contactBox.classList.remove("hidden");
	contactBox.classList.remove("hidden_first");
    contactBox.classList.add("show"); // Añade la clase de animación
  } else {
    contactBox.classList.remove("show");
    contactBox.classList.add("hidden"); // Oculta el recuadro
  }
}
