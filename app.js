/* Deberán realizar los siguientes ejercicios:

1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
 */

// EJERCICIO 1 (Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.)
let numero_1 = prompt("EJERCICIO 1 : Ingrese un numero");
function par_o_impar(num) {
    
   if (num % 2 == 0) {
   console.log("El numero ingresado es par " + "("+ num + ")");
   } else {
    console.log("El numero ingresado es impar " + "("+ num + ")");
   }
}

par_o_impar(numero_1)   

//EJERCICIO 2 (Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.)

let numero_2 = prompt("EJERCICIO 2 : Ingrese el numero 1");
let numero_3 = prompt("EJERCICIO 2 : Ingrese el numero 2");
function mayor_menor_igual(num1,num2) {
    
   if (num1 > num2 ) {
   console.log("El numero1 es mayor que le numero2 " );
   }   

   if (num1 < num2) {
    console.log("El numero2 es mayor que le numero1 " );
    }  
    if (num1==num2){
    console.log("Los numeros son iguales");
    }

}

mayor_menor_igual(numero_2,numero_3)


//EJERCICIO 3 (Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.)

let numero_4 = prompt("EJERCICIO 3 : Ingrese un numero para comprobar si es o no , multiplo de 5");
function multiplode5 (num) {
    if (num % 5 == 0) {
        console.log("El numero ingresado"+"("+ num +")"+ "es multiplo de 5");
    } else {
        console.log("El numero ingresado "+"("+ num +")"+ " no es multiplo de 5");
    }
    
}
multiplode5(numero_4) 

//EJERCIO 4 (Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.)

let numero_5 = prompt("EJERCICIO 4 : Ingrese un numero ");

function ejercicio4 (num) {
    for (let i = 0; i <= num; i++) {
        console.log(i);
        
    }
    
}

ejercicio4(numero_5)

//EJERCICO 5 (Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.)
 
let palabra_1 = prompt("EJERCICIO 5 : Ingrese una palabra ");
let numero_6 = prompt("EJERCICIO 5 : Ingrese el numero de veces que se va a repetir la palabra ");

function ejercico5(word,num) {
    for (let i = 0; i < num; i++){
        console.log(word);
        
    }
}
ejercico5(palabra_1,numero_6)

//EJERCICO 6 (Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.)
console.log("EJERCICO 6");
let array6 = [1,2,3,4,5,6]

function ejercicio6(num) {
    for (let i = 0; i < num.length; i++) {
        console.log(num[i]);
        
    }
}

ejercicio6(array6); 

//EJERCICIO 7 (Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".)
console.log("EJERCICO 7");
let array7 = [1,2,3,4,5,6,7,8,9,10]
let posicion_a_eliminar = 4 
array7.splice(posicion_a_eliminar, 1);

function ejercicio7(num) {
    
    for (let i= 0; i < num.length; i++) {
        console.log(num[i]);
        
    }
}

ejercicio7(array7)

//EJERCICIO 8 (Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.)

console.log("EJERCICO 8");

let array8 = [1,2,3,4,5,6,7,8,9] 
let multiplicador = 2

function ejercicio8(num,num1) {

    for (let i = 0; i < num.length; i++) {
        console.log(num[i]*num1);
        
    }
    
}

ejercicio8(array8,multiplicador)