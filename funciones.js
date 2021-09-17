//declaración de la función
function miFuncion(a,b){
    console.log(arguments.length)
    return a + b;
    }

//llamado a la función
let resultado= miFuncion(6 , 7);
console.log(resultado)

//Declaración Función de tipo Expresión
let x = function (a,b){return a + b};

resultado= x(5, 2);
console.log(resultado);

(function (a , b){ 
    console.log("Ejecutando la función: "+(a+b));
})(3,7);

console.log(typeof miFuncion)
let miFuncionTexto= miFuncion.toString();
console.log(miFuncionTexto)