function validar(){
  let nomYmail = document.getElementById("nomail").value;
  let contrasenia = document.getElementById("contra").value;
  if (contrasenia.length < 5 || nomYmail.length < 5 ) {
    swal('No puede dejar los campos vacíos o con menos de seis caracteres.', 'Vuelva a intentarlo.', 'warning');
   return false;
  } else {
    return true;
  }
  
}
