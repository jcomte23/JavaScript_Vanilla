// #################################
// CREACION DE ARRAYS O LISTAS EN JS
// #################################

//.... la lista es dinamica y acepta todo tipo de datos
const arrayDeEjemplo = ["cero", true, "dos", 3]
console.log(arrayDeEjemplo) // [ 'cero', true, 'dos', 3 ]

// Formas para crear arrays
const ejemplo1 = new Array("uno", "uno", "tres", "cuatro")
const ejemplo2 = new Array(3)
const ejemplo3 = []

console.log(ejemplo1) // [ 'uno', 'uno', 'tres', 'cuatro' ]
console.log(ejemplo2) // [ , ,  ]
console.log(ejemplo3) // []

// Crear un array a partir de un string
const stringNormal = "Hola mundo"
const arrayConFrom = Array.from(stringNormal)
const arrayConSplit = stringNormal.split("")
console.log(arrayConFrom) // [ 'H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o' ]
console.log(arrayConSplit) // [ 'H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o' ]

// Crear un array a partir de un array pero con modificaciones
const stringConNumeros = "123456789"
const arrayPeroLosDatosEnNumeros = Array.from(stringConNumeros, Number)
console.log(arrayPeroLosDatosEnNumeros) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const stringEjemplo = "JaVieR"
const arrayPeroConTodoEnMinuscula = Array.from(stringEjemplo, letra => letra.toLowerCase())
console.log(arrayPeroConTodoEnMinuscula) // [ 'j', 'a', 'v', 'i', 'e', 'r' ]


// #####################################
// EXTRACCION DE INFORMACION DE UN ARRAY
// #####################################

const arrayDeExtraccion = ["a", "b", "c", "d", "b"]

// tamaño del array
console.log(arrayDeExtraccion.length) // 4

// Obtener un dato del array
console.log(`posicion 0 con [] = ${arrayDeExtraccion[0]}`) // posicion 0 con [] = a
console.log(`posicion 0 con at = ${arrayDeExtraccion.at(0)}`) // posicion 0 con at = a
console.log(`ultima posicion con at = ${arrayDeExtraccion.at(-1)}`) // ultima posicion con at = d
console.log(`penultima posicion con at = ${arrayDeExtraccion.at(-2)}`) // penultima posicion con at = c

// Consultar si un array incluye un elemento
console.log(arrayDeExtraccion.includes("a")) // true
console.log(arrayDeExtraccion.includes("z")) // false

// Consultar si un array incluye un elemento desde x posicion
console.log(arrayDeExtraccion.includes("b")) // true 
console.log(arrayDeExtraccion.includes("b", 2)) // false

// Consultar si un array incluye un elemento, si lo encuentra lo devuelve el indice y si no retorna un -1
console.log(arrayDeExtraccion.indexOf("c")) // 2 
console.log(arrayDeExtraccion.indexOf("z")) // -1

// Lo mismo que el anterior pero desde x posicion
console.log(arrayDeExtraccion.indexOf("c", 3)) // -1 
console.log(arrayDeExtraccion.indexOf("d", 3)) // 3

// Consultar la ultima vez que aparece un elemento en el array
console.log(arrayDeExtraccion.lastIndexOf("b")) // 4 
console.log(arrayDeExtraccion.lastIndexOf("b", 1)) // 1

// Desestructuracion de arrays
const [, segundaPosicion, , cuartaPosicion] = arrayDeExtraccion
console.log(segundaPosicion) // b
console.log(cuartaPosicion) // d

// ############################
// AGREGAR ELEMENTOS A UN ARRAY
// ############################

// agregar elemento al comienzo del array
const arrayOriginalNumerico = [20, 30]
arrayOriginalNumerico.unshift(1)
arrayOriginalNumerico.unshift(2)
console.log(arrayOriginalNumerico) // [ 2, 1, 20, 30 ]

// agregar elemento al final del array
const arrayOriginal = ['a', 'b', 'c']
arrayOriginal.push("d")
arrayOriginal.push("e")
arrayOriginal.push("f")
console.log(arrayOriginal) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


// ##############################
// ELIMINAR ELEMENTOS DE UN ARRAY
// ##############################

// Elimina elemento al inicio
const arrayDeEliminacionInicio = [1, 2, 3, 4, 5]
arrayDeEliminacionInicio.shift()
arrayDeEliminacionInicio.shift()
console.log(arrayDeEliminacionInicio) // [ 3, 4, 5 ]

// Elimina elemento del final
const arrayDeEliminacion = [1, 2, 3, 4, 5]
arrayDeEliminacion.pop()
arrayDeEliminacion.pop()
console.log(arrayDeEliminacion) // [ 1, 2, 3 ]

// ###########
// UNIR ARRAYS
// ###########
const primero = [1, 2]
const segundo = [3, 4]
const tercero = [5, 6]
const arraysUnidos = primero.concat(segundo, tercero, 7, 8)
console.log(arraysUnidos) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// trasformar un array en un string
const arrayBasico = [true, 1, "dos", 3]
const stringDeArray1 = arrayBasico.join(" -> ")
const stringDeArray2 = arrayBasico.join(".")
console.log(stringDeArray1) // 'true -> 1 -> dos -> 3'
console.log(stringDeArray2) // 'true.1.dos.3'


// #############################
// METODOS MAS USADOS CON ARRAYS
// #############################

const coders = [
    {
        id: 1,
        nombre: "javier",
        apellido: "combita",
        cedula: "1096247379"
    },
    {
        id: 2,
        nombre: "maria fernanda",
        apellido: "martines",
        cedula: "27984510"
    },
    {
        id: 3,
        nombre: "lucas",
        apellido: "rojas",
        cedula: "91301583"
    },
    {
        id: 4,
        nombre: "darwing david",
        apellido: "mosquera andrade",
        cedula: "1077478312"
    }
]

// Recorrer todo un array de principio a fin
coders.forEach(element => element.nombre = element.nombre.toUpperCase())

// recorrer todo un array de principio a fin PERO MAP PUEDE CREAR UN NUEVO ARRAY
const newArray = coders.map(element => `nombre => ${element.nombre.toUpperCase()}`)

console.log(newArray)
// [
//   'nombre => JAVIER',
//   'nombre => MARIA FERNANDA',
//   'nombre => LUCAS',
//   'nombre => DARWING DAVID'
// ]





// console.log(coders);
// console.log(nuevaLista);

// //filtrar o buscar un resultado
// console.log(coders.filter(index => index.cedula === "1096247379"))


// //ordenar un array
// console.log(coders.sort((a, b) => a.id - b.id))

// //ordenar un array alfabeticamente
// console.log(coders.sort((a, b) => a.nombre.localeCompare(b.nombre)))