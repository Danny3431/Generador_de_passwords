let cant = document.getElementById('cantidad'); 
let boton = document.getElementById('generar');
let btlimpiar =document.getElementById('limpiar')
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

boton.addEventListener('click', generar);
btlimpiar.addEventListener('click', limpiar);

function generar() {
    let numDigt = parseInt(cant.value);

    // Verifica si la cantidad de caracteres es válida
    if (numDigt < 8) {
        alert(`La cantidad de caracteres debe ser mayor o igual a 8`);
        return; // Salir de la función si la condición no se cumple
    }

    let password = '';

    // Generar la contraseña aleatoria
    for (let index = 0; index < numDigt; index++) {
        let caractAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caractAleatorio;
    }

    contrasena.value = password;
    validarContrasena(password);
    }
function limpiar() {
    contrasena.value = '';
    mensaje.innerHTML = '';
}

// Función para validar la fortaleza de la contraseña
function validarContrasena(contrasena) {
    const mensaje = document.getElementById('mensaje');
    
    // Expresiones regulares para validar
    const tieneMayuscula = /[A-Z]/.test(contrasena); // Verifica si tiene al menos una letra mayúscula
    const tieneMinuscula = /[a-z]/.test(contrasena); // Verifica si tiene al menos una letra minúscula
    const tieneNumero = /\d/.test(contrasena); // Verifica si tiene al menos un número
    const tieneEspecial = /[!@#$%^&*()_+]/.test(contrasena); // Verifica si tiene al menos un carácter especial

    // Condiciones para una contraseña fuerte
    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial && contrasena.length >= 8) {
        mensaje.textContent = "✅ Contraseña fuerte";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "⚠️ Contraseña débil: Debe tener al menos una letra mayúscula, una minúscula, un número, y un carácter especial.";
        mensaje.style.color = "red";
    }
}














