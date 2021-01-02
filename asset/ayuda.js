

function obtenerCampo(_texto) {
    return document.getElementById(_texto).value;

}
function obtenerElementoHtml(_elemento) {
    return document.getElementById(_elemento);

}
function esPositivo(_texto) {


    return (Number(_texto) > 0);


}


function esNumero(_texto) {



    return (!isNaN(_texto) && _texto !== "");

}
function agregarEvento(item, _funcion) {
    item.addEventListener('click', _funcion)
}

function eliminarEspaciosInternos(_texto, pCaracter) {
    let textoSinPuntos = '';
    for (let i = 0; i < _texto.length; i++) {

        if (_texto[i] !== pCaracter) {
            textoSinPuntos += _texto[i];
        }

    }

    return textoSinPuntos;

}

function validarCorreo(correo) {



        if (hayUnArroba(correo)) {
            let cantidadLetras = correo.substring(correo.indexOf('@'), correo.lastIndexOf('.')).length > 0 && correo.substring(0, correo.indexOf('@')).length > 0 && correo.substring(correo.indexOf('.')).length > 1
            // al menos un caracter entre el arroba y el punto, al menos un caracter antes del arroba y al menos un caracter despues del punto
            let ordenArrobaPunto = correo.lastIndexOf('.') > correo.indexOf('@') + 1 && correo.indexOf('@') >= 1
            return cantidadLetras && ordenArrobaPunto;
        } else {
            return false;
        }

}
function hayUnArroba(correo) {
    let cont = 0;
    for (let i = 0; i < correo.length; i++) {
        if (correo[i] === '@') {
            cont++;
        }
    }
    return cont === 1;
}

function caracteresValidos(correo) {
    let i = 0;
    let rango1 = true;
    let rango2 = true;
    let rango3 = true;


    while ((i < correo.length) && (rango1 || rango2 || rango3)) {
        rango1 = correo.charCodeAt(i) >= 48 && correo.charCodeAt(i) <= 57;
        rango2 = correo.charCodeAt(i) >= 64 && correo.charCodeAt(i) <= 90;
        rango3 = correo.charCodeAt(i) >= 97 && correo.charCodeAt(i) <= 122;
     
        i++;

    }
    return rango1 || rango2 || rango3 ;
}

function hayMayuscula(contrasena) {
    let existeMayuscula = false;
    let i = 0;
    while (i < contrasena.length && !existeMayuscula) {
        

        existeMayuscula = contrasena.charCodeAt(i) >= 64 && contrasena.charCodeAt(i) <= 90;
        i++;
        

    }
    return existeMayuscula;
}


function hayNumero(contrasena) {
    let i = 0;
    let hay = false;

    while (i < contrasena.length && !hay) {
        hay = !isNaN((contrasena[i]));
        i++;
    }
    return hay;

}

function validarContrasena(contrasena) {
    if(caracteresValidos(contrasena)){
    if (contrasena.length >= 6) {
        if (hayMayuscula(contrasena)) {
            if (hayNumero(contrasena)) {
                if (contrasena.indexOf(' ') === -1)
                    return true;
            }
            return false;
        }
        return false;
    }
    return false
}else{
    return false;
}
}

/*function validarCorreo(_correo) {

    let arroba = 0; //variables auxiliares
    let punto = 0;

    if (_correo.length > 3 && _correo) { // analiza si el correo ingresado no cuenta con espacios al principio y al final, y si tiene más de 3 caracteres

        for (let i = 0; i < _correo.length; i++) {   // repetitiva para analizar cada caracter del string

            if (_correo[i] === '@') {    // encuentra en que caracter se encuentra el arroba
                arroba = i;
            }

            if (_correo[i] === '.') {  // encuentra en que caracter se encuentra el punto
                punto = i;
            }

            if (_correo[i] === ' ') { // encuentra si hay algun espacio dentro del string (en caso de que si la funcion corta y retorna falso)
                return false
            }
        }

        if (arroba > 0 && (arroba + 1) < punto && punto < (_correo.length - 1)) { // arroba > 0 se pone para que haya algun carater antes del mismo, (arroba + 1) < punto s
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}*/








