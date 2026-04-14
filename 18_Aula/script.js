console.log("Olá!")

var barco = ["Mateus andrade","Miguel","André"]
var profissao = ["pescador","nóia","pastor"]

for(var i=0; i<3; i++){
    console.log("O "+ barco[i] +" é "+ profissao[i])
}

//----   Dicionários   -----------------------------------

var cantor = {
    nome : ["Menos é mais","zeca"], 
    generoMusical : "Pagode",
    estáVivo : true, 
    idadeDoGrupo : 10
}

console.log(cantor.nome[1])

//--------------------------------------------------------

var intervalo = {
    início : "15:00",
    fim : "15:20",
    local : "pátio",
    duracao : "20 min"
}

console.log("O intervalo inicia às " + intervalo["início"])

//--------------------------------------------------------

var garrafa = {

}

garrafa.tipo = "suco"
garrafa.quantidade = "200ml"
garrafa.cor = "roxo"
garrafa.preco = 4.00

console.log(garrafa)

//----   Objetos   --------------------------------------

var animal = {
    nome : "Jerry",
    raça : "Rato",
    idade : 10,

    falar : function(){
        console.log("squick")
    },

    andar : function(){
        console.log("* Tom andou *")
    },

    dormir: function(){
        console.log("* Tom está dormindo *")
    },
}

animal.falar()