window.onload = function() {

  console.log('Hi!');
  
  // EMAIL VALIDATION
  
  var eInput = document.getElementById("email-input");
  var eRequired = document.getElementById("email-required");
  var eInvalid = document.getElementById("invalid-email");
  
  eInput.addEventListener('blur', function(){
    var eRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (eInput.value == '') {
      eRequired.classList.remove('hidden');
      eMess = 'Email is required';
    } else if (!eRegEx.test(eInput.value)){
      eInvalid.classList.remove('hidden');
      eMess = 'Invalid mail format';
    } else {
      eMess = eInput.value;
    }
  })
  
  eInput.addEventListener('focus', function(){
    eInvalid.classList.add('hidden');
    eRequired.classList.add('hidden');
  })
  
  // PASSWORD VALIDATION
  
  const correctPasw = 'MyPassword01';
  var password = document.querySelector(".psw");
  var pswRequired = document.getElementById("psw-required")
  var pswInc = document.getElementById("psw-inc");
  
  password.addEventListener('blur', function(){
    console.log(password.value);

    if (password.value == '') {
      pswRequired.classList.remove('hidden');
      pswMess = 'Password is required';
    } else if (password.value !== correctPasw){
      pswInc.classList.remove('hidden');
      pswMess = 'Wrong password';
    } else {
      pswMess = password.value;
    }
  })

  password.addEventListener('focus', function(){
    pswInc.classList.add('hidden');
    pswRequired.classList.add('hidden');
  })

  // BUTTON
  
  var button = document.querySelector(".button");

  button.onclick = function(){
    alert('Mail:' + eMess + 'Password:' + pswMess);
    console.log(eMess);
  }

}
