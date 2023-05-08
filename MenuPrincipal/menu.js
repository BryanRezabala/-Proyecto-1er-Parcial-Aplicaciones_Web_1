function cerrarSesion() {
    if (confirm("¿Está seguro de que desea cerrar sesión?")) {
      alert("Sesión cerrada");
      window.location="file:///C:/Users/Home/Desktop/proyecto/index.html";
    } else {
      alert("No se cerrará la sesión");
    }
  }