
/*  - CLASE 01 -
CONECECTAMOS ELEMENTOS DE html EN js.
"document.querySelector('elemento'); ---> DE ESTA FORMA CONECTAMOS CON UN ELEMENTO DE html.
"variable.innerHTML = 'Mensaje'" ---> DE ESTA MANERA "INSERTAMOS" UN MENSAJE EN EL ELEMENTO html QUE TRAEMOS
Le asignamos el elemento "h1" a la variable "titulo"
*/
/*let titulo = document.querySelector('h1'); 
    titulo.innerHTML = "Juego del número secreto"
let parrafo = document.querySelector("p");
    parrafo.innerHTML = "Indica un número del 1 al 10:"*/

let numeroSecreto = 0;
//console.log("El número secreto es: " + numeroSecreto);
let intentos = 1;
let listaNumerosSorteados = [];
let numeroIntentosMaximo = 10;



function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); //DEBEMOS AGREGAR EL "value" PARA RETORNAR EL VALOR DEL INPUT = Número
    
    console.log("Tu número es: " + numeroDeUsuario);
    console.log("Intentos: " + intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("h1","Lo lograste");
        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        console.log("Adivinaste el número secreto: " + numeroSecreto);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { //Cuando la persona no acierte se muestran estos mensajes
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('h1',`Intentalo de nuevo, llevas ${intentos} ${(intentos === 1) ?'intento' : 'intentos'}` );
            asignarTextoElemento("p","El número secreto es menor");
            console.log("El número secreto es menor")
        } else {
            asignarTextoElemento('h1',`Intentalo de nuevo, llevas ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
            asignarTextoElemento("p","El número secreto es mayor");
            console.log("El número secreto es mayor")
        }      
    intentos++;
    limpiarIntentos();
    }
    return;
}

function limpiarIntentos() {
   document.querySelector("#valorUsuario").value = "";
   //valorIntentos.value = "";  //DEBEMOS AGREGAR .value PARA CUMPLIR CON LA CONDICION SOBRE EL VALOR

   /*¿COMO FUNCIONA? LA FUNCION HACE QUE EL VALOR DEL input CON id="valorUsuario" TENGA EL VALOR VACIO, 
    EL MECANISMO FUNCIONA PORQUE SE LLAMA LA FUNCION MIENTRAS EL USUARIO NO ACIERTA EL NÚMERO
*/
}

//  - CLASE 02 -

 /* ---> ESTA FUNCIÓN ES ESPECIFICA. EL OBJETIVO ES REUTILIZAR Y QUE LA FUNCION SEA GENERICA.
function asignarTextoElemento () {
   
    let titulo = document.querySelector('h1'); 
        titulo.innerHTML = "Juego del número secreto"

-  LO QUE HICIMOS FUE ELIMINAR LAS DECLARACIONES DE LAS VARIABLES, REDUCIENDO EL CODIGO Y HACIENDOLO REUTILIZABLE.

PARA ESTO, AL DELCARAR LA FUNCION, ENTRE ( ) LE ASIGNAMOS PARAMETROS. 
    DEFINIMOS LA VARIABLE GENERICA DE LA ACCIÓN Y LA CONECTAMOS CON EL ELEMENTO html (elemento 1)
    LUEGO INSERTAMOS EL TEXTOP O MENSAJE (elemento 2)

    ASIGNAMOS LA FUNCION DE GENERAR NUMERO SECRETO
    */
function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    /*
    let numeroSecretoUsuario = Math.floor(Math.random()*10)+1;
    return numeroSecreto;
    --ESTO LO CAMBIAMOS POR

    return Math.floor(Math.random()*10)+1; 

    AHORA NECESITAMOS SABER SI ESE NUMERO SORTEADO HACE PARTE DE LA LISTA Y EJECUAR UNA ACCION DEPENDIENDO DE LA RESPUESTA
    */
    let numeroGenerado = Math.floor(Math.random()*numeroIntentosMaximo)+1; 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroIntentosMaximo){
        asignarTextoElemento("p","Ya se sortearon todas las opciones")
        console.log("Ya se sortearon todas las opciones")
    } else {
        //SI EL NUMERO GENERADO ESTA EN LA LISTA, SE DA UNA OPERACION SEGUN LA RESPUESTA 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

            //ASIGNAMOS LA FUNCION A LA VARIABLE, DENTRO DE LA FUNCION RETORNAMOS LA OPERACIÓN
      }  //ESTA FORMA FUNCIONA PORQUE (CREO) PORQUE SOLO TENEMOS 1 OPERACIÓN Y/O 1 O 0 PARAMETROS DENTRO DE LA FUNCIÓN
}
//DE ESTA FORMA LLAMAMOS LA MISMA FUNCION Y SOLO DEBEMOS CAMBIAR EL ELEMENTO html(elemento 1) Y ASIGNARLE EL ELEMENTO 2(texto)

/*  - CLASE 03 -

- CAMBIAMOS EL NOMBRE DE LA FUNCIÓN intentoDeUsuaruio --> verificarIntento (DEBEMOS CAMBIARLO EN TODAS PARTES DONDE SE MENCIONA LA FUNCIÓN)

- COMPARAMOS NO SOLO EL VALOR SINO TAMBIEN EL TIPO DE DATO QUE ESTAMOS RECIBIENDO EN LA CONSOLA, PARA COMPARTIR NUMEROS CON NUMEROS Y NO STING CON NUMEROS

    parseInt = CONVIERTE EL STRING A UN NÚMERO

- AGREGAMOS LA CONDICION Y ACCIÓN PARA CUANDO EL USUARIO ACIERTE O NO 

- AGREGAMOS EL CONTEO DE INTENTOS Y ADAPTAMOS EL MENSAJE 

- Evaluación y Adaptación del mensaje

asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);

${(intentos === 1) ? 'intento : 'intentos'} DE ESTA FORMA IDENTIFICAMOS SI HAY O 1 O MAS INTENTOS Y ADAPTAMOS EL MENSAJE

- SGREGAMOS Y HABILITAMOS EL BOTON DE REINICIAR EL JUEGO
    CREAMOS LA FUNCION DE CONDICIONES INICIALES Y LA FUNCION DE REINICIAR EL JUEGO 
    UTILIZAMOS EL "removeAttribute" y "setAttribute" que nos permiten habilitar y desahibiltar el boton respectivamente 
*/

function reiniciarJuego() {
    /*LO QUE DEBE HACER LA FUNCION: Reiniciar el juego
    1. Limpiar el Input
    2. Indicar mensajes iniciales nuevamente 
    3. Generar numero aleatorio nuevamente 
    4. Deshabilitar el boton de nuevo juego
    5. Iniciar nuevamente los intentos.
    */

    limpiarIntentos();
    condicionesIniciales();
    //numeroSecreto = generarNumeroSecreto();
    //intentos = 1;
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

function condicionesIniciales (){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p","Indica un número del 1 al " + numeroIntentosMaximo + ":");
    numeroSecreto = generarNumeroSecreto();
    console.log("El número secreto es : " + numeroSecreto);
    intentos = 1;
}

condicionesIniciales();

/*  - CLASE 04 -

BUSCAMOS QUE EL NÚMERO ALEATORIO NO SE REPITA:

- 
*/