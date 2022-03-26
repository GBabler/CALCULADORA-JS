function insert(num){
    let numero = document.getElementById('valor').innerHTML
    document.getElementById('valor').innerHTML = numero + num
    console.log(numero)
}
function clean(){
    document.getElementById('valor').innerHTML = ""
}
function back(){
    let valor = document.getElementById('valor').innerHTML;
    document.getElementById('valor').innerHTML = valor.substring(0, valor.length -1)
}

function calcular() {
    let valor = document.getElementById('valor').innerHTML;
    if(valor){
        document.getElementById('valor').innerHTML = eval(valor)
    }
}