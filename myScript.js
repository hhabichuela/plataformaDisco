let nombre = prompt("¿Cuál es tu nombre?");

while (nombre.length < 3 ) {
    nombre = prompt("Demasiado corto, dinos, ¿cuál es realmente tu nombre?");
}
const span = document.querySelector('#welcome');
span.textContent = "Hola, " + nombre;

let objTickets = {
    California: "59",
    Tokyo: "80",
    Seoul: "5",
    Shangai: "0",
}
function deshabilitar(){
    for (let place in objTickets) {
        if (objTickets[place] == 0) {
            let button = document.querySelectorAll('.tickets');
            button.forEach(button => {
                let place = button.getAttribute('data-place');
                if (objTickets[place] == 0) {
                    button.textContent = "Sold Out";
                    button.disabled = true;
                    button.style.backgroundColor = 'red';
                    button.style.marginTop= '10px';
                    button.style.marginLeft= '90px';
                }
            });
        }
    }
}



let edad = prompt("¿Cuántos años tenes?");
if (edad < 18) {
    swal('¡Atención!', 'No puedes comprar tickets siendo menor de edad.', 'warning');
    let tickets = document.querySelectorAll('.tickets');
    for (let i = 0; i < tickets.length; i++) {
        tickets[i].textContent = "Prohibido.";
        tickets[i].disabled = true;
        tickets[i].style.backgroundColor = 'red';
        tickets[i].style.marginTop= '10px';
        tickets[i].style.marginLeft= '90px';

    }

} else {
    
  function getTickets(place) {
    if (objTickets[place] > 0) {
        objTickets[place]--;
        swal("¡Comprado!", "Ya tenes tu ticket para el concierto de " + place + ".", "success");
    } else if (objTickets[place] == 0) {
        deshabilitar();
        swal('Lo sentimos', 'Los tickets para ' + place + ' están agotados.', 'warning');
    }

    }

}


