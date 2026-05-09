function toggleTexto(num) {
    var texto = document.getElementById("texto" + num);

    if (texto.style.display === "none" || texto.style.display === "") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}
