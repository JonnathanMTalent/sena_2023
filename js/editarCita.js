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
        celda.classList.remove("unavailable");
        celda.classList.add("available");
        // celda.addAttribute("onclick");
        celda.innerText = "Cancelar cita";
        tabla.rows[fila].cells[columna - 1].innerText = citaTomada.hora;
        tabla.rows[fila].cells[columna - 2].innerText = citaTomada.fecha;
        tabla.rows[fila].cells[columna - 3].innerText = citaTomada.doctor;
        tabla.rows[fila].cells[columna - 4].innerText = citaTomada.lugar;
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
                cancelarCita(fila, columna);
            };
        }
    }

    // Función para tomar una cita
    function cancelarCita(fila, columna) {
        var celda = tabla.rows[fila].cells[columna];
        celda.classList.remove("available");
        celda.classList.add("unavailable");
        celda.removeAttribute("onclick");
        celda.innerText = "Cancelada";
        //filtramos la cita cancelada y modificamos el json  de la local starage
        let obj = JSON.parse(localStorage.getItem("DatosRegistro"));
        obj.citas = obj.citas.filter(elem => elem.fila != fila);
        localStorage.setItem("DatosRegistro", JSON.stringify(obj));
    }
});


// let tablaDinamica = function (lista) {
//     let encabezado = '<table border="1"><tr><th>Titulo del empleo</th><th>Locacion</th><th>Url</th><tr></table>';
//     for (let item of lista) {
//         let fila = "<tr><th>";
//         fila += item.titulo;
//         fila += "</tr>"

//         fila += "<tr>"
//         fila += item.locacion;
//         fila += "</tr>"

//         fila += "<tr>"
//         fila += item.url;
//         fila += "</tr>"
//     }
// }

// let tabla1 = [{ titulo: 'gato', locacion: 'casa', url: 'www.gato.com' }, { titulo: 'gato', locacion: 'casa', url: 'www.gato.com' }];
// tablaDinamica(tabla1);