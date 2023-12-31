// ##########################
// CREACION DE FUNTIONS EN JS
// ##########################

// Declaracion de funcion (Funtion Declaration)
function saludar() {
    console.log("Hola")
}

// Expresion de funcion (Funtion Expression)
const saludarV2 = function () {
    console.log("Hola");
}

// Llamado de funcion
saludar() // Hola
saludarV2() // Hola


// #########################
// PARAMETROS EN LA FUNTIONS
// #########################

function sumar(num1, num2) {
    console.log(num1 + num2)
}

sumar(2, 3) // 5
sumar(28, 3) // 31

// Parametros por default
const saludarV3 = function (nombre = "desconocido") {
    console.log(`hola ${nombre}`)
}

saludarV3() // hola desconocido
saludarV3("mario") // hola mario

// ####################################
// ARROW FUNTIONS (FUNCIONES DE FLECHA)
// ####################################
function funcionNormal() {
    console.log("esta es una funcion declarativa")
}

const funcionExpresiva = function () {
    console.log("esta es una funcion expresiva")
}

const funcionDeFlecha = () => {
    console.log("Esta es una arrow funtion")
}

funcionNormal() // esta es una funcion declarativa
funcionExpresiva() // esta es una funcion expresiva
funcionDeFlecha() // Esta es una arrow funtion