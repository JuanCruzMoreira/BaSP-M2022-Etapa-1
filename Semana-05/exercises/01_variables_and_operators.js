console.log('--- EXERCISE 1: VARIABLES AND OPERATORS');

/* Crear dos variables numéricas y utilizar el operador suma para guardar
el valor de la suma de ambos números en una 3er variable. */

console.log('Exercise 1.a:');

var num1 = 17;
var num2 = 25;
var sum = num1 + num2;
console.log('Sum: ' + sum);

// Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('Exercise 1.b:');

var name = 'Juan ';
var surname = 'Moreira';
var fullname = name + surname;
console.log('If name is ' + name + 'and surname is ' + surname + ', fullname is: ' + fullname);

/* Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras
del string) guardando el resultado de la suma en una 3er variable (utilizar length). */

console.log('Exercise 1.c:');

var string1 = 'this string has 26 letters';
var string2 = 'this one has 23 letters';
var sumString = string1.length + string2.length;
console.log('String length sum: ' + sumString);