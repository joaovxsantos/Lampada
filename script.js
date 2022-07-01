
//variáveis
let img = document.getElementsByTagName("img")[0];
let ligar = document.getElementsByTagName("button")[0]
let desligar = document.getElementsByTagName("button")[1]

//passando dom para as variáveis
img.addEventListener("mouseover", trade1)
img.addEventListener("mouseout", trade2)
img.addEventListener("dblclick", broke)
ligar.addEventListener("click", trade1)
desligar.addEventListener("click", trade2)




//funçoes para utilizar nas variáveis
function trade1() {
    img.src = "./images/ligada.jpg"
}


function trade2() {
    img.src = "./images/desligada.jpg"
}


function broke() {
    img.src = "./images/quebrada.jpg"

    img.removeEventListener("mouseover", trade1)
    img.removeEventListener("mouseout", trade2)
}