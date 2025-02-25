document.getElementById("toggleButton").addEventListener("click", function() {
    var area = document.getElementById("areaToggle");

    if (area.style.display === "flex") {
        area.style.animation = "toggleEsquerda 0.5s ease-in-out forwards";
        
        setTimeout(function() {
            area.style.display = "none";
        }, 500);
    } else {
        area.style.display = "flex";
        area.style.animation = "toggleDireita 0.5s ease-in-out forwards";
    }
});


document.getElementById("home").addEventListener("click", function() {
    var conteiner = document.getElementById("c-home");

    // Usando transform: translateX() para mover o contêiner
    conteiner.style.transform = "translateX(0%)";
    // this.style.borderBottom = "4px solid #bf4a30";
    console.log("Movendo o contêiner para a página 1.");
});

document.getElementById("chat").addEventListener("click", function() {
    var conteiner = document.getElementById("c-home");

    // Usando transform: translateX() para mover o contêiner para a página 2
    conteiner.style.transform = "translateX(-50%)";
    console.log("Movendo o contêiner para a página 2.");
});
