let nombre = prompt("¿Cuál es tu nombre?");

while (nombre.length < 3 ) {
    nombre = prompt("Demasiado corto, dinos, ¿cuál es realmente tu nombre?");
}
const span = document.querySelector('#welcome');
span.textContent = "Hola, " + nombre;


let edad = prompt("¿Cuántos años tenes?");
if (edad < 18) {
    swal('¡Atención!', 'No puedes comprar tickets siendo menor de edad.', 'warning');
    let tickets = document.querySelectorAll('.tickets');
    for (let i = 0; i < tickets.length; i++) {
        tickets[i].textContent = "Prohibido.";
        tickets[i].disabled = true;
        tickets[i].style.backgroundColor = 'red';
        tickets[i].style.marginTop= '30px';
        tickets[i].style.marginLeft= '90px';

        
    }

} else {
    
  function getTickets() {
    swal("¡Comprado!", "Ya tenes tu ticket para el concierto.", "success");
    }
}






/* let nombre;
let edad;

edad = prompt("¿Cual es tu edad?");
nombre = prompt("¿Y tu nombre?");

alert("Bienvenid@ " + nombre + " de " + edad + " años. " + " ¿Desea comprar algún ticket? Presione aceptar para continuar." ); */