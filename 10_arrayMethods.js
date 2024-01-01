// ###################
// METODOS DE UN ARRAY
// ###################

const arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
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

// ########################################
// VALIDAR SI UN ARRAY CONTIENE UN ELEMENTO
// ########################################

// forma manual
arrayMeses.forEach(mes => {
    if (mes === "Abril") {
        console.log("Abril si esta en el array") // Abril si esta en el array
    }
})

// forma dinamica
if (arrayMeses.includes("Abril")) {
    console.log("Abril si esta en el array") // Abril si esta en el array 
}

// forma dinamica para un array de objetos
let coderEncontrado = coders.some(coder => coder.cedula === "1096247379")

if (coderEncontrado) {
    console.log("el coder esta en el array") // el coder esta en el array
}


// #####################################
// EXTRAER EL INDICE DE NUESTRO ELEMENTO
// #####################################

// forma manual
arrayMeses.forEach((mes, index) => {
    if (mes === "Abril") {
        console.log(`Abril esta en el index = ${index}`) // Abril esta en el index = 3
    }
})

// forma dinamica (si no encuentra el valor, retorna un -1)
const indiceAbril = arrayMeses.findIndex(mes => mes === "Abril")
console.log(`Abril esta en el index = ${indiceAbril}`) // Abril esta en el index = 3

// forma dinamica para un array de objetos
const IndiceJavier = coders.findIndex(coder => coder.nombre === "javier")
console.log(`Javier esta en la posicion ${IndiceJavier}`) // Javier esta en la posicion 0


// ##################################
// EXTRAER UN VALOR REDUCIDO DE ARRAY
// ##################################

const productos = [
    { nombre: "Leche", precio: 2.00, categoria: "Lácteos" },
    { nombre: "Pan", precio: 1.00, categoria: "Panadería" },
    { nombre: "Manzanas", precio: 0.50, categoria: "Frutas" },
    { nombre: "Arroz", precio: 0.75, categoria: "Granos" },
    { nombre: "Jabón", precio: 1.50, categoria: "Higiene" }
]

// forma manual
let totalPrecioProductos = 0
productos.forEach(element => {
    totalPrecioProductos += element.precio
})
console.log(totalPrecioProductos) // 5.75

// forma dinamica
let totalPrecioProductosDinamica = productos.reduce((total, producto) => total + producto.precio, 0)
console.log(totalPrecioProductosDinamica) // 5.75

// ###############
// FILTAR UN ARRAY
// ###############

//filtar todos los productos que valgan menos de 1 dolar
let productosDeBajoPrecio = productos.filter(producto => producto.precio < 1)
console.log(productosDeBajoPrecio)

// ##############################
// BUSCAR UN ELEMENTO EN UN ARRAY
// ##############################

// ambos retornar la primer coincidencia por lo tanto es mejor buscar por un ID unico

// buscar de forma manual
let productoEncontrado = ''
productos.forEach((producto, index) => {
    if (producto.nombre === "Arroz") {
        productoEncontrado = productos[index]
    }
})

productoEncontrado // { nombre: 'Arroz', precio: 0.75, categoria: 'Granos' }

// buscar de forma dinamica
productoEncontrado = productos.find(producto => producto.nombre === "Pan")
console.log(productoEncontrado) // { nombre: 'Pan', precio: 1, categoria: 'Panadería' }

// ###################################
// VALIDAR UN ARRAY DE PRINCIPIO A FIN
// ###################################

// verificar que todos los elementos de un array cumpla una condicion

const verificacion1 = productos.every(producto => producto.precio <= 2)
console.log(verificacion1) // true

const verificacion2 = productos.every(producto => producto.precio === 2)
console.log(verificacion2) // false