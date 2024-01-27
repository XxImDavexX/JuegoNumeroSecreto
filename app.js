let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;
//console.log(numeroSecreto);
function asignarTextoElemento(elemento,texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
       
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroIntentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos > 1) ? "veces" : "vez"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{

        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero secretro es menor");
            
        }else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }

        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
    
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    }else{

        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;

}
function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de numeros
    condicionesIniciales();
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    //deshabilitar boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");


}

condicionesIniciales();

