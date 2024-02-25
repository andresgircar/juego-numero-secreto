let numeroSecreto;
let numeroIntentos;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroIntentos)
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡¡Acertaste el número en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos'}!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        numeroIntentos++;
        limpiarCampo();
    }
    return;
}

function limpiarCampo() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles, eres un campeón')
    } else {
    // Si el numero generado ya está en la lista
        if(numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        } else {
        //
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }}
    //Si ya sorteamos todos los numeros
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Adivina el número");
    asignarTextoElemento('p', "Elige un número entre 1 y 10");
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //1er paso: limpiar la caja
    limpiarCampo();
    //2do paso: indicar mensaje de instrucciones
    condicionesIniciales();
    //3er paso: deshabilitar botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();