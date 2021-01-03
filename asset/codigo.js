
document.getElementById('divPantalla2').style.display = 'none';


// Ejercicio 1 esto es un cambio hecho en github si lo ves en visual studio es porque funciono
document.getElementById('btnEj1').addEventListener('click', btnHandlerj1);
function btnHandlerj1() {

    const palabra = document.getElementById('txtEj1').value;

    let palabraInvertida = invertirPalabra(palabra);
    document.getElementById('msgEj1').innerText = palabraInvertida;

}

function invertirPalabra(palabra) {
    let palabraInvertida = '';

    for (i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    return palabraInvertida;


}
// Ejercicio 2
document.getElementById('btnEj2').addEventListener('click', btnHandlerj2);
function btnHandlerj2() {

    const texto = document.getElementById('textoEj2').value;
    const letra = document.getElementById('letraEj2').value;

    let respuesta = contarLetra(letra, texto);
    document.getElementById('msgEj2').innerText = respuesta;

}

function contarLetra(letra, texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }
    return contador;
}

// Ejercicio 3
document.getElementById('btnEj3').addEventListener('click', btnHandlerj3);
function btnHandlerj3() {

    texto = obtenerCampo('textoEj3').toLowerCase();


    let respuesta = contarVocales(texto);
    document.getElementById('msgEj3').innerText = respuesta;

}

function contarVocales(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a' || texto[i] == 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
            contador++;
        }
    }
    return contador;
}

document.getElementById('btnEj4Minusculas').addEventListener('click', convertirMinusculas);

function convertirMinusculas() {
    const textoEj4 = obtenerCampo('txtEj4').toLowerCase();
    obtenerElementoHtml('msgEj4').innerText = textoEj4;


}
document.getElementById('btnEj5Mayusculas').addEventListener('click', convertirMayusculas);

function convertirMayusculas() {
    const textoEj5 = obtenerCampo('txtEj5').toUpperCase();
    obtenerElementoHtml('msgEj5').innerText = textoEj5;


}
document.getElementById('btnEj6Subcadena').addEventListener('click', btnEj6Handler);

function btnEj6Handler() {
    const texto = obtenerCampo('textoEj6');
    const subcadena = obtenerCampo('subcadenaEj6');
    let respuesta = 'Sí, es subcadena';
    if (verificarSubcadena(texto, subcadena)) {
        respuesta = 'No es una subcadena';
    }
    obtenerElementoHtml('msgEj6').innerText = respuesta;

}

function verificarSubcadena(_texto, _subcadena) {

    return (_texto.indexOf(_subcadena) === -1);

}



document.getElementById('btnEj7ContarPalabras').addEventListener('click', btnEj7Handler);

function btnEj7Handler() {
    const texto = obtenerCampo('textoEj7').trim();


    let respuesta = contarPalabras(texto);
    obtenerElementoHtml('msgEj7').innerText = 'Cantidad de palabras: ' + respuesta;

}

function contarPalabras(_texto) {
    let contadorPalabras = 1;
    if (_texto !== '') {
        for (let i = 0; i <= _texto.length; i++) {
            if (_texto[i] === ' ') {
                contadorPalabras++;
            }

        }
    } else {
        contadorPalabras = 0;

    }
    return contadorPalabras;
}
document.getElementById('btnEj8Chequear').addEventListener('click', chequearPalabraEj8);

function chequearPalabraEj8() {
    const palabra = obtenerCampo('textoEj8');
    let respuesta = 'No coincide la primera y la ultima letra de la palabra';
    if (palabra[0] === palabra[palabra.length - 1]) {
        respuesta = 'Sí, coinciden la primera y ultima letra de la palabra';
    }
    obtenerElementoHtml('msgEj8').innerText = respuesta;

}
document.getElementById('btnEj9ChequearMatricula').addEventListener('click', btnHandlerEj9);

function btnHandlerEj9() {
    const matriculaEj9 = obtenerCampo('matriculaEj9').trim().toLowerCase();

    let respuesta = chequearMatriculaEj9(matriculaEj9);
    obtenerElementoHtml('msgEj9').innerText = respuesta;


}

