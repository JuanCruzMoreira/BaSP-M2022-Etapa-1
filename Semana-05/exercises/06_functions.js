console.log('--- EXERCISE 6: FUNCTIONS');

/* Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la 
función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola 
del navegador. */

console.log('Exercise 6.a:');

function sum(num1, num2) {
  return num1 + num2;
}

var rSum = sum(6, 2);
console.log('Sum: ' + rSum); // 8

/* A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros 
no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar 
el valor NaN como resultado. */

console.log('Exercise 6.b:');

function sum(num1, num2) {
  
  if (typeof(num1) != 'number' || typeof(num2) != 'number') {
    alert('One (or both) parameter(s) is not a number!'); 
    return NaN;
  } 
  return num1 + num2;
}

var rSum = sum(17, 5);
var sumString = sum(8, 'n');
console.log('Sum: ' + rSum); // 22
console.log('Sum with a string parameter: ' + sumString); //NaN

/* Crear una función validate integer que reciba un número como parámetro y devuelva verdadero 
si es un número entero. */

console.log('Exercise 6.c:');

function validateInteger (number){
  return number === Math.floor(number);
}

var int = validateInteger(2);
var notInt = validateInteger(13.567);
console.log('Integer parameter: ' + int); //true
console.log('Float paramter: ' + notInt); //false

/* A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean 
enteros. En caso que haya decimales mostrar un alerta con el error y retorna 
el número convertido a entero (redondeado). */

console.log('Exercise 6.d:');

function sum(num1, num2) {
  
  if (typeof(num1) != 'number' || typeof(num2) != 'number') {
    alert('One (or both) parameter(s) is not a number!'); 
    return NaN;
  } 
  if (!validateInteger(num1)) {
    alert('First parameter is not an integer');
    num1 = Math.floor(num1);
  }
  if (!validateInteger(num2)) {
    alert('Second parameter is not an integer');
    num2 = Math.floor(num2);
  }
  return num1 + num2;
}

var rSum = sum(9, 14);
var sumString = sum(8, 'n');
var sumOneFloat = sum(30, 3.7);
var sumTwoFloats = sum(7.3, 8.9);
console.log('Sum: ' + rSum); // 23
console.log('Sum with a string parameter: ' + sumString); // NaN
console.log('Sum with one float parameter: ' + sumOneFloat); // 33
console.log('Sum with two float parameters: ' + sumTwoFloats); // 15

/* Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la 
función suma probando que todo siga funcionando igual. */

console.log('Exercise 6.e:');

function integerValidator (number) {
  if (!validateInteger(number)) {
    alert('A parameter is not an integer');
    number = Math.floor(number);
  }
  return number;
}
function sum(num1, num2) {
  
  if (typeof(num1) != 'number' || typeof(num2) != 'number') {
    alert('One (or both) parameter(s) is not a number!'); 
    return NaN;
  } 
  num1 = integerValidator(num1);
  num2 = integerValidator(num2);

  return num1 + num2;
}

var rSum = sum(9, 12);
var sumString = sum(18, 'd');
var sumOneFloat = sum(10, 3.1);
var sumTwoFloats = sum(3.2, 1.9);
console.log('Sum: ' + rSum); // 21
console.log('Sum with a string parameter: ' + sumString); //NaN
console.log('Sum with one float parameter: ' + sumOneFloat); // 13
console.log('Sum with two float parameters: ' + sumTwoFloats); // 4

