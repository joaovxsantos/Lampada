
//variáveis
let img = document.getElementsByTagName("img")[0];
let botoes = document.getElementById("botoes")



function OnOf(event){
    colors[event.target.id]()
}



let colors = {
    "on":  () =>  img.src = "./images/ligada.jpg",
    "off": () => img.src = "./images/desligada.jpg",
    "broken": () => img.src = "./images/quebrada.jpg"
}




botoes.addEventListener("click", OnOf)
img.addEventListener("click", () => {colors.broken()
})