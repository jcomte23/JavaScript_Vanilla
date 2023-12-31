// ##########################################
// MANEJO DE DATOS EN JS DE FORMA TRADICIONAL
// ##########################################

const nombre = "Javier"
const edad = 25
const ocupacion = "coder"

function saludar(nombre, edad, ocupacion) {
    console.log(`hola, soy ${nombre}, tengo ${edad} años y soy un ${ocupacion}`)
}

saludar(nombre, edad, ocupacion) // 'hola, soy Javier, tengo 25 años y soy un coder' 

// #################################
// MANEJO DE DATOS EN JS CON OBJETOS
// #################################

const persona = {
    nombre: "Javier",
    edad: 25,
    ocupacion: "coder",
    ubicacion: {
        departamento: "Antioquia",
        municipio: "Bello",
        barrio: "Espiritu santo"
    },
    saludar: function() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy un ${this.ocupacion}`;
    }
}

console.log(persona.saludar()) // hola, soy Javier, tengo 25 años y soy un coder

// #########################
// CREACION DE OBJETOS EN JS
// #########################
const objetoBasico1 = new Object();
const objetoBasico2 = {}

console.log(objetoBasico1) // {}
console.log(objetoBasico2) // {}

// ####################################
// MOSTRAR INFORMACION DE OBJETOS EN JS
// ####################################

console.log(persona.nombre) // Javier
console.log(persona['edad']) // 25
console.log(persona.ocupacion) // coder
console.log(persona['ubicacion']['municipio']) // Bello
console.log(persona.ubicacion.barrio) // Espiritu santo
persona.saludar() // hola, soy Javier, tengo 25 años y soy un coder


// ####################################
// ALTERAR INFORMACION DE OBJETOS EN JS
// ####################################

// Modificar datos del objeto
persona.ocupacion = "Desarrollador de software"
console.log(persona.ocupacion) // Desarrollador de software
persona['ocupacion'] = "Desempleado"
console.log(persona.ocupacion) // Desempleado

// Añadir una propiedad de forma simple
persona['pesoKg'] = 80
persona.altura = 1.80

// Añadir una nueva propiedad a un objeto bien esperifico (objeto-llave-objeto con configuracion)
Object.defineProperty(persona, 'cargo', {
    value: 'junior',
    writable: true, // la propiedad es modificable directamente
    enumerable: true, // la propiedad aparesca en bucles
    configurable: true // la propiedad puede ser eliminada y sus atributos pueden ser modificados en bucles
})

// Añadir multiples keys de un solo totaso (objeto a mutar, clave:valor a agregar)
Object.assign(persona, {
    colorOjos: "marrones",
    colorPelo: "mono"
})

// Eliminar valores del objeto de manera contundente
delete persona.colorOjos

// Eliminar valores de mejor manera
persona.colorPelo = undefined // ESTA ES LA MEJOR OPCION


// ##################
// UNIR OBJETOS EN JS
// ##################

const obj1 = {
    a: "uno",
}
const obj2 = {
    b: "dos",
}


const obj3 = {
    a: "uno",
}
const obj4 = {
    b: "dos",
}

// ->opcion uno (se altera uno de los originales)
const sumaObjetos = Object.assign(obj1, obj2)
console.log(obj1) // { a: 'uno', b: 'dos' }
console.log(obj2) // { b: 'dos' }
console.log(sumaObjetos) // { a: 'uno', b: 'dos' }

// ->opcion dos (spray operador: no se altera ninguno de los originales)
const sumaObjetos2 = { ...obj3, ...obj4 }
console.log(obj3) // { a: 'uno' }
console.log(obj4) // { b: 'dos' }
console.log(sumaObjetos2) // { a: 'uno', b: 'dos' }

// ####################################
// EXTRAER INFORMACION DE OBJETOS EN JS
// ####################################

// Forma simple
const nombreCoder = persona.nombre
const edadCoder = persona.edad
console.log(nombreCoder, edadCoder) // "Javier 25"

// ##################################
// DESESTRUCTURACION DE OBJETOS EN JS
// ##################################

// Forma facil
const objetoSimple = {
    id: 1,
    nombreProducto: "jamon",
    precio: 12546
}

const { id, nombreProducto, precio } = objetoSimple

console.log(id) // 1
console.log(nombreProducto) // jamon
console.log(precio) // 12546


// desestructuracion cambiando el nombre de las variables
const {
    nombre: nombreExtraido,
    edad: edadExtraido,
    ubicacion: ubicacionCompletaExtraida,
    ubicacion: { departamento: departamentoExtraido, municipio: municipioExtraido, barrio: barrioExtraido }
} = persona

console.log(nombreExtraido) // Javier
console.log(edadExtraido) // 25
console.log(ubicacionCompletaExtraida) //  { departamento: 'Antioquia', municipio: 'Bello', barrio: 'Espiritu santo' }
console.log(departamentoExtraido) // Antioquia
console.log(municipioExtraido) // Bello
console.log(barrioExtraido) // Espiritu santo

// Desestructurarion de un objeto anidado
const objetoAnidado = {
    id: 1,
    nombreProducto: "jamon",
    precio: 12546,
    fabricacion: {
        año: 1998,
        lote: 45,
        ubicacion: {
            pais: "Colombia",
            departamento: "Antioquia",
            ciudad: "medellin",
            sucursal: {
                id: "alfa",
                director: "marco tulio",
                direccionSucursal: "CR 45 # 45-41"
            }
        }
    }
}

const { 
    id: idProducto, 
    fabricacion: { 
        año, 
        ubicacion: { 
            pais, 
            departamento, 
            sucursal, 
            sucursal: { 
                director, 
                direccionSucursal
            } 
        } 
    } 
} = objetoAnidado

console.log(idProducto) // 1
console.log(año) // 1998
console.log(pais) // Colombia
console.log(departamento) // Antioquia
console.log(sucursal) // { id: "alfa", director: "marco tulio", direcionSucursal: "CR 45 # 45-41" }
console.log(director) // marco tulio
console.log(direccionSucursal) // CR 45 # 45-41


// #########################################
// CONGELAR OBJETOS PARA EVITAR ALTERACIONES
// #########################################

const objCoder = {
    id: 1,
    nombre: "Mario",
    apellido: "Perez"
}

// Congelar un objeto
Object.freeze(objCoder)
console.log(objCoder) // { id: 1, nombre: 'Mario', apellido: 'Perez' }

// Intento de alteracion
objCoder.id = 45
objCoder.nombre = "Javier"
objCoder.edad = 25
delete objCoder.apellido

// El objeto se mantiene igual por que esta congelado, no se puede alterar,agregar o eliminar nada solo leer
console.log(objCoder) // { id: 1, nombre: 'Mario', apellido: 'Perez' }

// Validar si un objeto esta congelado o no lo esta
console.log(Object.isFrozen(persona)) // false
console.log(Object.isFrozen(objCoder)) // true


// sellar un objeto (alternativa para congelar un objeto)
const objCoder2 = {
    id: 2,
    nombre: "Luisa",
    apellido: "Ortiz"
}

// Este forma modificar los atributos ya establezidos,pero no dejar sumar o eliminar atributos
Object.seal(objCoder2)
console.log(Object.isSealed(objCoder2))

// Intento de alteracion
objCoder2.id = 70
objCoder2.nombre = "MARTIN"
delete objCoder2.apellido
objCoder2.edad = 32

// El objeto solo dejo alterar el nombre pero no permitio eliminar la edad o eliminar el apellido
console.log(objCoder2)

// ##############################################
// DESCONGELAR OBJETOS PARA PERMITIR ALTERACIONES
// ##############################################

// descongelar un objeto, aunque mas bien creamos una copia en un nuevo objeto
const coder1 = { ...objCoder }
const coder2 = { ...objCoder2 }
console.log(Object.isFrozen(coder1))  // false
console.log(Object.isSealed(coder2)) // false
console.log(coder1) // { id: 1, nombre: 'Mario', apellido: 'Perez' }
console.log(coder2) // { id: 1, nombre: 'MARTIN', apellido: 'Ortiz' }


// ########################################
// METODOS PARA RECORRER OBJETOS SIN CICLOS
// ########################################

let player = {
    nombre: "Jcomte",
    life: 4,
    limitLife: 10,
    datos: function () {
        console.log(`nombre= ${this.nombre} \nlife= ${this.life} \nlimitLife= ${this.limitLife}`)
    }
}

// Nos devuelve las claves en una lista
console.log(Object.keys(player)) // [ 'nombre', 'life', 'limitLife', 'datos' ]

// Nos devuelve las values en una lista
console.log(Object.values(player)) // [ 'Jcomte', 4, 10, [λ: datos] ]

// Nos convierte el objeto en una matriz
console.log(Object.entries(player))
// [
//   [ 'nombre', 'Jcomte' ],
//   [ 'life', 4 ],
//   [ 'limitLife', 10 ],
//   [ 'datos', [λ: datos] ]
// ]