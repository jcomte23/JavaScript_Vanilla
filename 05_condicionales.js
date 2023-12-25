// ###################
// CONDICIONALES EN JS
// ###################

// Condicional basica (IF)
if (8 > 5) {
    console.log("8 es mayor que 5") // 8 es mayor que 5
}

// Condicional normal (IF - ELSE)
const helado = 'limon';
if (helado === 'chocolate') {
    console.log('Sí es un helado de chocolate')
} else {
    console.log('No es un helado de chocolate') // No es un helado de chocolate
}

// Condicional avanzado (IF - ELSE IF - ELSE)
const puntaje = -4
if (puntaje === 0) {
    console.log("El puntaje es neutro");
} else if (puntaje < 0) {
    console.log(`El puntaje es negativo ${puntaje}`) // El puntaje es negativo -4
} else if (puntaje > 0) {
    console.log(`El puntaje es positivo ${puntaje}`)
} else {
    console.log(`El puntaje no esta dentro de los parametros`)
}

// Condicional Switch multiples opciones
const numero = 2
switch (numero) {
    case 1:
        console.log(`El numero es UNO`)
        break;
    case 2:
        console.log(`El numero es DOS`) // El numero es DOS
        break;
    case 3:
        console.log(`El numero es TRES`)
        break;
    default:
        console.log(`El numero es NO ES VALIDO`)
        break;
}


// #######################
// OPERADORES DE TERNARIOS
// #######################

const numeroTesteo = 8
// forma tradicional
if (numeroTesteo > 4) {
    console.log(`la condicion se cumplio`) // la condicion se cumplio
}
// forma ternaria
numeroTesteo > 4 ? console.log(`la condicion se cumplio`) : null;


// forma tradicional
const variable = false
if (variable) {
    console.log(`la condicion se cumplio`)
} else {
    console.log(`la condicion NO se cumplio`) // la condicion NO se cumplio
}
// forma ternaria
variable ? console.log(`la condicion se cumplio`) : console.log(`la condicion NO se cumplio`) // la condicion NO se cumplio



// // For loop
// for (let i = 1; i < 11; i++) {
//     if (i % 2 !== 0) {
//         continue
//     }
//     console.log("TABLA DEL " + i);
//     for (let j = 1; j < 10; j++) {
//         console.log(`${j} X ${i} = ${j * i}`)
//     }
//     console.log(" ");
// }

// // For in
// const automovil = {
//     modelo: "2014",
//     motor: "5.0",
//     linea: "camaro",
//     marca: "chevrolet"
// }

// for (let key in automovil) {
//     console.log(key)
//     console.log(automovil.marca)
//     console.log(automovil["modelo"])
// }

// // For in con listas
// const lista = ["uno", "dos", "tres", "cuatro", "cinco", "seis"]

// for (const key in lista) { //obtener indices de la lista
//     console.log(key);
// }

// for (const value of lista) { //obtener valores de la lista
//     console.log(value);
// }

// Do while
// let saldo = 2000000
// let continuar = true

// const MENU = `[1] => Ver saldo
// [2] => Depositar
// [3] => Retirar
// [4] => salir
// Ingrese una opcion
// `
// do {
//     console.log(MENU)
//     let option = Number(prompt(MENU))
//     switch (option) {
//         case 1:
//             alert('Su saldo es => ' + saldo)
//             break
//         case 2:
//             const entrante = Number(prompt(`Ingrese el valor a ingresar`))
//             saldo += entrante
//             break
//         case 3:
//             const saliente = Number(prompt(`Ingrese el valor a retirar`))
//             saldo -= saliente
//             break
//         case 4:
//             continuar = false
//             break
//         default:
//             continuar = false
//             break
//     }
// } while (continuar)