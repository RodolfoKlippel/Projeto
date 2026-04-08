
teste()

function teste(){
    console.log("salve.")
}

console.log(teste)


teste2(5)

function teste2(parametro){
    console.log(parametro*2)
}

function retorno(num1, num2){
    return (num1+num2)/2
}

let media = retorno(2,4)

console.log(media)

// função anônima, função sem nome com retorno guardado em variável

var mensagem = function (){
    return console.log("olá")
}

console.log(mensagem)
mensagem()

const multiplicar = (x,y) =>{
    return x*y
}

console.log(multiplicar(6,5))

const dobro = x => x*2

console.log(dobro(3))