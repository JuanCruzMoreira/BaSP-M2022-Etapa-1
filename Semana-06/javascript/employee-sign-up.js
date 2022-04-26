
window.onload = function(){

  var inputs = document.getElementsByTagName('input');
  var messages = document.getElementsByTagName('p');
  var alertValues = [];
  var labels = document.getElementsByTagName('label');
  var currentDate = new Date(Date.now());

// VALIDATIONS

// NAME

inputs[1].addEventListener('blur', function(){
  if (isEmpty(inputs[1].value)) {
    messages[0].classList.remove('hidden');
    alertValues.push(messages[0].value);
    } else if (inputs[1].value.length < 3) {
      messages[1].classList.remove('hidden');
      alertValues.push(messages[1].value);
    } if (hasNumbers(inputs[1].value)) {
      messages[2].classList.remove('hidden');
      alertValues.push(messages[2].value);
    } else {
      alertValues.push(inputs[1].value);
    }
  })
  
  inputs[1].addEventListener('focus', function(){
    messages[0].classList.add('hidden');
    messages[1].classList.add('hidden');
    messages[2].classList.add('hidden');
  })
  
  // LAST NAME
  
  inputs[2].addEventListener('blur', function () {
    if (isEmpty(inputs[2].value)) {
      messages[3].classList.remove('hidden');
      alertValues.push(messages[3].value);
    } else if (inputs[2].value.length < 3) {
      messages[4].classList.remove('hidden');
      alertValues.push(messages[4].value);
    } if (hasNumbers(inputs[2].value)) {
      messages[5].classList.remove('hidden');
      alertValues.push(messages[5].value);
    } else {
      alertValues.push(inputs[2].value);
    }
  })
  
  inputs[2].addEventListener('focus', function(){
    messages[3].classList.add('hidden');
    messages[4].classList.add('hidden');
    messages[5].classList.add('hidden');
  })
  
  // ID
  
  inputs[3].addEventListener('blur', function () {
    
    if (isEmpty(inputs[3].value)) {
      messages[6].classList.remove('hidden');
      alertValues.push(messages[6].value);
    } else if (inputs[3].value.length < 8) {
      messages[7].classList.remove('hidden');
      alertValues.push(messages[7].value);
    } if (!onlyNumbers(inputs[3].value)){
      messages[8].classList.remove('hidden');
      alertValues.push(messages[8].value);
    } else {
      alertValues.push(inputs[3].value);
    }
  })

  inputs[3].addEventListener('focus', function(){
    messages[6].classList.add('hidden');
    messages[7].classList.add('hidden');
    messages[8].classList.add('hidden');
  })
  
  
  // BIRTH
  
  inputs[4].addEventListener('blur', function(){

    if (isEmpty(inputs[4].value)) {
      messages[9].classList.remove('hidden');
      alertValues.push(messages[9].value);
    } else if (inputs[4].value > currentDate){
      messages[10].classList.remove('hidden');
      alertValues.push(messages[10].value);
    } else if (!isAdult(inputs[4].value)) {
      messages[11].classList.remove('hidden');
      alertValues.push(messages[11].value);
    } else {
      alertValues.push(inputs[4].value);
    }
  })

  inputs[4].addEventListener('focus', function(){
    messages[9].classList.add('hidden');
    messages[10].classList.add('hidden');
    messages[11].classList.add('hidden');
  })
  
  // PHONE

  inputs[5].addEventListener('blur', function(){
    
    if (isEmpty(inputs[5].value)) {
      messages[12].classList.remove('hidden');
      alertValues.push(messages[12].value);
    } else if (inputs[5].value.length < 10) {
      messages[13].classList.remove('hidden');
      alertValues.push(messages[13].value);
    } if (!onlyNumbers(inputs[5])) {
      messages[14].classList.remove('hidden');
      alertValues.push(messages[14].value);
    } else {
      alertValues.push(inputs[5].value);
    }
  })
  
  inputs[5].addEventListener('focus', function(){
    messages[12].classList.add('hidden');
    messages[13].classList.add('hidden');
    messages[14].classList.add('hidden');
  })
  
  // ADRESS
  
  inputs[6].addEventListener('blur', function(){
    
    if (isEmpty(inputs[6].value)) {
      messages[15].classList.remove('hidden');
      alertValues.push(messages[15].value);
    } else if (inputs[6].value.length < 5) {
      messages[16].classList.remove('hidden');
      alertValues.push(messages[16].value);
    } if (!adressValidator(input[6].value)) {
      messages[17].classList.remove('hidden');
      alertValues.push(messages[17].value);
    }
  })
  
  inputs[6].addEventListener('focus', function(){
    messages[15].classList.add('hidden');
    messages[16].classList.add('hidden');
    messages[17].classList.add('hidden');
  })
  
  // CITY
  
  inputs[7].addEventListener('blur', function(){
    
    if (isEmpty(inputs[7].value)) {
      messages[18].classList.remove('hidden');
      alertValues.push(messages[18].value);
    } else if (inputs[7].value.length < 3) {
      messages[19].classList.remove('hidden');
      alertValues.push(messages[19].value);
    } else {
      alertValues.push(inputs[7].value);
    }
  })
  
  inputs[8].addEventListener('focus', function(){
    messages[18].classList.add('hidden');
    messages[19].classList.add('hidden');
  })
  
  
  // ZIP

  inputs[8].addEventListener('blur', function(){
    
    if (isEmpty(inputs[8].value)) {
      messages[20].classList.remove('hidden');
      alertValues.push(messages[20].value);
    } else if (inputs[8].value.length < 4 || inputs[8].value.length > 5) {
      messages[21].classList.remove('hidden');
      alertValues.push(messages[21].value);
    } if (!onlyNumbers(inputs[8])) {
      messages[22].classList.remove('hidden');
      alertValues.push(messages[22].value);
    } else {
      alertValues.push(inputs[8].value);
    }
  })
  
  inputs[8].addEventListener('focus', function(){
    messages[20].classList.add('hidden');
    messages[21].classList.add('hidden');
    messages[22].classList.add('hidden');
  })
  
  
  // EMAIL
  
  inputs[9].addEventListener('blur', function(){
    
    if (isEmpty(inputs[9].value)) {
      messages[23].classList.remove('hidden');
      alertValues.push(messages[23].value);
    } else if (!eRegEx.test(inputs[9].value)){
      messages[24].classList.remove('hidden');
      alertValues.push(messages[24].value);
    } else {
      alertValues.push(inputs[9].value);
    }
  })

  inputs[9].addEventListener('focus', function(){
    messages[23].classList.add('hidden');
    messages[24].classList.add('hidden');
  })
  
  //PASSWORD
  
  inputs[10].addEventListener('blur', function(){
    
    if (isEmpty(inputs[10].value)) {
      messages[25].classList.remove('hidden');
    } else if (inputs[10].value.length < 8 && hasNumAndChar(inputs[10].value)) {
      messages[26].classList.remove('hidden');
    } else if (inputs[10].value.length < 8) {
      messages[27].classList.remove('hidden');
    } else if (hasNumAndChar(inputs[10].value)) {
      messages[28].classList.remove('hidden');
    }
  })
  
  inputs[10].addEventListener('focus', function(){
    messages[25].classList.add('hidden');
    messages[26].classList.add('hidden');
    messages[27].classList.add('hidden');
    messages[28].classList.add('hidden');
  })
  
  //REPEAT PASSWORD
  
  inputs[11].addEventListener('blur', function(){
    
    if (isEmpty(inputs[11].value)) {
      messages[29].classList.remove('hidden');
    } else if (inputs[11].value !== inputs[11].value) {
      messages[30].classList.remove('hidden');
    }
  })
  
  inputs[11].addEventListener('focus', function(){
    messages[29].classList.add('hidden');
    messages[30].classList.add('hidden');
  })
  
  // BUTTON

  var button = document.querySelector(".button");

  button.onclick = function(){
  
    for (i = 0; i < inputs.length; i++) {
      console.log(labels[i].textContent + ': ' + alertValues[i] + '\n');
    }
  }

}

// AUX FUNCTIONS

function hasNumbers (string) {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (i = 0; i < string.length; i++) {
    if (numbers.includes(string[i])) {
      return true;
    }
    return false
  }
}

function hasNumAndChar (string) {
  var num = 0;
  var char = 0;

  for (i = 0; i < string.length; i++) {
    if (hasNumbers(string[i])) {
      num++;
    } else {
      char++;
    }
  }

  if (num > 0 && char > 0) {
    return true;
  }
  return false;
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

  hasSpace = string.indexOf(' ') >= 0;
  hasNumChar = hasNumbers (string);

  return hasSpace && hasNumChar;
}

function isAdult (date){
  
  var date = new Date(date);
  var currentDate = new Date(Date.now());

  return new Date(currentDate - date).getFullYear() - 1970 >= 18;
}
