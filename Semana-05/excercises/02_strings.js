/* Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase). */

var stringAMayus = 'Este string será mostrado en mayúsculas';
console.log (stringAMayus.toUpperCase());

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var stringEx2b = 'Este es un string de cualquiera';
var stringPrim = stringEx2b.substring(0,3);
console.log (stringPrim);
/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

var stringEx2c = 'Este string también es de prueba';
var stringUlt = stringEx2c.substring(stringEx2c.length-3, stringEx2c.length);
console.log (stringUlt);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var stringEx2d = 'este sTRING tiene VARias LeTRas en MAyúsCula';
var solEx2d = stringEx2d.substring(0,1).toUpperCase() + stringEx2d.substring(1,stringEx2d.length).toLowerCase();
console.log(solEx2d);

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar
 la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

 var stringEx2e = 'Tengo un espacio en blanco en la sexta posición';
 var posEsp = stringEx2e.indexOf(' ');
 console.log(posEsp + 1);
 
/*  Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
  entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que 
  tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
  (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

  var stringEx2f = 'ornitorrincos paralelepípedo';
  var posEsp2 = stringEx2f.indexOf(' ');
  var solEx2f = stringEx2f.substring(0, 1).toUpperCase() + stringEx2f.substring(1, posEsp2).toLowerCase()
  + ' ' + stringEx2f.substring(posEsp2 + 1, posEsp2 + 2).toUpperCase() + 
  stringEx2f.substring(posEsp2 + 2, stringEx2f.length).toLowerCase();
  console.log(solEx2f);
