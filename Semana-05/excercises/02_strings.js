/* Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase). */

var stringAMayus = 'this string will be shown in uppercase';
console.log (stringAMayus.toUpperCase());

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var stringEx2b = 'This is a random string';
var stringFirst = stringEx2b.substring(0,3);
console.log (stringFirst);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var stringEx2c = 'this is just another string';
var stringLast = stringEx2c.substring(stringEx2c.length-3, stringEx2c.length);
console.log (stringLast);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var stringEx2d = 'this STRING haS sOme CAPital LetTers';
var solEx2d = stringEx2d.substring(0,1).toUpperCase() + stringEx2d.substring(1,stringEx2d.length).toLowerCase();
console.log(solEx2d);

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar
 la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

 var stringEx2e = 'This string has a blank space in the fifth position';
 var posBE = stringEx2e.indexOf(' ');
 console.log(posBE + 1);
 
/*  Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
  entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que 
  tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
  (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

  var stringEx2f = 'uncopyrightable incomprehensibilities';
  var posBE2 = stringEx2f.indexOf(' ');
  var solEx2f = stringEx2f.substring(0, 1).toUpperCase() + stringEx2f.substring(1, posBE2).toLowerCase()
  + ' ' + stringEx2f.substring(posBE2 + 1, posBE2 + 2).toUpperCase() + 
  stringEx2f.substring(posBE2 + 2, stringEx2f.length).toLowerCase();
  console.log(solEx2f);
