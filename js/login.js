setTimeout(() => {
    var EyeIcon = document.querySelector("body > div > div > form > div > span");
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
}, 30);





function validar() {
    var usuario = document.getElementById("Correo").value;
    var contrasena = document.getElementById("contrasena").value;

    var contraseñasDeBD = [
        { usuario: "Diana Marcela", contrasena: "1234" },
        { usuario: "JonnathanM", contrasena: "7777" },
        { usuario: "Brian", contrasena: "4517" }
    ];

    var Cencontradas = contraseñasDeBD.filter(function(contrasenas) {
        return contrasenas.usuario === usuario && contrasenas.contrasena === contrasena;
    });

    // Si las contrasenas son válidas, redirecciona a otra página
    if (Cencontradas.length > 0) {
        alert("Bienvenid@, "+usuario);
        window.location.href = "../html/inicio.html";
    } else {
        // Si las contrasenas no son válidas, disminuye el contador de intentos
        var intentosRestantes = document.getElementById("intentosRestantes");
        intentosRestantes.innerHTML--;
        // Si se acabaron los intentos, deshabilita el botón de enviar
        if (intentosRestantes.innerHTML == 0) {
            alert("Sobrepasaste los 3 intentos permitidos. Intente de nuevo más tarde.");
            document.getElementById("iniciarSesion").disabled = true;
        } else {
            alert("contraseña inválida. Intentos restantes: " + intentosRestantes.innerHTML);
        }
    }
}











