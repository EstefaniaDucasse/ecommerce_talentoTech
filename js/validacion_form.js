const formulario = document.getElementById("form_contacto");
console.log(formulario);


// addEventListener es un method de el objeto formulario, que recibe dos parametros 
formulario.addEventListener("submit", event => {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    // el .value es para obtener el valor del campo (el que escribio el usuario)
    // el .trim() es para quitar los espacios en blanco al principio y al final
    const nombre = document.getElementById("nombre_completo").value.trim();
    const email = document.getElementById("email").value.trim();
    const consulta = document.getElementById("consulta").value.trim();
    const motivo = document.getElementById("inputMotivo").value.trim();

    console.log(nombre);
    console.log(email);
    console.log(consulta);
    console.log(motivo);

    // Variables para los mensajes de error
    const errorNombre = document.getElementById("errorNombre"); 
    const errorEmail = document.getElementById("errorEmail");
    const errorConsulta= document.getElementById("errorConsulta");
    const errorMotivo= document.getElementById("errorMotivo");

    // Inicializar validación
    let formularioValido = true;

    // Validar nombre
    if (nombre === "") {
        //alert ("el nombre debe estar completo")
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorNombre.classList.add("d-none");
    }

    // Validar motivo
    if (motivo === "Elegir...") {
        //alert ("el nombre debe estar completo")
        errorMotivo.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMotivo.classList.add("d-none");
    }

    // Validar email
    // expresiones regulares
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }

    // Validar mensaje
    if (consulta.length >= 100) {
        errorConsulta.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorConsulta.classList.add("d-none");
    }

    // Si el formulario es válido, se puede enviar
    if (formularioValido) {
        alert("Formulario enviado correctamente.");

        const formularioContacto = {
            nombre: nombre,
            email: email,
            consulta: consulta
        };
    }
});