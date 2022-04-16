/* Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase). */

let stringAMayus = 'Este string será mostrado en mayúsculas';
console.log (stringAMayus.toUpperCase());

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

let stringEx2b = 'Este es un string de cualquiera';
let stringPrim = stringEx2.substring(0,3);
console.log (stringPrim);
/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

let stringEx2c = 'Este string también es de prueba';
let stringUlt = stringEx2c.substring(stringEx2.length-3, stringEx2.length);
console.log (stringUlt);