function toggleContactBox() {
  const contactBox = document.getElementById("contact-form");
  const button = document.getElementById("contact-button");

  // Alternar visibilidad del recuadro de contacto
  if (contactBox.classList.contains("hidden")) {
    contactBox.classList.remove("hidden");
    contactBox.classList.add("show"); // Añade la clase de animación
  } else {
    contactBox.classList.remove("show");
    contactBox.classList.add("hidden"); // Oculta el recuadro
  }

  // Posicionar el recuadro de contacto justo encima y centrado con el botón
  const buttonRect = button.getBoundingClientRect();
  contactBox.style.top = `${buttonRect.top + window.scrollY - contactBox.offsetHeight}px`;
  contactBox.style.left = `${buttonRect.left + window.scrollX + buttonRect.width / 2 - contactBox.offsetWidth / 2}px`;
}
