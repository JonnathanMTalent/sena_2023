// alert("Esta funcionando");
document.addEventListener("DOMContentLoaded", (e) => {
    var EyeIcon = document.querySelector("span.icon-eye");
    EyeIcon.addEventListener("click", function () {
        const icon = this.querySelector("x");
        if (this.nextElementSibling.type === "password") {
            this.nextElementSibling.type = "text";
            icon.classList.remove("bi-eye-slash-fill")
            icon.classList.add("bi-eye-fill")
        } else {
            icon.classList.remove("bi-eye-fill")
            icon.classList.add("bi-eye-slash-fill")
            this.nextElementSibling.type = "password"
        }
    });
})

// document.querySelector('form')
//     .addEventListener('submit', e => {
//         e.preventDefault()
//     })

// function StringsVacios(obj) {
//     for (let i = 0; i < values(obj).length; i++) {
//         if (values(obj)[i] === "") {

//             return false;
//         } else {
//             return true;
//         }
//     }
// }

function getData(objDatosRegistro) {
    // for (a of values(objDatosRegistro)) {
    //     if (a == "") {
    //         guardar = false;
    //     }
    // }
    document.querySelector('form')
        .addEventListener('submit', e => {
            e.preventDefault()
        })

    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var fecha = document.getElementById("fecha").value;
    var celular = document.getElementById("celular").value;
    var cedula = document.getElementById("cedula").value;
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    //validacion para que no ingresen campos vacios.
    let guardar = true;
    if (nombres == "" || apellidos == "" || correo == "" || fecha == "" || celular == "" || cedula == "" || usuario == "" || contrasena == "") guardar = false;
    // en este objeto llevamos los datos para simular una base de datos
    var objDatosRegistro = {
        nombres: nombres,
        apellidos: apellidos,
        fecha: fecha,
        celular: celular,
        cedula: cedula,
        correo: correo,
        usuario: usuario,
        contrasena: contrasena,
        citas: []
    };

    // let guardar = StringsVacios(objDatosRegistro);


    if (guardar == true) {
        alert(`Datos ingresados correctamente: 
        Nombre: ${objDatosRegistro.nombres}
        Apellidos: ${objDatosRegistro.apellidos}
        Cédula:${objDatosRegistro.cedula}
        Fecha: ${objDatosRegistro.fecha}
        Correo: ${objDatosRegistro.correo}
        Celular:${objDatosRegistro.celular}
        Usuario:${objDatosRegistro.usuario}
             `);
        // convertimos el obj en cadena json
        var jsonData = JSON.stringify(objDatosRegistro);
        console.log(jsonData);
        //guardamos en el local storage:
        localStorage.setItem("DatosRegistro", jsonData);
        window.location.href = "../html/login.html"
    } else {
        alert("No puede haber campos vacios");
    }
};




// function getData() {
//     document.querySelector('form')
//         .addEventListener('submit', e => {
//             e.preventDefault()
//             const data = Object.fromEntries(
//                 new FormData(e.target)
//             )
//             alert(JSON.stringify(data))
//         })
// }

