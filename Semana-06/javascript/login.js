window.onload = function() {

  const correctPasw = 'MyPassword01';

  console.log('Hi!');
  var button = document.querySelector(".button");
  var email = document.querySelector(".email");
  var password = document.querySelector(".psw");
  var errorEmail = document.getElementById("invalid-email");
  var errorPsw = document.getElementById("psw-message");

  console.log(button);

   // Investigate how to do this with toggle

  email.addEventListener('blur', function(){
    if (email.value !== 'email-valido') {
      errorEmail.classList.remove('hidden-error');
    }
  })

  email.addEventListener('focus', function(){
      errorEmail.classList.add('hidden-error');
  })

  // Ask about password validations on blur/focus event

  password.addEventListener('blur', function(){
    if(password !== correctPasw )
    errorPsw.classList.remove('hidden-error')
  })

  password.addEventListener('focus', function(){
    errorPsw.classList.add('hidden-error');
})

  button.onclick = function(){
    
    if (password.value !== correctPasw){
      errorPsw.classList.remove('hiddenError');
    } 

}
}
