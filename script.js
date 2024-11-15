// Array para almacenar el historial de operaciones realizadas
const historial = [];
// Llamado a la funcion principal de calculadora
calculadora();
// Función principal de la calculadora: Declara las variables que se van a usar y las funciones de las operaciones.
function calculadora(){    
    let num1; //Primer numero de la operacion, el cual es ofrecido por el usuario.
    let num2; //Segundo numero de la operacion, el cual es ofrecido por el usuario.
    let resultado; 
    let tipOperacion;
    let decision;
    let operacionRealizada;
    //Creacion del objeto el cual se almacenara en el array historial.
    function calculo(tipOperacion, num1, num2, resultado){
        this.tipOperacion=tipOperacion;
        this.num1=num1;
        this.num2=num2;
        this.resultado=resultado;
    }
    //Funcion suma, se le pasa por parametros los numeros a operar, realiza la operacion y almacena el resultado en la variable resultado.
    //Devuelve un string con la operacion en tipo string para almacenarlo en el historial.
    function suma(x, y){
        resultado = x + y;
        console.log(`${x} + ${y} = ${resultado}`);
        return `${x} + ${y} = ${resultado}`;
    }
    //Funcion resta, se le pasa por parametros los numeros a operar, realiza la operacion y almacena el resultado en la variable resultado.
    //Devuelve un string con la operacion en tipo string para almacenarlo en el historial.
    function resta(x, y){
        resultado = x - y;
        console.log(`${x} - ${y} = ${resultado}`);
        return `${x} - ${y} = ${resultado}`;
    }
    //Funcion multiplicacion, se le pasa por parametros los numeros a operar, realiza la operacion y almacena el resultado en la variable resultado.
    //Devuelve un string con la operacion en tipo string para almacenarlo en el historial.
    function multiplicacion(x, y){
        resultado = x * y; 
        console.log(`${x} * ${y} = ${resultado}`);
        return `${x} * ${y} = ${resultado}`;
    }
    //Funcion division, se le pasa por parametros los numeros a operar, realiza la operacion y almacena el resultado en la variable resultado.
    //Devuelve un string con la operacion en tipo string para almacenarlo en el historial.
    function division(x, y){
        //Si se intenta operar por 0 avisa por consola y devuelve un null para no almacenar la operacion en el historial.
        if(y == 0){
            return null;
        }else{
            resultado = x / y; 
            console.log(`${x} / ${y} = ${resultado}`);
            return `${x} / ${y} = ${resultado}`;
        }
    }
    //Funcion raizCuadrada, se le pasa por parametros los numeros a operar, realiza la operacion y almacena el resultado en la variable resultado.
    //Devuelve un string con la operacion en tipo string para almacenarlo en el historial.
    function raizCuadrada(x){
        resultado = Math.sqrt(x);
        console.log(`La raiz cuadra de ${x} es ${resultado}.`);
        return `Raiz cudrada de ${x} = ${resultado}`;
    }
    //Funcion operacion, se le pasa por parametros los dos numeros a operar y el tipo de operacion. 
    //Despues recorre el switch en busca de el tipo a operacion a realizar y en el case llama a la funcion que realiza la operacion (suma, resta, etc...).
    function operacion(num1, num2, tipOperacion){
        switch(tipOperacion){
            case "suma":
                operacionRealizada = suma(num1, num2);
                break;
            case "resta":
                operacionRealizada = resta(num1, num2);
                break;
            case "multiplicacion":
                operacionRealizada = multiplicacion(num1, num2);
                break;
            case "division":
                operacionRealizada = division(num1, num2);
                break;
            case "raiz cuadrada": 
                operacionRealizada = raizCuadrada(num1);
                break;
            case "-1":
                alert(`Saliendo del programa.`);
                break;
            default:
                alert("Asegurese de escribir bien el tipo de operación que desea realizar.");
                break;
        }
        //Si la operacion es valida, se crea un objeto de la operacion y se almacena el objeto en el array historial
        if (operacionRealizada && !isNaN(num1) && !isNaN(num2)) {
            historial.push(new calculo(tipOperacion, num1, num2, resultado));
        } 
        //Si la operacion es valida, es una raiz cuadrada, el primer numero es de tipo numerico y el segundo no.
        //Se crea un objeto de la operacion y se almacena en el array historial.
        if(operacionRealizada && tipOperacion == `raiz cuadrada` && !isNaN(num1) && isNaN(num2)) {
            historial.push(new calculo(tipOperacion, num1, resultado));
        }
    }
    //Funcion validarInput, se encarga de verificar que los datos introducidos son validos para realizar la operacion.
    function validarInput(){
        //Almacena la operacion que desea realizar el usuario en un String, si introduce -1 finaliza el programa.
        tipOperacion = prompt(`Indica el tipo de operacion: suma, resta, multiplicacion, raiz cuadrada o si desea salir -1.`);
        //Si el usuario no introduce "-1", se le pide numeros.
        if(tipOperacion != "-1"){
            num1 = parseFloat(prompt(`Indica el primer numero:`));
                //Si la operacion a realizar es diferente a "raiz cuadrada", se solicita al usuario un segundo numero.
            if(tipOperacion != "raiz cuadrada"){
                num2 = parseFloat(prompt(`Indica el segundo numero:`));
            }
            //Si la operacion a realizar es una operacion y se intenta dividir por 0, se avisa al usuario con un alert.
            if(tipOperacion == "division" && num2 == 0){
                alert(`No se puede realizar una division de 0.`);
            }
            //Si el usuario introduce una operacion distinta a raiz cuadrada e introduce valores no numericos, se le avisa con un alert.
            if(isNaN(num1) || isNaN(num2)){
                if(tipOperacion != "raiz cuadrada"){
                alert(`Se deben introducir numeros.`)
                }
            }
            //Si el usuario no introduce el valor numerico necesario en la raiz cuadrada se le avisa con un alert.
            if(tipOperacion == "raiz cuadrada" && isNaN(num1)){
                alert(`Se debe introducir un valor numericos para realizar la raiz cuadrada.`);
            }
        }
    }
    //Funcion mostrarHistorial, permite ver el historial de las operaciones validas realizadas en la calculadora.
    function mostrarHistorial(){
        //Una vez se finaliza el programa se preguntara al usuario si desea ver el historial de la calculadora.
        decision = prompt(`Mostrar historial (si/no).`);
        if(decision.toLowerCase() == "si"){
            //Si la respuesta es si, se recorre el array y si no hay nada se le indica al usuario por consola.
            if(historial.length == 0){
                console.log(`El historial de la calculadora esta vacio.`);
            }
            //Si el historial tiene contenido, se muestran las operaciones realizadas.
            else{
                console.log(`Historial de operaciones:`)
                //Recorre el array para poder mostrarlo por consola.
                //Los if se usan para cambiar la operacion de tipo texto a su simbolo correspondiente.
                //Ejemplo operacion suma, cambia a +, de esta manera se hace mas visual en consola.
                for(let i = 0 ; i < historial.length ; i++){
                    if(historial[i].tipOperacion == "suma"){
                        console.log(`${historial[i].num1} + ${historial[i].num2} = ${historial[i].resultado}`);
                    }   
                    if(historial[i].tipOperacion == "resta"){
                        console.log(`${historial[i].num1} - ${historial[i].num2} = ${historial[i].resultado}`);
                    }
                    if(historial[i].tipOperacion == "multiplicacion"){
                        console.log(`${historial[i].num1} * ${historial[i].num2} = ${historial[i].resultado}`);
                    }
                    if(historial[i].tipOperacion == "division"){
                        console.log(`${historial[i].num1} / ${historial[i].num2} = ${historial[i].resultado}`);
                    }
                    if(historial[i].tipOperacion == "raiz cuadrada"){
                        console.log(`La raiz cuadrada de ${historial[i].num1} es ${historial[i].resultado}`);
                    }
                }    
        }   }
    }
    //Se llama a las funciones mientras el numero no introduzca la operacion "-1", la cual finaliza el programa.
    do{
        validarInput();
        operacion(num1, num2, tipOperacion);
    }while(tipOperacion != "-1");
    //Al finalizar el programa se llama a la funcion mostrarHistorial, y dependiendo de la decision del usuario lo mostrara o
    mostrarHistorial();
}