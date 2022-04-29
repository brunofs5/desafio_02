var canvas;
var tela;
var dx = 5;
var dy = 5;
var x = 250;
var y = 100;
var WIDTH = 600;
var HEIGHT = 400;


function Desenhar() {
    tela.beginPath();
    tela.fillStyle = "black";
    tela.arc(x, y, 10, 0, Math.PI*2, true);
    tela.fill();
}

function LimparTela() {
    tela.fillStyle = "white";
    tela.strokeStyle = "red";
    tela.beginPath();
    tela.rect(0, 0, WIDTH, HEIGHT);
    tela.closePath();
    tela.fill();
    tela.stroke();
}

function Iniciar() {
    canvas = document.getElementById("canvas");
    tela = canvas.getContext("2d");
    return setInterval(atualizar, 10);
}

function KeyDown(evt){
    switch (evt.keyCode) {
        case 38:  
            if (y - dy > 0){
                y -= dy;
            }
            break;
        case 40:  
            if (y + dy < HEIGHT){
                y += dy;
            }
            break;
        case 37: 
            if (x - dx > 0){
                x -= dx;
            }
            break;
        case 39:  
            if (x + dx < WIDTH){
                x += dx;
            }
            break;
    }
}

function atualizar() {
    LimparTela();    
    Desenhar();
}
window.addEventListener('keydown', KeyDown, true);
Iniciar();
