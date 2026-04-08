console.log("Hello World!")

// window.alert("gay")

let nome = "mateus";
var numero = 7;
var decimal = 10.5;
var verdadeiro = true;

console.log(nome + " tem " + numero + " anos ")

console.log(typeof(nome),typeof(numero),typeof(decimal),typeof(verdadeiro))

var nulo = null;
var indefinido = undefined;

let num1 = 3;
let num2 = 6;

console.log("Soma:",num1+num2);
console.log("Subtração:",num1-num2);
console.log("Multiplicação:",num1*num2);
console.log("Divisão:",num1/num2);
console.log("Módulo:",num1%num2);

//E, OU, NÂO
//&&, ||, !

let verdade = true;
let mentira = false;

console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

// >, <, >=, <=, ==, !=, ===, !==

let nume1 = 60;
let nume2 = 30;
let nume3 = "30";

console.log(nume1>nume2)
console.log(nume1<nume2)
console.log(nume2>=nume1)
console.log(nume2<=nume1)
console.log(nume3==nume2)
console.log(nume3===nume2)
console.log(nume3!==nume2)
console.log(nume1!=nume2)

if(nume1>nume2){
    console.log("maior")
}else if(nume1===nume2){
    console.log("iguais")
}else{
    console.log("menor")
}

var opcao = 1;

switch(opcao){
    case 1:
        console.log("primeira");
        break;
    case 2:
        console.log("segunda");
        break;
    case 3:
        console.log("terceira");
        break;
    default:
        console.log("nenhuma");
        break;
}

// let idade = prompt("diga-me sua idade")

// console.log(idade)