function chequearMatriculaEj9(_matricula) {
    let primeraLetra = _matricula[0];

    let respuesta = '';
    switch (primeraLetra) {

        case 'a':
            respuesta = 'Pertenece a: ' + 'Canelones';
            break;
        case 'b':
            respuesta = 'Pertenece a: ' + 'Maldonado';
            break;
        case 'c':
            respuesta = 'Pertenece a: ' + 'Rocha';
            break;
        case 'd':
            respuesta = 'Pertenece a: ' + 'Treinte y Tres';
            break;
        case 'e':
            respuesta = 'Pertenece a: ' + 'Cerro Largo';
            break;
        case 'f':
            respuesta = 'Pertenece a: ' + 'Rivera';
            break;
        case 'g':
            respuesta = 'Pertenece a: ' + 'Artigas';
            break;
        case 'h':
            respuesta = 'Pertenece a: ' + 'Salto';
            break;
        case 'i':
            respuesta = 'Pertenece a: ' + 'Paysandú';
            break;
        case 'j':
            respuesta = 'Pertenece a: ' + 'Rio';
            break;
        case 'k':
            respuesta = 'Pertenece a: ' + 'Soriano';
            break;
        case 'l':
            respuesta = 'Pertenece a: ' + 'Colonia';
            break;

        case 'm':
            respuesta = 'Pertenece a: ' + 'San Jose';
            break;

        case 'n':
            respuesta = 'Pertenece a: ' + 'Flores';
            break;

        case 'o':
            respuesta = 'Pertenece a: ' + 'Florida';
            break;

        case 'p':
            respuesta = 'Pertenece a: ' + 'Lavalleja';
            break;

        case 'q':
            respuesta = 'Pertenece a: ' + 'Durazno';
            break;
        case 'r':
            respuesta = 'Pertenece a: ' + 'Tacuarembo';
            break;
        case 's':
            respuesta = 'Pertenece a: ' + 'Montevideo';
            break;
        default:
            respuesta = 'no existe en el departamento, para el codigo de matricula';

    }
    return respuesta;
}

document.getElementById('btnEj10').addEventListener('click', btnHandlerEj10);

function btnHandlerEj10() {
    const texto = obtenerCampo('txtEj10');
    const letra = obtenerCampo('txtLetraEj10');

    obtenerElementoHtml('msgEj10').innerText = remplazarLetra(texto, letra);
}

function remplazarLetra(_texto, _letra) {
    let nuevaPalabra = '';
    for (let i = 0; i < _texto.length; i++) {

        if (_texto[i] === _letra) {
            nuevaPalabra += '*'
        } else {
            nuevaPalabra += _texto[i]
        }

    }
    return nuevaPalabra;
}

document.getElementById('btnEj11').addEventListener('click', btnHandlerEj11);

function btnHandlerEj11() {
    const texto = obtenerCampo('txtEj11');


    obtenerElementoHtml('msgEj11').innerText = primeraLetraMayuscula(texto);
}

function primeraLetraMayuscula(_texto) {
    let letra;
    let nuevaPalabra = '';

    for (let i = 0; i < _texto.length; i++) {
        if (i === 0) {
            letra = _texto[i].toUpperCase();// solo el primer cáracter en mayuscula

        } else {
            letra = _texto[i].toLowerCase();
        }
        nuevaPalabra += letra;
    }
    return nuevaPalabra;
}
document.getElementById('btnEj12').addEventListener('click', btnHandlerEj12);

function btnHandlerEj12() {
    obtenerElementoHtml('msgEj12').innerHTML = '';
    const texto = obtenerCampo('txtEj12').trim();


    let cantMayusculas = contarMayusculasMinusculas(texto);
    let cantMinusculas = texto.length - cantMayusculas;
    obtenerElementoHtml('msgEj12').innerHTML = '<p>' + 'Cantidad de Mayusculas: ' + cantMayusculas + '</p>';
    obtenerElementoHtml('msgEj12').innerHTML += '<p>' + 'Canidad de minusculas: ' + cantMinusculas + '</p>';





}

function contarMayusculasMinusculas(_texto) {// se cuentan solo las mayusculas el resto se considera minusculas
    let contadorMayuscula = 0;


    for (let i = 0; i < _texto.length; i++) {
        if (_texto.charCodeAt(i) >= 65 && _texto.charCodeAt(i) <= 90) {
            contadorMayuscula++;




        }

    }
    return contadorMayuscula;
}

