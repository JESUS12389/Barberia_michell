

document.getElementById("reservaForm").addEventListener("submit", function(e) {
          e.preventDefault();
      
          const entrada = new Date(document.getElementById("entrada").value);
          const salida = new Date(document.getElementById("salida").value);
      
          if (salida <= entrada) {
            alert("La fecha de salida debe ser posterior a la de entrada.");
            return;
          }
      
          // Crear nueva reserva con los datos del formulario
          const nuevaReserva = {
            nombre: document.getElementById("nombre").value,
            email: document.getElementById("email").value,
            telefono: document.getElementById("telefono").value,
            entrada: document.getElementById("entrada").value,
            salida: document.getElementById("salida").value,
            personas: document.getElementById("personas").value,
            niños: document.getElementById("niños").value,
            habitacion: document.getElementById("habitacion").value
          };
      
          // Agregar al array global de reservas
          reservas.push(nuevaReserva);
      
          // Mostrar mensaje de éxito
          document.getElementById("mensajeExito").innerText = "¡Reserva realizada con éxito!";
          document.getElementById("reservaForm").reset();
      
          // Si el admin ya está logueado, actualizar la tabla
          if (document.getElementById("admin-content").style.display === "block") {
            mostrarReservas();
          }
        });



    
        btn_menu.addEventListener( 'click', (e) => {

            let menu = document.querySelector('.menu_container')

            if( menu.classList[1] != undefined ){
                menu.classList.remove('mostrar_menu')
            }else{
                menu.classList.add('mostrar_menu')
            }

        })



enviarForm.addEventListener( 'click' , ( e ) => {
    e.preventDefault();
    
    alert('Mensaje enviado')
})