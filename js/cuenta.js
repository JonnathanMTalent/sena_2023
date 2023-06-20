document.addEventListener("DOMContentLoaded", function () {
    // Obtener la tabla y sus celdas
    var tabla = document.getElementById("citas");
    var celdas = tabla.getElementsByTagName("td");

    // Cargar datos tomados desde el local storage
    var datos = JSON.parse(localStorage.getItem("DatosRegistro")) || [];
    var cambiarContrasena = document.getElementById("botonContrasena");
    var nuevaContrasena,
        nuevaContrasena2,
        contrasenaValidacion;


    tabla.rows[1].cells[0].innerText = datos.nombres;
    tabla.rows[1].cells[1].innerText = datos.apellidos;
    tabla.rows[1].cells[2].innerText = datos.cedula;
    tabla.rows[1].cells[3].innerText = datos.fecha;
    tabla.rows[1].cells[4].innerText = datos.correo;
    tabla.rows[1].cells[5].innerText = datos.usuario;
    tabla.rows[1].cells[6].innerText = datos.celular;

    cambiarContrasena.addEventListener("click", function () {
        contrasenaValidacion = prompt("Ingrese la contraseña Actual");
        if (contrasenaValidacion === datos.contrasena) {
            nuevaContrasena = prompt("Ingrese la nueva contraseña, mínimo 4 carácteres:");
            if (nuevaContrasena.length > 4) {
                nuevaContrasena2 = prompt("Ingrese nuevamente la nueva contraseña:");
                if (nuevaContrasena === nuevaContrasena2) {
                    datos.contrasena = nuevaContrasena2;
                    localStorage.setItem("DatosRegistro", JSON.stringify(datos));
                    alert("Contraseña cambiada Exitosamente");

                }
            } else {
                alert("La contraseña ingresada no cumple los parámetros");
            }

        } else {
            alert("La contraseña ingresada nó es correcta.")
        }

    })
});