document.getElementById('btnEj13').addEventListener('click', btnhandlerEj13);

function btnhandlerEj13() {

    const texto = obtenerCampo('txtEj13');

    let textoSinPuntos = eliminarEspaciosInternos(texto);


    let resultado = 'No es Palidromo';
    if (esPalidromo(textoSinPuntos)) {
        resultado = 'Es Palidromo';

    }
    obtenerElementoHtml('msgEj13').innerText = resultado;

}

function eliminarEspaciosInternos(_texto) {// eliminar los espacios internos para que el orden de estos no afecten la dererminaciond del palindromo
    let textoSinPuntos = '';
    for (let i = 0; i < _texto.length; i++) {

        if (_texto[i] !== ' ') {
            textoSinPuntos += _texto[i];
        }

    }

    return textoSinPuntos.toLowerCase();// se evita diferenciar una palabra que empieza con mayuscula y termina es minuscula

}



function esPalidromo(_texto) {
    let nuevaPalabra = '';
    for (let i = _texto.length - 1; i >= 0; i--) {

        nuevaPalabra += _texto[i];

    }
    return nuevaPalabra === _texto;

}

document.getElementById('btnEj14').addEventListener('click', btnEj14Handler);

function btnEj14Handler() {
    const texto = obtenerCampo('txtEj14');

    let respuesta = contarRepeticionPrimerCaracter(texto);
    obtenerElementoHtml('msgEj14').innerText = respuesta;
}

function contarRepeticionPrimerCaracter(_texto) {
    let primerCaracter = _texto[0];
    let contador = 0;

    for (let i = 0; i < _texto.length; i++) {

        if (_texto[i] === primerCaracter) {
            contador++;
        }
    }
    return contador;
}
document.getElementById('btnEj15').addEventListener('click', btnEj15Handler);

function btnEj15Handler() {
    const texto = obtenerCampo('txtEj15');

    let respuesta = obtenerPenultimaRepeticion(texto);
    obtenerElementoHtml('msgEj15').innerText = respuesta;
}


function obtenerPenultimaRepeticion(_texto) {//cada vez que aparezca antes de reasignar ultima asigno con ese valor a la penultima, asi cada vez que asigne la ultima guardare su antiguo valor en la penultima
    let ultimaPosicion = -1;
    let penultimaRepeticion = -1;
    for (let i = 0; i < _texto.length; i++) {
        if (_texto[i] === 'a') {
            penultimaRepeticion = ultimaPosicion;
            ultimaPosicion = i;
        }



    }
    return penultimaRepeticion;
}
document.getElementById('btnEj16').addEventListener('click', btnEj16Handler);

function btnEj16Handler() {


    const cedula = obtenerCampo('cedulaEj16');

    let resultado = 'Cedula Invalida';
    if (verificarCedula(cedula)) {
        resultado = 'Cedula Valida';
    }
    obtenerElementoHtml('msgEj16').innerText = resultado;


}

function verificarCedula(_cedula) {
    let coeficientes = '2987634';
    let sumaProductos = 0;
    _cedula = eliminarPuntos(_cedula);
    let digitoValido;
    let ultimodigitoCedula = _cedula.substr(-1);// se considera ultimo caracter  como digito verificador

    // se arma una cadena con los digitos antes de la barra

    if (_cedula[_cedula.length - 2] == '-' && (_cedula.length <= 9)) {


        // se arma una cadena con los digitos antes de la barra
        let primerosSieteNumeros = _cedula.substring(0, _cedula.indexOf('-'));

        if (primerosSieteNumeros.length < 7) {// en caso de ser 6 cifras se agrega un cero a la izquierda para que no de error en el calculo
            primerosSieteNumeros = 0 + primerosSieteNumeros
        }
        for (let j = 0; j < primerosSieteNumeros.length; j++) {// se calcula el producto de los 7 digitos y los coeficientes
            sumaProductos += primerosSieteNumeros[j] * coeficientes[j]
        }

        digitoValido = sumaProductos * 9 % 10;// lo que le falta para ser modulo de 10 es lo mismo que le sobra siendo modulo de 9
    }
    return digitoValido == ultimodigitoCedula;// se compara con dos signos para que de true al comparar un caracter string equialente en numero


}
function eliminarPuntos(_texto) {// eliminar los puntos internos
    let textoSinPuntos = '';
    for (let i = 0; i < _texto.length; i++) {

        if (_texto[i] !== '.') {
            textoSinPuntos += _texto[i];
        }

    }

    return textoSinPuntos;
}

