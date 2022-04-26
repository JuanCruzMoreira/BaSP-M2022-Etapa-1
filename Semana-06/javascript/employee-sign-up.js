
window.onload = function(){

  var inputs = document.getElementsByTagName('input');
  var messages = document.getElementsByTagName('p');
  var alertValues = ['mess 1', 'mess 2', 'mess 3', 'mess 4'];
  var labels = document.getElementsByTagName('label');
  var currentDate = new Date(Date.now());

// VALIDATIONS

// NAME

  inputs[1].addEventListener('blur', function(){
    if (isEmpty(inputs[1].value)) {
      messages[0].classList.remove('hidden');
      inputs[1].classList.add('red-border');
      alertValues[0] = (messages[0].textContent);
    } else if (inputs[1].value.length < 3) {
        messages[1].classList.remove('hidden');
        inputs[1].classList.add('red-border');
        alertValues[0] = (messages[1].textContent);
    } else if (hasNumbers(inputs[1].value)) {
        messages[2].classList.remove('hidden');
        inputs[1].classList.add('red-border');
        alertValues[0] = (messages[2].textContent);
    } else {
        alertValues[0] = (inputs[1].value);
        inputs[1].classList.add('green-border');
    }
  })
  
  inputs[1].addEventListener('focus', function(){
    inputs[1].classList.remove('red-border');
    inputs[1].classList.remove('green-border');
    messages[0].classList.add('hidden');
    messages[1].classList.add('hidden');
    messages[2].classList.add('hidden');
  })
  
  // LAST NAME
  
  inputs[2].addEventListener('blur', function () {
    if (isEmpty(inputs[2].value)) {
      messages[3].classList.remove('hidden');
      inputs[2].classList.add('red-border');
      alertValues[1] = (messages[3].textContent);
    } else if (inputs[2].value.length < 3) {
      messages[4].classList.remove('hidden');
      inputs[2].classList.add('red-border');
      alertValues[1] = (messages[4].textContent);
    } else if (hasNumbers(inputs[2].value)) {
      messages[5].classList.remove('hidden');
      inputs[2].classList.add('red-border');
      alertValues[1] = (messages[5].textContent);
    } else {
      alertValues[1] = (inputs[2].value);
      inputs[2].classList.add('green-border');
    }
  })
  
  inputs[2].addEventListener('focus', function(){
    inputs[2].classList.remove('red-border');
    inputs[2].classList.remove('green-border');
    messages[3].classList.add('hidden');
    messages[4].classList.add('hidden');
    messages[5].classList.add('hidden');
  })
  
  // ID
  
  inputs[3].addEventListener('blur', function () {
    
    if (isEmpty(inputs[3].value)) {
      messages[6].classList.remove('hidden');
      inputs[3].classList.add('red-border');
      alertValues[2] = (messages[6].textContent);
    } else if (inputs[3].value.length < 8) {
      messages[7].classList.remove('hidden');
      inputs[3].classList.add('red-border');
      alertValues[2] = (messages[7].textContent);
    } else if (!onlyNumbers(inputs[3].value)){
      messages[8].classList.remove('hidden');
      inputs[3].classList.add('red-border');
      alertValues[2] = (messages[8].textContent);
    } else {
      alertValues[2] = (inputs[3].value);
      inputs[3].classList.add('green-border');
    }
  })

  inputs[3].addEventListener('focus', function(){
    inputs[3].classList.remove('red-border');
    inputs[3].classList.remove('green-border');
    messages[6].classList.add('hidden');
    messages[7].classList.add('hidden');
    messages[8].classList.add('hidden');
  })
  
  
  // BIRTH
  
  inputs[4].addEventListener('blur', function(){

     validateDate(inputs[4].value)
     formDate(inputs[4].value)

    if (isEmpty(inputs[4].value)) {
      messages[9].classList.remove('hidden');
      inputs[4].classList.add('red-border');
      alertValues[3] = (messages[9].textContent);
    } else if (!validateDate(inputs[4].value)){
      messages[10].classList.remove('hidden');
      inputs[4].classList.add('red-border');
      alertValues[3] = (messages[10].textContent);
    } else if (!isAdult(inputs[4].value)) {
      messages[11].classList.remove('hidden');
      inputs[4].classList.add('red-border');
      alertValues[3] = (messages[11].textContent);
    } else {
      alertValues[3] = (formDate(inputs[4].value));
      inputs[4].classList.add('green-border');
    }
  })

  inputs[4].addEventListener('focus', function(){
    inputs[4].classList.remove('red-border');
    inputs[4].classList.remove('green-border');
    messages[9].classList.add('hidden');
    messages[10].classList.add('hidden');
    messages[11].classList.add('hidden');
  })
  
  // PHONE

  inputs[5].addEventListener('blur', function(){
    
    if (isEmpty(inputs[5].value)) {
      messages[12].classList.remove('hidden');
      inputs[5].classList.add('red-border');
      alertValues[4] = (messages[12].textContent);
    } else if (inputs[5].value.length < 10) {
      messages[13].classList.remove('hidden');
      inputs[5].classList.add('red-border');
      alertValues[4] = (messages[13].textContent);
    } else if (!onlyNumbers(inputs[5].value)) {
      messages[14].classList.remove('hidden');
      inputs[5].classList.add('red-border');
      alertValues[4] = (messages[14].textContent);
    } else {
      alertValues[4] = (inputs[5].value);
      inputs[5].classList.add('green-border');
    }
  })
  
  inputs[5].addEventListener('focus', function(){
    inputs[5].classList.remove('red-border');
    inputs[5].classList.remove('green-border');
    messages[12].classList.add('hidden');
    messages[13].classList.add('hidden');
    messages[14].classList.add('hidden');
  })
  
  // ADRESS
  
  inputs[6].addEventListener('blur', function(){
    
    adressValidator(inputs[6].value)
    if (isEmpty(inputs[6].value)) {
      messages[15].classList.remove('hidden');
      inputs[6].classList.add('red-border');
      alertValues[5] = (messages[15].textContent);
    } else if (inputs[6].value.length < 5) {
      messages[16].classList.remove('hidden');
      inputs[6].classList.add('red-border');
      alertValues[5] = (messages[16].textContent);
    } else if (!adressValidator(inputs[6].value)) {
      messages[17].classList.remove('hidden');
      inputs[6].classList.add('red-border');
      alertValues[5] = (messages[17].textContent);
    } else {
      alertValues[5] = (inputs[6].value);
      inputs[6].classList.add('green-border');
    }
  })
  
  inputs[6].addEventListener('focus', function(){
    inputs[6].classList.remove('red-border');
    inputs[6].classList.remove('green-border');
    messages[15].classList.add('hidden');
    messages[16].classList.add('hidden');
    messages[17].classList.add('hidden');
  })
  
  // CITY
  
  inputs[7].addEventListener('blur', function(){
    
    if (isEmpty(inputs[7].value)) {
      messages[18].classList.remove('hidden');
      inputs[7].classList.add('red-border');
      alertValues[6] = (messages[18].textContent);
    } else if (inputs[7].value.length < 3) {
      messages[19].classList.remove('hidden');
      inputs[7].classList.add('red-border');
      alertValues[6] = (messages[19].textContent);
    } else {
      alertValues[6] = (inputs[7].value);
      inputs[7].classList.add('green-border');
    }
  })
  
  inputs[7].addEventListener('focus', function(){
    inputs[7].classList.remove('red-border');
    inputs[7].classList.remove('green-border');
    messages[18].classList.add('hidden');
    messages[19].classList.add('hidden');
  })
  
  
  // ZIP

  inputs[8].addEventListener('blur', function(){
    
    if (isEmpty(inputs[8].value)) {
      messages[20].classList.remove('hidden');
      inputs[8].classList.add('red-border');
      alertValues[7] = (messages[20].textContent);
    } else if (inputs[8].value.length < 4 || inputs[8].value.length > 5) {
      messages[21].classList.remove('hidden');
      inputs[8].classList.add('red-border');
      alertValues[7] = (messages[21].textContent);
    } else if (!onlyNumbers(inputs[8].value)) {
      messages[22].classList.remove('hidden');
      inputs[8].classList.add('red-border');
      alertValues[7] = (messages[22].textContent);
    } else {
      alertValues[7] = (inputs[8].value);
      inputs[8].classList.add('green-border');
    }
  })
  
  inputs[8].addEventListener('focus', function(){
    inputs[8].classList.remove('red-border');
    inputs[8].classList.remove('green-border');
    messages[20].classList.add('hidden');
    messages[21].classList.add('hidden');
    messages[22].classList.add('hidden');
  })
  
  
  // EMAIL
  
  inputs[9].addEventListener('blur', function(){
    
    var eRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (isEmpty(inputs[9].value)) {
      messages[23].classList.remove('hidden');
      inputs[9].classList.add('red-border');
      alertValues[8] = (messages[23].textContent);
    } else if (!eRegEx.test(inputs[9].value)){
      messages[24].classList.remove('hidden');
      inputs[9].classList.add('red-border');
      alertValues[8] = (messages[24].textContent);
    } else {
      alertValues[8] = (inputs[9].value);
      inputs[9].classList.add('green-border');
    }
  })

  inputs[9].addEventListener('focus', function(){
    inputs[9].classList.remove('red-border');
    inputs[9].classList.remove('green-border');
    messages[23].classList.add('hidden');
    messages[24].classList.add('hidden');
  })
  
  //PASSWORD
  
  inputs[10].addEventListener('blur', function(){
    
    if (isEmpty(inputs[10].value)) {
      alertValues[9] = (messages[25].textContent);
      messages[25].classList.remove('hidden');
      inputs[10].classList.add('red-border');
    } else if (inputs[10].value.length < 8 && !validatePass(inputs[10].value)) {
      alertValues[9] = (messages[26].textContent);
      messages[26].classList.remove('hidden');
      inputs[10].classList.add('red-border');
    } else if (inputs[10].value.length < 8) {
      alertValues[9] = (messages[27].textContent);
      messages[27].classList.remove('hidden');
      inputs[10].classList.add('red-border');
    } else if (!validatePass(inputs[10].value)) {
      alertValues[9] = (messages[28].textContent);
      messages[28].classList.remove('hidden');
      inputs[10].classList.add('red-border');
    } else {
      alertValues[9] = (inputs[10].value);
      inputs[10].classList.add('green-border');
    }
  })
  
  inputs[10].addEventListener('focus', function(){
    inputs[10].classList.remove('red-border');
    inputs[10].classList.remove('green-border');
    messages[25].classList.add('hidden');
    messages[26].classList.add('hidden');
    messages[27].classList.add('hidden');
    messages[28].classList.add('hidden');
  })
  
  //REPEAT PASSWORD
  
  inputs[11].addEventListener('blur', function(){
    
    if (isEmpty(inputs[11].value)) {
      alertValues[10] = (messages[29].textContent);
      messages[29].classList.remove('hidden');
      inputs[11].classList.add('red-border');
    } else if (inputs[11].value !== inputs[10].value) {
      alertValues[10] = (messages[30].textContent);
      messages[30].classList.remove('hidden');
      inputs[11].classList.add('red-border');
    } else {
      alertValues[10] = (inputs[11].value);
      inputs[11].classList.add('green-border');
    }
  })
  
  inputs[11].addEventListener('focus', function(){
    inputs[11].classList.remove('red-border');
    inputs[11].classList.remove('green-border');
    messages[29].classList.add('hidden');
    messages[30].classList.add('hidden');
  })
  
  // BUTTON

  var button = document.querySelector(".button");

  button.onclick = function(){
    alert(alertMessage())
  }

  // AUX FUNCTIONS

function hasNumbers (string) {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (i = 0; i < string.length; i++) {
    if (numbers.includes(string[i])) {
      return true;
    }
  }
  return false
}
function validatePass(string) {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var alph = ['a','b','c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
      'r', 's', 'u', 'v', 'w', 'x', 'y', 'z'];

  var minValue = string.toLowerCase();
  var num = 0;
  var char = 0;
  var special = false;
  for (i = 0; i < string.length; i++) {
      if (numbers.includes(string[i])) {
          num++;
      } else if (alph.includes(minValue[i])) {
          char++;
      } else {
          special = true;
      }
  }
  if (num >= 1 && char >= 1 && special == false) {
    return true;
  } else {
    return false;
  }
}

function onlyNumbers (string) {
  for (i = 0; i < string.length; i++) {
    if (!hasNumbers(string[i])) {
      return false;
    }
    return true;
  }
}

function isEmpty (string){
  if (string === '') {
    return true;
  }
  return false;
}

function adressValidator (string){

  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var alph = ['a','b','c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
      'r', 's', 'u', 'v', 'w', 'x', 'y', 'z'];

  spacePos = string.indexOf(' ');
  hasSpace = false;

  if (spacePos >= 0) {
    hasSpace = true;
    adressChar = string.substring(0, spacePos);
    adressNum = string.substring(spacePos, string.length); 
    console.log(adressChar);
    console.log(adressNum);
  }

  return hasSpace && !hasNumbers(adressChar) && hasNumbers(adressNum);
}

  function isAdult (date){
    
    var date = new Date(date);
    var currentDate = new Date(Date.now());

    return new Date(currentDate - date).getFullYear() - 1970 >= 18;
  }

  function formDate(dateToForm) {

    var [year, month, day] = dateToForm.split("-");
    var formattedDate = `${day}/${month}/${year}`;
    
    return  formattedDate;
  }

  function validateDate(dateToValidate){

    var [year, month, day] = dateToValidate.split("-");
    var isoFormattedStr = `${year}/${month}/${day}`;
    var date = new Date(isoFormattedStr);
    var currentDate = new Date(Date.now());

    return currentDate >= date
  }

  function alertMessage () {
    var messArray = [];

      for (i = 0; i < labels.length; i++) {
      messArray.push(labels[i].textContent + ': ' + alertValues[i]);
    } 

      return messArray.join('\n');
  }
}