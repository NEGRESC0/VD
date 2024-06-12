function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let tentativas = 0;
let largura = window.innerWidth -= 382;
let altura = window.innerHeight -= 45;
const texto = document.getElementById("feliz"); 
let loop_count = 0;
let muito = "muito muito muito muito muito muito muito muito muito muito muito muito muito muito";

function ily() {
    console.log("Eu te amo infinitamente muito muito muito muito muito muito")
    while (loop_count < 100) {
        console.log(muito);
        muito += "muito muito muito muito muito muito muito muito muito muito muito muito muito muito";
        loop_count++;
        }
}

function redrct() {
    location.replace("./mWins.html");
}

function mudarposicaoBotao() {
    botao = document.getElementById("no");
    nova_altura = getRndInteger(100, altura) + "px";
    nova_largura = getRndInteger(200, largura) + "px";
    botao.style.top = nova_altura;
    botao.style.left = nova_largura;
    tentativas++;
    console.log(tentativas);
    if (tentativas > 100){
        botao.onmouseover = ily();
        botao.onclick = redrct();
    } else if (tentativas > 90) {
        botao.style.transition = "500ms";
    } else if (tentativas > 80) {
        botao.style.transition = "300ms";
    } else if (tentativas > 70) {
        botao.style.transition = "200ms";
        texto.innerHTML = "Pera... o botão tá cansando??";
    } else if (tentativas > 55) {
        texto.innerHTML = "Meu amor, vc tá determinada msm hein?";
    } else if (tentativas > 40) {
        texto.innerHTML = "To te falando que eu amo maiskkkk";
    }
}
