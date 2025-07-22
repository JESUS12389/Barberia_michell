


//  PANEL ADMINISTRATIVO3
   const formLogin = document.getElementById("adminLoginForm");
    const adminUser = "admin";
    const adminPass = "1234";

    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();
        const user = document.getElementById("adminUser").value;
        const pass = document.getElementById("adminPass").value;

        if (user === adminUser && pass === adminPass) {
            document.getElementById("login-panel").style.display = "none";
            document.getElementById("admin-content").style.display = "block";
            mostrarReservas();
        } else {
            document.getElementById("loginError").style.display = "block";
        }
    });

    // Datos simulados
    let reservas = [
        { nombre: "Juan Pérez", email: "juan@example.com", entrada: "2025-07-01", salida: "2025-07-03", telefono: "9981000000", habitacion: "Sencilla", personas: 2, niños: 1 },
        { nombre: "Ana López", email: "ana@example.com", entrada: "2025-07-05", salida: "2025-07-07", telefono: "9982000000", habitacion: "Doble", personas: 4, niños: 2 }
    ];

    // Mostrar reservas
    function mostrarReservas() {
        const tbody = document.querySelector("#tablaReservas tbody");
        tbody.innerHTML = "";

        reservas.forEach((reserva, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${reserva.nombre}</td>
                <td>${reserva.email}</td>
                <td>${reserva.entrada}</td>
                <td>${reserva.salida}</td>
                <td>${reserva.telefono}</td>
                <td>${reserva.habitacion}</td>
                <td>${reserva.personas}</td>
                <td>${reserva.niños}</td>
                <td>
                    <button onclick="editarReserva(${index})">Editar</button>
                    <button onclick="eliminarReserva(${index})">Eliminar</button>
                </td>
            `;
            tbody.appendChild(fila);
        });
    }

    // Editar reserva
    function editarReserva(index) {
        const nuevaSalida = prompt("Nueva fecha de salida (YYYY-MM-DD):", reservas[index].salida);
        if (nuevaSalida) {
            reservas[index].salida = nuevaSalida;
            mostrarReservas();
        }
    }

    // Eliminar reserva
    function eliminarReserva(index) {
        if (confirm("¿Seguro que quieres eliminar esta reserva?")) {
            reservas.splice(index, 1);
            mostrarReservas();
        }
    }

    // Descargar reporte
    function descargarReporte() {
        let contenido = "Nombre,Correo,Entrada,Salida,Teléfono,Habitación,Personas,Niños\n";
        reservas.forEach(r => {
            contenido +=`${r.nombre},${r.email},${r.entrada},${r.salida},${r.telefono},${r.habitacion},${r.personas},${r.niños}\n`;
        });

        const blob = new Blob([contenido], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "reporte_reservas.csv";
        a.click();
        URL.revokeObjectURL(url);
    }
    // Función para cerrar sesión
function cerrarSesion() {
    document.getElementById("admin-content").style.display = "none";
    document.getElementById("login-panel").style.display = "block";
    document.getElementById("adminLoginForm").reset();
    document.getElementById("loginError").style.display = "none";
}
    // Hacer las funciones accesibles globalmente
    window.editarReserva = editarReserva;
    window.eliminarReserva = eliminarReserva;
    window.descargarReporte = descargarReporte;







//ocultar seciones

    const enlacesMenu = document.querySelectorAll('.menu_navbar_list a[data-seccion]');
    const secciones = document.querySelectorAll('.seccion');
    const headerPrincipal = document.getElementById('header');

    enlacesMenu.forEach(enlace => {
      enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const idSeccion = this.getAttribute('data-seccion');

        // Oculta todas las secciones
        secciones.forEach(sec => {
          sec.style.display = 'none';
        });

        // Muestra la sección deseada
        const seccionActiva = document.getElementById(idSeccion);
        if (seccionActiva) {
          seccionActiva.style.display = 'block';
          seccionActiva.scrollIntoView({ behavior: 'smooth' });
        }

        // Mostrar el header solo en inicio
        if (idSeccion === 'inicio') {
          headerPrincipal.style.display = 'block';
        } else {
          headerPrincipal.style.display = 'none';
        }
      });
    });
    




    function moverCarrusel(idTrack, direccion) {
        const track = document.getElementById(idTrack);
        const width = track.offsetWidth;
        const totalItems = track.children.length;
        const itemWidth = track.children[0].offsetWidth;
        const visibleItems = Math.floor(width / itemWidth);
        const maxScroll = (totalItems - visibleItems) * itemWidth;

        let currentTransform = getComputedStyle(track).transform;

        if (currentTransform !== 'none') {
        let matrix = new WebKitCSSMatrix(currentTransform);
        let currentX = Math.abs(matrix.m41);
        let newX = currentX + direccion * itemWidth;

        if (newX < 0) newX = 0;
        if (newX > maxScroll) newX = maxScroll;

        track.style.transform = `translateX(-${newX}px)`;  // ✅ COMILLAS CORRECTAS
        } else {
        track.style.transform = `translateX(${direccion * -itemWidth}px)`;  // ✅ COMILLAS CORRECTAS
        }
  }




//   Carrusel
        const track = document.querySelector('.carousel-track');
        const prevBtn = document.querySelector('.carousel-btn.prev');
        const nextBtn = document.querySelector('.carousel-btn.next');
        let currentIndex = 0;
        nextBtn.addEventListener('click', () => {
          if (currentIndex < track.children.length - 1) {
            currentIndex++;
            updateCarousel();
          }
        });
        prevBtn.addEventListener('click', () => {
          if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
          }
        });
        function updateCarousel() {
          const width = track.children[0].getBoundingClientRect().width;
          track.style.transform = `translateX(-${width * currentIndex}px)`;
        }






    //img nosotros
        const trackNos = document.querySelector('.nosotros-track');
    const prevNos = document.querySelector('.nosotros-btn.prev');
    const nextNos = document.querySelector('.nosotros-btn.next');
    let indexNos = 0;
  
    nextNos.addEventListener('click', () => {
      if (indexNos < trackNos.children.length - 1) {
        indexNos++;
        updateNosotros();
      }
    });
  
    prevNos.addEventListener('click', () => {
      if (indexNos > 0) {
        indexNos--;
        updateNosotros();
      }
    });
  
    function updateNosotros() {
      const width = trackNos.children[0].getBoundingClientRect().width;
      trackNos.style.transform = `translateX(-${width * indexNos}px)`;
    }



    // Img servicios
    function mostrarImagen(ruta) {
      const contenedor = document.getElementById("imagen-servicio");
      const imagen = document.getElementById("imagen-preview");
      imagen.src = ruta;
      contenedor.style.display = "block";
      imagen.scrollIntoView({ behavior: "smooth" });
    }
    
    