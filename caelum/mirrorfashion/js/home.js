$(function() {
    /*$('.novidades button').click(function () {
        $('.novidades').toggleClass('painel-aberto');
    });
    $('.mais-vendidos button').click(function () {
        $('.mais-vendidos').toggleClass('painel-aberto');
    });*/

    //É A MESMA COISA QUE O DE CIMA:

    $('.painel button').click(function () {
        $(this).parent().toggleClass('painel-aberto');
    });

});