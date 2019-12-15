//Ejercicios con funciones (https://github.com/malerey/Ejercicios-funciones)

//Ejercicios con parámetros
//Ejercicio 1
// Crear una función llamada mostrarNombreCompleto.

// Esta función recibe 2 parámetros: nombre y apellido.

// La función debe mostrar en consola el nombre completo de la persona, concatenando nombre y apellido

// Por ejemplo: si los parámetros son 'Ada' y 'Lovelace', mostrar en consola 'Ada Lovelace'

const mostrarNombreCompleto = (nombre, apellido) => {
  console.log(nombre.concat(" ", apellido));
}

console.log("Datos ingresados: Ada y Lovelace");
mostrarNombreCompleto("Ada", "Lovelace");

// Ejercicio 2
// Crear una funcion llamada sonIguales() que reciba dos parametros.

// La funcion debe mostrar en consola "true" si los parametros son iguales, y "false" si son diferentes.

const sonIguales = (uno, dos) => {
  if (uno === dos) {
    console.log(true);
  }
  else {
    console.log(false);
  }
};

console.log("parámetros: 1 y 5")
sonIguales(1, 5);

console.log("parámetros: 2 y 2")
sonIguales(2, 2);

// Ejercicio 3
// Crear una funcion llamada agregarNumero() que reciba dos parametros: un array y un numero.

// La funcion debe agregar el numero recibido al array, y mostrar el array resultante en consola.

const agregarNumero = (array, num) => {
  array.push(num);
  console.log(array);
}

console.log("Numeros ingresados en el array 3, 5, 12, 21, aparte: 30");
agregarNumero([3, 5, 12, 21], 30);

// Ejercicio 4
// Crear una funcion llamada comprobarPosicion() que reciba dos parametros: un array de strings y un string

// La funcion debe revisar si el string esta incluido dentro del array, y mostrar en consola "true" o "false".

const comprobarPosicion = (array, string) => {
  let result = 0;
  for (let i=0; i<array.length; i++) {
    if (array[i] === string) {
      result += 1;
    }
    else {
      result += 0;
    }
  }
  if (result !== 0) {
  console.log(true);
  }
  else {
    console.log(false);
  }
}
console.log("Array ingresado: sauce, palmera, ciprés, lapacho. Consulta 1= palmera");
comprobarPosicion(["sauce", "palmera", "ciprés", "lapacho"], "palmera");

console.log("Array ingresado: sauce, palmera, ciprés, lapacho. Consulta 2= jacarandá");
comprobarPosicion(["sauce", "palmera", "ciprés", "lapacho"], "jacarandá");

// Ejercicio 5
// Crear una función llamada calcularPromedio()

// La función recibe un único parámetro, del tipo array, con números enteros

// La funcion debe mostrar en consola el promedio entre todos los números que pertenecen al array

const calcularPromedio = (arrayNum) => {
  let suma = 0;
  for (let i=0; i<arrayNum.length; i++) {
    suma += arrayNum[i];
};

console.log(`El promedio de los números ingresados es ${suma / arrayNum.length}`);
}


console.log("Numeros ingresados en el array 5, 5, 5, 5");
calcularPromedio([5, 5, 5, 5]);

console.log("Numeros ingresados en el array 12, 32, 82, 3");
calcularPromedio([12, 32, 82, 3]);


// 2. Ejercicios con return
// Crear una función que se llame obtenerNombre y retorne tu nombre como string

// Probarlo con la siguiente linea de codigo

// console.log("Mi nombre es " + obtenerNombre());

const obtenerNombre = (string) => {
  return string;
}

let miNombre = "Ivana";
console.log(`Mi nombre es ${obtenerNombre(miNombre)}`);

// Ejercicio 2-2
// En el mismo código, crear una función llamada obtenerSaludo, que retorne un valor string

// Dentro de esta función obtener tu nombre utilizando la función obtenerNombre(), y guardarlo en una variable.

// Retornar un texto de la forma: ¡Hola, ${nombre}!, donde nombre tiene que ser el valor guardado en la variable de arriba.

// Ejecutar la función obtenerSaludo y mostrar el resultado por consola.

// console.log(obtenerSaludo());

const obtenerSaludo = (string) => {
  let nombre = obtenerNombre(string);
  return `¡Hola, ${nombre}!`;
}


console.log(obtenerSaludo(miNombre));

// Ejercicio 2-3
// Crear la funcion obtenerResto(a, b) que retorne el resto de dividir a y b.

const obtenerResto = (a, b) => {
  return a % b;
}

console.log("12 y 6");
console.log(obtenerResto(12, 6));

console.log("12 y 8");
console.log(obtenerResto(12, 8));

// Ejercicio 2-4
// Crear la funcion esPar(num) que retorne true si el numero es par, y false si es impar.

// Dentro de esa funcion debe utilizarse lo retornado por la funcion obtenerResto creada en 2.3.

const esPar = (num) => {
  if (num % 2 === 0) {
    return "true";
  }
  else {
    return "false";
  }
}
console.log("Función esPar con parámetro 5")
console.log(esPar(5));
console.log("Función esPar con parámetro 4")
console.log(esPar(4));

// Ejercicio 2-5
// Declarar la siguiente variable:

// const listaDeNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
// Crear una funcion llamada encontrarImpares() que recorre el array recibido por parametros

// y retorna un nuevo array compuesto solo por los numeros impares.

// Para saber si un número es par debe utilizarse la funcion esPar() creada en 2.4.

const listaDeNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];
console.log(`Array tal como se lo declaró: ${listaDeNumeros}`);
let newArray = [];
const encontrarImpares = array => {
  for (let i = 0; i < array.length; i++) {
  if (esPar(array[i]) === "false") {
    newArray.push(array[i]);
  }
}
  return newArray;
}

console.log(`Array con números impares: ${encontrarImpares(listaDeNumeros)}`);


