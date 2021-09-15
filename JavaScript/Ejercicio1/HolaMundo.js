/*
Ejemplos de tipos de 
datos en JavaScript
*/
//Tipo de dato string
let mensaje;
mensaje = "Hola mundo";
console.log(mensaje);
console.log(typeof mensaje)
mensaje=10;
console.log(mensaje)
console.log(typeof mensaje)

//Tipo de datos numericos
var numero = 1000;
console.log(numero)

//Tipo de dato object
var objeto = {
    nombre: 'carlos',
    apellido: "Perez",
    telefono: "8378292182"
}
console.log(objeto);
console.log( typeof objeto );

//tipo de dato boolean (true, false)
let bandera = false;
bandera= true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){};
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
let simbolo=Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//tipo clase es una function
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo undefined
let x;
console.log(typeof x);

//null=ausencia de valor
let y = null;
console.log(y)
console.log(typeof y)

let autos = ["BMW" , "Audi" , "Volvo"];
console.log(autos)
console.log(typeof autos)

let z= "";
console.log(z);
console.log(typeof z);

let nombre = "Carlos";
let apellido = "Mejia";
let añosExp1 = 3;
let añosExp2=5;
let nombreCompleto= nombre +" "+ apellido+ ", años de exp:"+(añosExp1+añosExp2);
console.log(nombreCompleto)
