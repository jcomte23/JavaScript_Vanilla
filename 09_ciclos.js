// #########
// CICLO FOR
// #########

for (let index = 0; index < 10; index++) {
    console.log(index) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

// break en ciclos for
for (let index = 0; index < 10; index++) {
    console.log(index) // 0, 1, 2, 3, 4, 5
    if (index === 5) {
        break
    }
}

// continue en ciclos for
for (let index = 0; index < 10; index++) {
    console.log(index) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    if (index === 5) {
        console.log("llegaste a la mitad") // llegaste a la mitad
        continue
    }
}

// ###################
// EJERCICIO FIZZ BUZZ
// ###################

// si un numero es multiplo de 3 imprimir fizz
// si un numero es multiplo de 5 imprimir buzz
// si un numero es multiplo de ambon imprimir fizz buzz

for (let index = 0; index < 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log(index, "-> fizz buzz");
    } else {
        if (index % 3 === 0) {
            console.log(index, "-> fizz");
        }
        if (index % 5 === 0) {
            console.log(index, "-> buzz");
        }
    }
}


// ###########
// CICLO WHILE
// ###########

let i = 0
while (i <= 10) {
    console.log(i) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    i++
}


// ##############
// CICLO DO WHILE
// ##############
let j = 0
do {
    console.log(j) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    j++
} while (j < 10);


// ##############
// CICLO FOR EACH
// ##############

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numeros.forEach(element => {
    console.log(element * 2) // 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
});


// ############
// CICLO FOR IN
// ############

let frutas = ["mango", "fresa", "naranja", "pera"]

//obtener los indices de una lista
for (const key in frutas) {
    console.log(key) // '0', '1', '2', '3'
    console.log(Number(key)) // 0, 1, 2, 3
}

//obtener los valores de una lista
for (const value of frutas) {
    console.log(value) // 'mango', 'fresa', 'naranja', 'pera'
}