document.getElementById('btnEj17').addEventListener('click', btnHandlerEj17);


function btnHandlerEj17() {

    const numeroTarjeta = obtenerCampo('numeroTarjeta');

    let resultado = 'Documento invalido';
    if (algoritmoLuhn(numeroTarjeta)) {
        resultado = 'Documento valido';
    }
    obtenerElementoHtml('msgEj17').innerText = resultado;

}


function algoritmoLuhn(_texto) {

    let ultimoCaracterTarjeta = _texto.substr(-1);
    let sumaDigitos = 0;
    let cadaDigito = '';
    for (let i = _texto.length - 2, j = 0; i >= 0; i--, j++) {
        cadaDigito = _texto[i];

        if (j % 2 === 0) {
            cadaDigito = _texto[i] * 2
            if (cadaDigito >= 10) {
                cadaDigito = 1 + (cadaDigito - 10);
            }

        }
        sumaDigitos += Number(cadaDigito);

    }
    let digitoValido = sumaDigitos * 9 % 10;
    return ultimoCaracterTarjeta == digitoValido;

}


document.getElementById('btnEj18').addEventListener('click', btnEj18Handler);

function btnEj18Handler() {
    let matricula = obtenerCampo('matriculaEj18').toLowerCase();// como coloque minsuculas en el switch case considerare todo lo ingresado como minuscula
    let respuesta;
    if (longitudMatricula(matricula)) {// verfico que sen 7 caracteres
        if (validarCaracteres(matricula)) {// verifico que sean solo letras y numeros omito las mayusculas porque nunca van entrar gracias a la funcion anterior
            if (validarMatricula(matricula)) {// valido que el orden de letras y numeros cumplan con el formato de una matricula
                respuesta = chequearMatriculaEj9(matricula);// hechas todas las validaciones selecciono el departamento

            } else {
                respuesta = 'verifique, matricula no coinicide con formato';
            }

        } else {
            respuesta = 'solo permiten letras y numeros';
        }

    } else {
        respuesta = 'La Matricula debe tener 7 caracteres';
    }
    obtenerElementoHtml('msgEj18').innerText = respuesta;

}
function longitudMatricula(_matricula) {
    return _matricula.length === 7;
}



function validarCaracteres(_matricula) {
    let i = 0;
    let caracterInvalido = false;

    while (!caracterInvalido && i < _matricula.length) {// recorro la cadena mientras erro no sea verdadero o que haya recorrido todos los caracteres
        let rango1 = _matricula.charCodeAt(i) < 48;//Fuera del rango admitido
        let rango2 = _matricula.charCodeAt(i) > 57 && _matricula.charCodeAt(i) < 97;//Fuera del rango admitido
        let rango3 = _matricula.charCodeAt(i) > 122;//Fuera del rango admitido


        if (rango1 || rango2 || rango3) {//si se da uno u otro caso hay error y se cumple una de las condiciones para salir del bucle
            caracterInvalido = true;
        }
        i++;
    }

    return !caracterInvalido;// me interesa que la funcion devuelva verdadero si nunca encuentra un caracter difrente a numero o letra
}






function validarMatricula(_matricula) {
    let primeraLetra = isNaN(_matricula[0]);// primera letra  es un numero
    let segundaLetra = isNaN(_matricula[1]);//segunda letra es un numero
    let terceraLetra = isNaN(_matricula[2]);//tercera letra  es un numero
    let seisCaracteresNumericos = !isNaN(_matricula.substring(1));// valida si los caracreres a partir del indice uno no son numeros
    let cuatroCaractesNumericos = !isNaN(_matricula.substring(3));// valida los caracreres a partir del indice tres no son numeros



    return (primeraLetra && seisCaracteresNumericos) || (primeraLetra && segundaLetra && terceraLetra && cuatroCaractesNumericos);// estas son las condiciones que se deben cumplir para que matricula sea valida
}


document.getElementById('btnAhorcado').addEventListener('click', btnHandlerAhorcado);

