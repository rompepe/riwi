function guardarUsuario() {
    // Recibimos los valores y los guardamos en las variables
  let nombres = document.getElementById("nombres");
  let apellidos = document.getElementById("apellidos");
  let correo = document.getElementById("correo");

    if (nombres.value != "" && apellidos.value != "" && correo.value != "") {
        // guardamos el id de la tabla en una variable
        let tabla = document.getElementById("tablaContenido");
        let cuerpoTabla = document.getElementById("cuerpoTabla");
        // A la variable cuerpoTabla le insertamos una fila y la guardamos en la variable fila
        let fila = cuerpoTabla.insertRow(-1);
        // creamos variables donde le insertamos la fila creada anteriormente y le insertamos celdas
        let celdaNombre = fila.insertCell(0);
        let celdaApellidos = fila.insertCell(1);
        let celdaCorreo = fila.insertCell(2);
        // a las celdas creadas se le insertan las variables donde tenemos los datos ingresados con el innertext
        
        celdaNombre.innerText = nombres.value;
        celdaApellidos.innerText = apellidos.value;
        celdaCorreo.innerText = correo.value;
        // Limpiamos los elementos para que los cajones queden vacios
        nombres.value = "";
        apellidos.value = "";
        correo.value = "";
        // Removemos los validos y los invalido al final
        nombres.classList.remove("is-valid")
        nombres.classList.remove("is-invalid")
        
        apellidos.classList.remove("is-valid")
        apellidos.classList.remove("is-invalid")

        correo.classList.remove("is-valid")
        correo.classList.remove("is-invalid")
    }else {
        if (nombres.value == "") {
            nombres.focus()
            nombres.classList.add("is-invalid")
            nombres.classList.remove("is-valid")
        }else{
            nombres.classList.remove("is-invalid")
            nombres.classList.add("is-valid")
        }
        if (apellidos.value == "") {
            apellidos.focus()
            apellidos.classList.add("is-invalid")
            apellidos.classList.remove("is-valid")
        }else{
            apellidos.classList.remove("is-invalid")
            apellidos.classList.add("is-valid")
        }
        if (correo.value == "") {
            correo.focus()
            correo.classList.add("is-invalid")
            correo.classList.remove("is-valid")
        }else{
            correo.classList.remove("is-invalid")
            correo.classList.add("is-valid")
            

        }
    }
}