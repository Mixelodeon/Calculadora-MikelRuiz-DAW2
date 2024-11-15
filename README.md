Manual de uso:
    Antes de realizar ninguna operación, es recomendable introducir "-1" y finalizar el programa para refrescar la página, de esta manera se cargará el programa
    por completo y podrás visualizar el resultado de las operaciones realizadas en la consola a tiempo real.
    1. Primer paso: Debes introducir de manera textual y en minusculas la operación que desea realizar
        (suma, resta, multiplicacion, division o raiz cuadrada). Si se escribe en mayúsculas o se introduce un dato no deseado
        como puede ser numeros o cadenas de texto diferentes a las pedidas, se te avisará mediante una ventana emergente en tu navegador.
    2. Segundo paso: Se debe introducir el primer numero para poder realizar la operación. 
    3. Tercer paso: Se debe introducir el segundo numero para poder realizar la operación. Una vez introducidos los dos números, 
        el programa valida que los dos datos introducidos son valores numéricos y que la operacion a realizar se haya escrito correctamente, 
        si no cumple estas condiciones se repetira el proceso de introducir los datos desde el principio.
    4.  Cuarto paso: Abrá la consola del navegador con F12, para poder observar las operaciones llevadas a cabo.
        -   Se le volverá a repetir el proceso desde 0 para realizar más calculos, si de lo contrario no desea realizar mas calculos 
            y simplemente desea salir del programa introduzca "-1", al pedir el tipo de operacion a realizar.
        -   Al seleccionar salir del programa, le preguntará si desea ver su historial de calculos, debe responder si o no. 
            Si su respuesta es si, se le mostrará por consola todos los calculos que haya hecho. De lo contrario si su respuesta es no,
            simplemente finalizará el programa. 

Control de excepciones:
    - Introducir mal el tipo de operación: Si al pedir la operación se escriben numeros, cadena de texto en mayúscula o diferentes cadenas de texto a las solicitadas, 
      se avisa al usuario mediante un alert de su error, y debe volver a introducir la operación deseada correctamente.
    - División de 0: Si se intenta realizar una división por 0, se le avisa al usuario mediante una ventana emergente en su navegador.
    - Valores numéricos: Si al pedir numeros el usuario introduce cadenas de texto, se le avisará mediante una ventana emergente.
    - NaN: Si el usuario seleciona la operación, pero luego deja uno de los dos campos numericos o los dos sin rellenar, se dará como operación invalida y no se introducirá
            en el historial.