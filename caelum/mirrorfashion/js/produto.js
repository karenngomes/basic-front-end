let inputTamanho = document.querySelector("[name=tamanho");
let outputTamanho = document.querySelector("[name=valorTamanho");

inputTamanho.oninput = function() {
    outputTamanho.value = inputTamanho.value;
};