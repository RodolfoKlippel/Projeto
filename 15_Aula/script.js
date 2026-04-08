// console.log("Olá, mundo!")

// var x=0
// while(x<5){
//     console.log(x)
//     x++;
// }

// for(var i=0; i<5; i++){
//     console.log(i*i)
// }

// let frutas = ["maça","pera","banana","uva"];

// for(let y=0; y<frutas.length; y++){
//     console.log(frutas[y]);
// }

// console.log("-----------------------")

// frutas.push("bergamota"); //adiciona ao final
// frutas.unshift("laranja"); //adiciona no início
// frutas.pop(); //remove a variável do final
// frutas.shift(); //remove a variável do início


// for(let fruta in frutas){
//     console.log(frutas[fruta]);
// }

// frutas.indexOf("maça"); //diz em que posição esta variável está
// frutas.includes("pitu"); //diz se é verdadeiro ou falso que isso está na lista
// frutas.sort(); //ordena em ordem alfabética
// frutas.reverse(); //contrário de ordem alfabética
// frutas.toString(); //transforma em string
// frutas.join(" - "); // junta elementos separando-os com algo
// frutas.slice(0,2); //separa um vetor a partir de um início até um fim
// frutas.splice(1,1); //remove elementos iniciando do 1, removendo apenas 1

// let email = "sdassa@gmail.com";
// let inicio = email.slice(0,email.indexOf("@"));

// console.log(inicio);

let N = 4;
let vetor = [["SC",5.20,5.72],["MTRS",4.22,6.10],["AL",5.55,6.20],["GO",4.30,6.25]];
let estado = "*";

for(let i = 0; i<2; i++){
    if(estado ==="*"){
        estado= vetor[i][0]
    }else if(vetor[i][2]*0.7>=vetor[i][1]){
        estado = estado + " " + vetor[i][0]
    }else{
        continue;
    }
}

console.log(estado)

