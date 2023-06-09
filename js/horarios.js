document.addEventListener("DOMContentLoaded", function () {
    // Obtener la tabla y sus celdas
    var tabla = document.getElementById("citas");
    var celdas = tabla.getElementsByTagName("td");

    // Cargar citas tomadas desde el local storage
    // var citasTomadas = JSON.parse(localStorage.getItem("citasTomadas")) || [];
    var citasTomadas = JSON.parse(localStorage.getItem("DatosRegistro")).citas || [];

    // Marcar las celdas correspondientes a citas tomadas
    for (var i = 0; i < citasTomadas.length; i++) {
        var citaTomada = citasTomadas[i];
        var fila = citaTomada.fila;
        var columna = citaTomada.columna;
        var celda = tabla.rows[fila].cells[columna];
        celda.classList.remove("available");
        celda.classList.add("unavailable");
        celda.innerText = "No disponible";
        celda.removeAttribute("onclick");
    }

    // Asignar evento onclick a las celdas disponibles
    for (var i = 0; i < celdas.length; i++) {
        var celda = celdas[i];
        if (celda.classList.contains("available")) {
            celda.onclick = function () { //en este caso el this es la celda actual a la que estamos haciendo click.
                var fila = this.parentNode.rowIndex;
                var columna = this.cellIndex;
                var lugar = this.parentNode.querySelector("td:nth-child(1)").textContent.trim();
                var doctor = this.parentNode.querySelector("td:nth-child(2)").textContent.trim();
                var fecha = this.parentNode.querySelector("td:nth-child(3)").textContent.trim();
                var hora = this.parentNode.querySelector("td:nth-child(4)").textContent.trim();
                var idCita = this.parentNode.getAttribute("id");
                tomarCita(fila, columna, lugar, doctor, fecha, hora, idCita);
            };
        }
    }

    // Función para tomar una cita
    function tomarCita(fila, columna, lugar, doctor, fecha, hora, idCita) {
        var celda = tabla.rows[fila].cells[columna];
        celda.classList.remove("available");
        celda.classList.add("unavailable");
        celda.removeAttribute("onclick");
        celda.innerText = "No disponible";

        // Guardar la cita tomada en el local storage
        var citaTomada = {
            fila: fila,
            columna: columna,
            lugar: lugar,
            doctor: doctor,
            fecha: fecha,
            hora: hora,
            idCita: idCita
        };
        // citasTomadas.push(citaTomada);
        // localStorage.setItem("citasTomadas", JSON.stringify(citasTomadas));
        let obj = JSON.parse(localStorage.getItem("DatosRegistro"));
        obj.citas.push(citaTomada);
        localStorage.setItem("DatosRegistro", JSON.stringify(obj));
    }
});