let palabraAhorcado = '';
let palabraDibujo = '';
function btnHandlerAhorcado() {
    palabraAhorcado = obtenerCampo('txtPalabraAhorcado');


    if (validarPalabra(palabraAhorcado)) {
        palabraDibujo = mostrarJuego(palabraAhorcado).trim();
        obtenerElementoHtml('divPantalla1').style.display = 'none';

        obtenerElementoHtml('divPantalla2').style.display = 'block'
        obtenerElementoHtml('msgPantalla2').innerText = palabraDibujo;




    } else {
        obtenerElementoHtml('msgPantalla1').innerText = 'Verifique, No debe comenzar ni terminar con espacios y la longitud debe ser mas de un caracter';

    }


}
function validarPalabra(_texto) {
    return _texto.length > 1 && _texto.trim() === _texto;
}
function mostrarJuego(_texto) {
    let nuevaPalabra = '';
    for (let i = 0; i < _texto.length; i++) {
        if (_texto[i] === ' ') {
            nuevaPalabra += '/'
        } else {
            nuevaPalabra += '_ ';
        }

    }
    return nuevaPalabra;

}
let contadorErrores = 0;
document.getElementById('btnAhorcadoAdivinar').addEventListener('click', btnHandlerAhorcado2);
function btnHandlerAhorcado2() {
    const letra = obtenerCampo('txtAdivinar');


    if (verificarLetra(letra, palabraAhorcado)) {
        palabraDibujo = jugarAhorcado(letra, palabraAhorcado, palabraDibujo);
        obtenerElementoHtml('msgPantalla2').innerText = palabraDibujo;
    
    }else{
        contadorErrores++;
        let patas = " _// \\_ ";
        let cuerpo = ' | | ';
        let cabeza = ' O ';


        switch (contadorErrores) {
            case 1:
                agregarDibujo = `<p>${cabeza}</p>`
                break;
            case 2:
                agregarDibujo = `<p>${cuerpo}</p>`
                break;
            case 3:
                agregarDibujo = `<p>${patas}</p>`;
                break;
            case 4:
                agregarDibujo = `<p>${'Juego Terminado'}</p>`;
                obtenerElementoHtml('btnAhorcadoAdivinar').disabled = true
                break;
           
          
        }
        obtenerElementoHtml('dibujo').innerHTML+=agregarDibujo;

    }
      


    }
    function verificarLetra(pletra, pPalabra) {
        let letraEncontrada = false;
        for (let i = 0; i < pPalabra.length; i++) {
            if (pletra === pPalabra[i]) {
                letraEncontrada = true;
            }

        }
        return letraEncontrada;
    }
 
    function jugarAhorcado(pLetra, pPalabra, pPalabraDibujo) {

        let nuevaPalabra = '';
        let nuevaLetra = '';

        for (let i = 0; i < pPalabra.length; i++) {

            if (pPalabraDibujo[i] !== '_ ') {

                if (pLetra === pPalabra[i]) {
                    nuevaLetra = pLetra;

                } else {

                    nuevaLetra = pPalabraDibujo[i];

                }


            } else {
                nuevaLetra = pPalabraDibujo[i];
            }
            nuevaPalabra += nuevaLetra;
        }
        return nuevaPalabra;


    }
    document.getElementById('btnEjercicio2').addEventListener('click', btnHandlerSimulacro2);

    function btnHandlerSimulacro2() {
        const cantHoras = obtenerCampo('txtCantHorasEjercicio1Simulacro');
        const selecion = obtenerCampo('slcEj2');
        let resultado;
        if (validarHasta23Horas(Number(cantHoras))) {
            resultado = calcularCosto(Number(cantHoras), 'cancha');
            if (selecion == 's') {
                resultado += calcularCosto(Number(cantHoras), 'parrillero')
            }



        } else {
            resultado = 'ingrese horas validas';

        }
        obtenerElementoHtml('msgEjercicio2').innerText = resultado;


    }

    function validarHasta23Horas(_cantHoras) {



        return (!isNaN(_cantHoras) && Number(_cantHoras) >= 1 && Number(_cantHoras) <= 23);


    }
    function calcularCosto(horas, _tipoEspacio) {
        let costo;
        if (_tipoEspacio === 'parrrillero') {
            costo = 1000;
        } else {
            costo = 2000;
        }
        return costo * horas;

    }












