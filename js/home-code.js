document.addEventListener("DOMContentLoaded", function() {
  const recuadro = document.getElementById("recuadro");
  const button = document.getElementById("showButton");

  // Función para mostrar/ocultar el recuadro
  function toggleRecuadro() {
    if (recuadro && button) {
      // Obtener la posición del botón
      const rect = button.getBoundingClientRect();

      // Calculamos el margen entre el recuadro y el botón
      const margin = 10;  // Espacio entre el botón y el recuadro

      // Coloca el recuadro justo encima del botón con el borde inferior alineado con la parte superior del botón
      recuadro.style.top = rect.top - recuadro.offsetHeight - margin + "px"; // Posiciona el recuadro encima
      recuadro.style.left = rect.left + (rect.width - recuadro.offsetWidth) / 2 + "px"; // Centra el recuadro horizontalmente

      // Mostrar u ocultar el recuadro
      if (recuadro.style.display === "none" || recuadro.style.display === "") {
        recuadro.style.display = "block";
      } else {
        recuadro.style.display = "none";
      }
    }
  }

  // Asignar el evento de click al botón para mostrar/ocultar el recuadro
  if (button) {
    button.onclick = toggleRecuadro;
  }
});
