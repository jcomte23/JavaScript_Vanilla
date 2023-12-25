// ######################
// OPERADORES ARITMETICOS
// ######################

const numeroA = 4
const numeroB = 2

// Operador de suma (+)
console.log(numeroA + numeroB) // 6

// Operador de resta (-)
console.log(numeroA - numeroB) // 2

// Operador de multiplicacion (+)
console.log(numeroA * numeroB) // 8

// Operador de división (/)
console.log(numeroA / numeroB) // 6

// Devuelve el residuo de una división
console.log(13 % 5) // 3

// Exponenciacion de 2 numeros
console.log(2 ** 8) // 256

// #########################
// OPERADORES DE COMPARACION
// #########################

const NUMERO1 = 20
const NUMERO2 = "20"
const NUMERO3 = 30

// Comparador de igualdad
console.log(10 == 10) // true
console.log(10 == 14) // false
console.log(2 == "2") // true
console.log(2 === "2") // false
console.log(NUMERO1 == NUMERO2) // true
console.log(NUMERO1 === NUMERO2) // false

// Comparador de desigualdad
console.log(10 != 10) // false
console.log(10 !== 10) // false
console.log(10 !== 14) // true
console.log(2 !== "2") // true
console.log(2 != "2") // false

const PASSSWORD = "Abc123"
const PASSSWORD_CONFIRMATION = "ABC123"

console.log(PASSSWORD !== PASSSWORD_CONFIRMATION) // true

// #####################
// OPERADORES DE LOGICOS
// #####################

//Operador (mayor que)
console.log(`¿${NUMERO1} es mayor que ${NUMERO3}? => ${NUMERO1 > NUMERO3}`)
console.log(`¿${NUMERO3} es mayor que ${NUMERO2}? => ${NUMERO3 > NUMERO2}`)

//Operador (menor que)
console.log(`¿${NUMERO1} es menor que ${NUMERO3}? => ${NUMERO1 < NUMERO3}`)

//Operador >= o <=
console.log(`¿${NUMERO1} es mayor o igual que ${NUMERO2}? => ${NUMERO1 >= NUMERO2}`)
console.log(`¿${NUMERO1} es menor o igual que ${NUMERO3}? => ${NUMERO1 <= NUMERO3}`)

//Null y undefined
let varNull = null
let varUndefined
console.log(typeof varNull)
console.log(typeof varUndefined)
console.log(varNull == varUndefined)
console.log(varNull === varUndefined)

// > o < de forma estricta
let estatura = "1.96"
console.log(estatura >= 1.71 && typeof estatura == "string")
console.log(estatura >= 1.71 && typeof estatura == "number")

// Operador OR || 
console.log(estatura >= 1.71 || typeof estatura == "number")

// #######################
// OPERADORES DE TERNARIOS
// #######################
;(estatura <= 1.65)
    ? console.log("Es una persona bajita")
    : (estatura >= 1.66 && estatura <= 1.75)
        ? console.log("Es una persona dentro del promedio")
        : console.log("Es una persona alta")
if (estatura <= 1.65) {
    console.log("Es una persona bajita")
} else {
    if (estatura >= 1.66 && estatura <= 1.75) {
        console.log("Es una persona dentro del promedio")
    } else {
        console.log("Es una persona alta")
    }
}

//IF normal
if (estatura > 1.90) {
    console.log("Eres una persona muy alta");
}

//IF ternario
estatura > 1.90 ? console.log("Eres una persona muy alta") : null

//EJEMPLO FINAL
const CODER = "Ana"
const EDAD_CODER = 26
const CIUDAD = "Medellin"
const SECTOR = "Palmas"
const EXISTE_METRO = true
const HORA_DESPERTAR = 6
let coder_despierto = true

if (CODER == "Ana" && (CIUDAD == "Medellin" || SECTOR == "Palmas")) {
    if (coder_despierto)
        (HORA_DESPERTAR <= 5)
            ? console.log("Ana tiene tiempo") : console.log("Ana esta apurada de tiempo");

    (HORA_DESPERTAR > 5 || EXISTE_METRO == false)
        ? console.log("Ana debe tomar un UBER")
        : console.log("Ana viaja en metro como siempre lo hace");
} else {
    console.log("El coder no esta registrado");
}