function finalizar(){
    console.log("acabei")
}

function processar(callback){
    console.log("iniciando processamento...")
    callback()
}

processar(finalizar)

//-----------------------------------------------------------

function exercutarTarefa(callback){
    console.log("Iniciando a execução")
    setTimeout(callback,3000)
}

exercutarTarefa(() => console.log("acabou a tarefa"))

//-----------------------------------------------------------

function verificar_nota(nota,callback){
    if(nota>=7){
        callback()
    }
}

verificar_nota(7, () => console.log("parabens"))

//-----------------------------------------------------------

function loginCorreto(){
    console.log("Logado com sucesso.")
}

function loginErrado(){
    console.log("Login inválido.")
}

function Logar(senha,callback1,callback2){
    if(senha === "abc*123"){
        callback1()
    }else{
        callback2()
    }
}

Logar("abc*123",loginCorreto,loginErrado)