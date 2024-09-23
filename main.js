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
    validarFortaleza(password);
    }
function limpiar() {
    contrasena.value = '';
    mensaje.innerHTML = '';
}

function validarFortaleza(password) {
    const contieneMayuscula = /[A-Z]/.test(password);
    const contieneNumero = /\d/.test(password);

    if (!contieneMayuscula || !contieneNumero) {
        mensaje.innerHTML = 'La contraseña es débil. Debe contener al menos una letra mayúscula y un número.';
    } else {
        mensaje.innerHTML = '';
    }
}














