// ######################
// DECLARACION DE NUMBERS
// ######################
const number=4
const decimal=46.5
const legibleNumber=5_000_000

console.log(legibleNumber) // 5000000
console.log(typeof(legibleNumber)) // number

// ##############################
// METODOS PARA MANEJAR UN NUMBER
// ##############################

// validar si un numero es finito o no lo es
console.log(Number.isFinite(42)) // true
console.log(Number.isFinite(551.3)) // true
console.log(Number.isFinite(Infinity)) // false

// validar si un numero es entero o no lo es
console.log(Number.isInteger(5)) // true
console.log(Number.isInteger(4.5)) // false

// validar si un numero es seguro o no lo es
console.log(Number.isSafeInteger(1e15)) // true
console.log(Number.isSafeInteger(1e16)) // false
console.log(Number.isSafeInteger(1e309)) // false

// notacion exponencial(convertir numeros a su valor exponencial, para decir cuantos valores va a tener 
// en la base despues de la coma)
console.log((1.25).toExponential(0)) // 1e+0
console.log((1.25).toExponential(1)) // 1.3e+0
console.log((1.25).toExponential(2)) // 1.25e+0
console.log((1.25).toExponential(3)) // 1.250e+0
console.log((2).toExponential(3)) // 2.000e+0

// notacion punto fijo
console.log((1.25).toFixed(0)) // 1
console.log((1.25).toFixed(1)) // 1.3
console.log((1.25).toFixed(2)) // 1.25
console.log((1.25).toFixed(3)) // 1.250
console.log((2).toFixed(3)) // 2.000

// cambiando precision
console.log((523.75).toPrecision(1)) // 5e+2
console.log((523.75).toPrecision(2)) // 5.2e+2
console.log((523.75).toPrecision(3)) // 524
console.log((523.75).toPrecision(4)) // 523.8
console.log((523.75).toPrecision(5)) // 523.75

// parceo de numeros INT
console.log(Number.parseInt("42")) // 42
console.log(Number.parseInt("42$")) // 42
console.log(Number.parseInt("num. 42")) // NaN
console.log(Number.parseInt("A")) // NaN
console.log(Number.parseInt("")) // NaN
console.log(Number.parseInt("45.67")) // 45
console.log(Number.parseInt("$675")) // NaN
console.log(Number.parseInt("675$")) // 675

// parceo de numeros FLOAT
console.log(Number.parseFloat("42.7")) // 42.7
console.log(Number.parseFloat("42")) // 42
console.log(Number.parseFloat("88.75$")) // 88.75
console.log(Number.parseFloat("$42.7")) // 42

// parcero de numeros a STRING
console.log((56).toString()) // 56
console.log((42.5).toString()) // 42.5
console.log((24).toString(2)) // convierte el numero a binario=> 11000
console.log((26).toString(8)) // convierte el numero a octal=> 32
console.log((245123).toString(16)) // convierte el numero a Hexadecimal=> 3bd83

// ################
// CLASE MATH DE JS
// ################

// obtener el valor absoluto de un numero
console.log(Math.abs(-5)) // 5

// Devuelve el signo del número: 1 positivo, -1 negativo
console.log(Math.sign(8)) // 1
console.log(Math.sign(-34)) // -1

// Devuelve el número e elevado a x que seria un euler number.
console.log(Math.exp(1)) // 2.71828

// obtener el numero mayor entre un grupo de numeros
console.log(Math.max(56,443,66,5)) // 443

// obtener el numero menor entre un grupo de numeros
console.log(Math.min(56,443,66,5)) // 5

// obtener la potencia de un numero
console.log(Math.pow(2,10)) // 1024

// obtener la raiz cuadrada de un numero
console.log(Math.sqrt(2)) // 1.41421...

// obtener el cubo de un numero
console.log(Math.cbrt(2)) // 1.2599....

// obtener numeros random de manera basica
let x = Math.random()
console.log(x) // numero aleatorio con 0.decimales
console.log(x=x*5) // numero aleatorio con muchos decimales
console.log(Math.floor(x)) // genera un numero aleatorio
console.log(Math.floor(Math.random()*5)) // genera un numero aleatorio
console.log(~~(Math.random()*5)) // genera un numero aleatorio

// obtener numero random con un rango establecido (sup-inferior+1)+ inferior
console.log(Math.floor(Math.random()*(30-10+1)+10)) // genera un numero aletorio entre 30 y 10

// redondero natural
console.log(Math.round(3.75)) // 4
console.log(Math.round(3.24)) // 3

// redondero superior
console.log(Math.ceil(3.12)) // 4
console.log(Math.ceil(3.21)) // 4

// redondero inferior
console.log(Math.floor(3.99)) // 3
console.log(Math.floor(3.98)) // 3

// redondeo con precision
console.log(Math.round(3.1236748579)) // 3
console.log(Math.fround(3.1236748579)) // 3.1236...

// truncado solo la parte entera
console.log(Math.trunc(3.75)) // 3
console.log(Math.round(3.75)) // 4
console.log(Math.round(-3.75)) // -4
console.log(Math.trunc(-3.75)) // -3