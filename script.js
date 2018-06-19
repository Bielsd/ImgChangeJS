let certo = document.querySelector("#catCerto");
const errado = document.querySelector("#catErrado");
let trocado = false;

function gatoErrado (){
    alert("Gato errado click no outro!");
}



function gatoCerto (tipo){
    alert("Parabens clicou no gato certo");
    if(trocado){
    return;
    }
    
    if(tipo === 'trocado'){
    trocado = true;
    } 
    certo.src = "img/" + tipo + ".jpg";
}


errado.onclick = gatoErrado;
certo.onclick = gatoCerto;






