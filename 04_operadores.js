// ####################
// TIPOS DE DATOS EN JS
// ####################

const var1 = 2
const var2 = "2"
const var3 = "hola mundo"
const var4 = true
const var5 = null
const var6 = undefined

console.log(typeof var1) // number
console.log(typeof var2) // string
console.log(typeof var3) // string
console.log(typeof var4) // boolean
console.log(typeof var5) // object
console.log(typeof var6) // undefined


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

// Incrementos de a una unidad
let numeroTemp1 = 2
numeroTemp1++
console.log(numeroTemp1) // 3

// Decrementos de a una unidad
let numeroTemp2 = 5
numeroTemp2--
console.log(numeroTemp2) // 4

// Incrementos de multiples unidades
let numeroTemp3 = 3
numeroTemp3 += 5
console.log(numeroTemp3) // 8

// Decrementos de multiples unidades
let numeroTemp4 = 13
numeroTemp4 -= 4
console.log(numeroTemp4) // 9


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

// Operador (mayor que)
console.log(`¿${NUMERO1} es mayor que ${NUMERO3}? => ${NUMERO1 > NUMERO3}`)
console.log(`¿${NUMERO3} es mayor que ${NUMERO2}? => ${NUMERO3 > NUMERO2}`)

// Operador (menor que)
console.log(`¿${NUMERO1} es menor que ${NUMERO3}? => ${NUMERO1 < NUMERO3}`)

// Operador >= o <=
console.log(`¿${NUMERO1} es mayor o igual que ${NUMERO2}? => ${NUMERO1 >= NUMERO2}`)
console.log(`¿${NUMERO1} es menor o igual que ${NUMERO3}? => ${NUMERO1 <= NUMERO3}`)


// #####################
// OPERADORES DE LOGICOS
// #####################

// Operador AND (&&) 
let estatura = "1.96"
console.log(estatura >= 1.71 && typeof estatura == "string")
console.log(estatura >= 1.71 && typeof estatura == "number")

// Operador OR (||) 
console.log(estatura >= 1.71 || typeof estatura == "number")

// Operador NOT logico (!) 
let variable = true
console.log(variable) // true
console.log(!variable) // false