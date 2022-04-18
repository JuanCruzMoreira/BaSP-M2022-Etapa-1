console.log('--- EXERCISE 3: ARRAYS');

/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 
(utilizar console.log). */

console.log('Exercise 3.a:');

var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];

console.log('Fifth month is: ' + months[4]);
console.log('Eleventh month is: ' + months[10]);

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log('Exercise 3.b:');

console.log('Months array ordered alphabetically: ' + months.sort());

/* Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

console.log('Exercise 3.c:');

var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];

months.unshift('Mes 0');
months.push('Mes 13');
console.log('New array: ' + months);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('Exercise 3.d:');

var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];

months.shift();
months.pop();
console.log('Cuted array: ' + months);

/* Invertir el orden del array (utilizar reverse). */

console.log('Exercise 3.e:');

var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];

console.log('Reversed months array: ' + months.reverse());

/* Unir todos los elementos del array en un único string donde cada mes este separado 
por un guión - (utilizar join). */

console.log('Exercise 3.f:');

var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];

console.log('Months string: ' + months.join(' - '));

/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

console.log('Exercise 3.g:');

monthsCopy = months.slice(4, 11);
console.log('New cuted array: ' + monthsCopy);