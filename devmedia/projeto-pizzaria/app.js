//inputQuantidade.value = 1 + Number(inputQuantidade.value);

//incrementa
var botoesIncrementa = document.querySelectorAll(".btn-incrementa"); //vai retornar uma lista com esse elemento

//console.log(botoesIncrementa);

for(let botao of botoesIncrementa) {
    
    botao.addEventListener('click', incrementa);

    function incrementa() { 

        var item = botao.closest('.item');
        var input = item.querySelector('.quantidade');
        
        input.value++;
        
        var preco = pegaPrecoItem(item);
        
        adicionaAoTotal(preco);
        /*
        var total = document.getElementById("total")
        total.innerHTML = preco;
        */
        //elemenTotal.innerHTML = Number(elemenTotal.innerHTML) + preco;

    }
}



//decrementa
var botoesDecrementa = document.querySelectorAll(".btn-decrementa");
//botaoDecrementa.addEventListener('click', decrementa);

for(let botao of botoesDecrementa) {
    
    botao.onclick = decrementa

    function decrementa() {
        
        var item = botao.closest('.item');
        var input = item.querySelector('.quantidade');
        
        if (input.value > 0) {
            input.value--;
            var preco = pegaPrecoItem(item);
            adicionaAoTotal(-preco);
        } 
    }
}

//Funções auxiliares
function pegaPrecoItem(item) {
    var precoItem = item.querySelector('.preco-item');
    return Number(precoItem.textContent);
}

function adicionaAoTotal(valor) {
    var elemenTotal = document.querySelector("#total");
    elemenTotal.textContent = valor + Number(elemenTotal.textContent);
}

/*
botaoDecrementa.addEventListener('click', function() {
    inputQuantidade.value--;
});

botaoIncrementa.addEventListener('click', function() {
    inputQuantidade.value++;
});



*/

