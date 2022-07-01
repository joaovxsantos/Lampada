let img = document.getElementsByTagName("img")[0];
let ligar = document.getElementsByTagName("button")[0]
let desligar = document.getElementsByTagName("button")[1]

img.addEventListener("mouseover", trade1)
img.addEventListener("mouseout", trade2)
ligar.addEventListener("click", trade1)
desligar.addEventListener("click", trade2)




function trade1(){
    img.src = "./images/on.png"
}


function trade2(){
    img.src = "./images/off.png"
}

