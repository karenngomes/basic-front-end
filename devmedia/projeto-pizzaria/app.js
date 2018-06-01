
//incrementa
var botoesIncrementa = document.querySelectorAll(".btn-incrementa"); //vai retornar uma lista com esse elemento

for(let botao of botoesIncrementa) {
    
    botao.addEventListener('click', incrementa);

    function incrementa() { 

        var item = botao.closest('.item');
        var input = item.querySelector('.quantidade');
        
        input.value++;
        
        var preco = pegaPrecoItem(item);
        
        adicionaAoTotal(preco);

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

var formPedido = document.forms.pedido;

formPedido.addEventListener('submit', function(event) {

    var contador = 0;

    var inputs = formPedido.querySelectorAll("input.quantidade");

    for(let input of inputs) {
        if(input.value > 0 )
            contador++;
    }

    if(contador == 0) {
        alert("Deve ter pelo menos 1 pizza no pedido");
        event.preventDefault();
    }

});


//Funções auxiliares
function pegaPrecoItem(item) {
    var precoItem = item.querySelector('.preco-item');
    return Number(precoItem.textContent);
}

function adicionaAoTotal(valor) {
    var elemenTotal = document.querySelector("#total");
    elemenTotal.textContent = valor + Number(elemenTotal.textContent);
}


