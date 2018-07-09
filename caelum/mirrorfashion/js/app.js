let inputTamanho = document.querySelector("[name=tamanho]");
let outputTamanho = document.querySelector("[name=valorTamanho]");

inputTamanho.oninput = function() {
    outputTamanho.value = inputTamanho.value;
}

let inputQuantidade = document.querySelector("#qtd");
let outputTotal = document.querySelector("#total");

inputQuantidade.oninput = function() {
    let preco = document.querySelector("#preco").textContent;
    preco = preco.replace("R$ ", "");
    preco = preco.replace(",",".");
    preco = parseFloat(preco);
    let total = preco * inputQuantidade.value;

    total = "R$ " + total.toFixed(2);
    total = total.replace(".",",");

    outputTotal.value = total;

};