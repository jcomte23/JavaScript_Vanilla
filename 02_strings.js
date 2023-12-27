// ######################
// DECLARACION DE STRINGS
// ######################

const mensaje1 = "soy un"
const mensaje2 = String("hola")
const mensaje3 = new String("mundo")


// ######################################
// EXTRACCION DE INFORMACION DE UN STRING
// ######################################

// cantidad de caracteres
console.log(mensaje1.length) // 6
console.log(mensaje2.length) // 4
console.log(mensaje3.length) // 5

// extraer un caracter en especial de un string
console.log(mensaje1.charAt(0)) // s
console.log(mensaje1.charAt(1)) // o
console.log(mensaje1.charAt(2)) // y

console.log(mensaje2[0]) // h
console.log(mensaje2[1]) // o
console.log(mensaje2[2]) // l
console.log(mensaje2[3]) // a
console.log(mensaje2[4]) // undefined

console.log(mensaje3.charAt(0)) // m
console.log(mensaje3.charAt(1)) // u
console.log(mensaje3.charAt(2)) // n
console.log(mensaje3.charAt(3)) // d
console.log(mensaje3.charAt(4)) // d

// mostrar strings
console.log("mensaje=", mensaje1, mensaje2, mensaje3) // mensaje= soy un hola [String: 'mundo']
console.log("mensaje=" + mensaje1 + mensaje2 + mensaje3) // mensaje=soy unholamundo
console.log(`mensaje= ${mensaje1}, ${mensaje2} ${mensaje3}`) //mensaje= soy un, hola mundo

// cambiar un string a mayusculas o minusculas
const textoDePrueba1 = "MenSaJe De pruEba"
console.log(textoDePrueba1.toLowerCase()) // mensaje de prueba
console.log(textoDePrueba1.toUpperCase()) // MENSAJE DE PRUEBA

// concatenacion de strings
const primerTexto = "hola"
const segundoTexto = "mundo"
console.log(primerTexto + " " + segundoTexto); // "hola mundo"
console.log(primerTexto, segundoTexto); // "hola mundo"
console.log(primerTexto.concat(segundoTexto)); // "holamundo"
console.log(primerTexto.concat(" ").concat(segundoTexto)); // "hola mundo"


// ##################
// BUSCAR INFORMACION
// ##################

// Devuelven si o no la cadena comienza, termina o contiene una subcadena especificada.
const cadenaPrueba1 = "hola mundo"
console.log(cadenaPrueba1.startsWith("familia")) // false
console.log(cadenaPrueba1.startsWith("hola")) // true
console.log(cadenaPrueba1.includes("mundo")) // true
console.log(cadenaPrueba1.includes("soy")) // false
console.log(cadenaPrueba1.endsWith("lo que sea")) // false
console.log(cadenaPrueba1.endsWith("undo")) // true


// #####################
// ALTERACION DE STRINGS
// #####################

// Remplazar por la primer coincidencia del string
const cadenaPrueba2 = "hola mundo, es un nuevo mundo"
console.log(cadenaPrueba2.replace("mundo", "javier")) // hola javier,  es un nuevo mundo

// Remplazar todas las coincidencias de un string
console.log(cadenaPrueba2.replaceAll("mundo", "javier")); // hola javier, es un nuevo javier

// Alterar un string con una Expresion regular
const planta = "Eucalipto es una gran planta"
console.log(planta.replace(/[aeou]/g, 'i')) // 'Eicilipti is ini grin plinti'

// Repetir un string
const cadenaPrueba8 = "Riwi "
console.log(cadenaPrueba8.repeat(2)) // 'Riwi Riwi'
console.log(cadenaPrueba8.repeat(4)) // 'Riwi Riwi Riwi Riwi'

// limpiar espacios accidentales
const textoDePrueba2 = "   Este es un mensaje de prueba   "
console.log(textoDePrueba2.trim()); // "Este es un mensaje de prueba"
console.log(textoDePrueba2.trimStart()); // "Este es un mensaje de prueba   "
console.log(textoDePrueba2.trimEnd()); // "   Este es un mensaje de prueba"

// relleno de texto para ajustar un formato especifico
const textoDePrueba3 = "123"
console.log(textoDePrueba3.padStart(10, "*")) // '*******123'
console.log(textoDePrueba3.padStart(8, "*")) // '*****123'
console.log(textoDePrueba3.padStart(5, "*")) // '**123'
console.log(textoDePrueba3.padEnd(10, "*")) // '123*******'
console.log(textoDePrueba3.padEnd(8, "*")) // '123*****'
console.log(textoDePrueba3.padEnd(5, "*")) // '123**'


// ####################
// FRAGMENTAR UN STRING
// ####################

// Devuelve un subconjunto de un objeto String.
const cadenaPrueba3 = "En medellin Riwi es un gran centro de formacion"
console.log(cadenaPrueba3.substring(12, 16)) // Riwi
console.log(cadenaPrueba3.substring(12)) // Riwi es un gran centro de formacion

// Extrae una sección de un string y devolver un nuevo string
const cadenaPrueba4 = "Este es un texto de prueba"
console.log(cadenaPrueba4.slice(5)) // es un texto de prueba
console.log(cadenaPrueba4.slice(5, 16)) // es un texto

// Extraer informacion de un string pero desde el final
const cadenaPrueba5 = "los coder puede crear lo que sea"
console.log(cadenaPrueba5.slice(-16)) // crear lo que sea
console.log(cadenaPrueba5.slice(-10, -4)) // lo que

// Dividir un texto en partes (array)
const cadenaPrueba6 = "riwi es bueno"
console.log(cadenaPrueba6.split("")) // [ 'r', 'i', 'w', 'i', ' ', 'e', 's', ' ', 'b', 'u', 'e', 'n', 'o' ]
console.log(cadenaPrueba6.split(" ")) // [ 'riwi', 'es', 'bueno' ]

const cadenaPrueba7 = "88.12.44.124"
console.log(cadenaPrueba7.split(".")) // [ '88', '12', '44', '124' ]

// Dividir un texto en partes con expresion regular
const saldoCuenta="445.788.414,24"
console.log(saldoCuenta.split(/[.,]/)) // [ '445', '788', '414', '24' ]