const botonCarta = document.getElementById("abrirCarta");

botonCarta.addEventListener("click", function () {

    // Indica que carta.html debe iniciar su canción
    sessionStorage.setItem("musicaPagina", "carta");

    window.location.href = "carta.html";

});