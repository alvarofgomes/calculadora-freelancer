var valorMes = document.querySelector("#ganho-mes");

var horasDia = document.querySelector("#horas-dia");

var quantidadeDiasMes = document.querySelector("#dias-mes");

var resultado = document.querySelector(".secao-hora .secao__rodape__valor span");

function calcularValorHora() {  
    console.log("botão funcionando");

    var valorHora = (valorMes.valueAsNumber / quantidadeDiasMes.valueAsNumber) / horasDia.valueAsNumber;
    
    resultado.textContent = valorHora;
}