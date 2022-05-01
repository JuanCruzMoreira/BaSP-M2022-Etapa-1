window.onload = function() {

  console.log('Hi!');
  
  // EMAIL VALIDATION
  
  var eInput = document.getElementById("email-input");
  var eRequired = document.getElementById("email-required");
  var eInvalid = document.getElementById("invalid-email");
  
  function validateEmail() {
    var eRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var eValidated = false;

    if (eInput.value === '') {
      eRequired.classList.remove('hidden');
      eInput.classList.add('red-border');
      eMess = 'Email is required';
    } else if (!eRegEx.test(eInput.value)){
      eInvalid.classList.remove('hidden');
      eInput.classList.add('red-border');
      eMess = 'Invalid mail format';
    } else {
      eInput.classList.add('green-border');
      eMess = eInput.value;
      eValidated = true;
    }
    return eValidated;
  }

  eInput.addEventListener('blur', function(){
    validateEmail();
  })
  
  eInput.addEventListener('focus', function(){
    eInput.classList.remove('red-border');
    eInput.classList.remove('green-border');
    eInvalid.classList.add('hidden');
    eRequired.classList.add('hidden');
  })
  
  // PASSWORD VALIDATION
  
  var password = document.querySelector(".psw");
  var pswRequired = document.getElementById("psw-required");
  var pswInc = document.getElementById("psw-inc");
  
  function validatePsw() {
    var pswValidated = false;

    if (password.value === '') {
      pswRequired.classList.remove('hidden');
      password.classList.add('red-border');
      pswMess = 'Password is required';
    } else {
      pswMess = password.value;
      password.classList.add('green-border');
      pswValidated = true;
    }
    return pswValidated;
  }

  password.addEventListener('blur', function(){
    validatePsw();
  })

  password.addEventListener('focus', function(){
    password.classList.remove('red-border');
    password.classList.remove('green-border');
    pswInc.classList.add('hidden');
    pswRequired.classList.add('hidden');
  })

  // BUTTON
  
  var button = document.querySelector(".button");

  button.onclick = function(){

    alert('Mail: ' + eMess + '\nPassword: ' + pswMess);

    if (validateEmail() && validatePsw()) {
      var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';

      fetch(url.concat('?email=', eInput.value, '&password=', password.value))
        .then(function(response){
          if (response.ok) {
            alert('Employee logged');
          } else {
            alert('Wrong email or password');
          }
        })
        .catch(function(error){
          console.log(error);
        })
    }
  }
}
