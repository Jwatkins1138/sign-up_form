submitForms = function() {
  document.getElementById("form1").submit();
  document.getElementById("form2").submit();
}

var password = document.getElementById("password");
var passwordConfirm = document.getElementById("passwordConfirm");

function validatePassword() {
  // passwordConfirm.setCustomValidity ( password.value != 
  // passwordConfirm.value ? "passwords do not match" : ''  );
  if passwordConfirm.value != password.value {
    passwordConfirm.setCustomValidity("no match") }
  else {
    passwordConfirm.setCustomValidity('') }
}

password.onchange = validatePassword();
passwordConfirm.onkeyup = validatePassword();