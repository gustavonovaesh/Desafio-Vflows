//Função para limpar o conteúdo dos input dos produtos.
 function limpar(name){
    let info = document.getElementsByName(name);
    for(let i = 0; i < info.length; i++)
    info[i].value = '';
}

document.querySelector('#btn-limpar-1').addEventListener('click', function(){
    limpar('prod-1')
});

document.querySelector('#btn-limpar-2').addEventListener('click', function(){
    limpar('prod-2')
});


//Arrumar o preenchimento automático

btn = document.querySelectorAll('.info-fieldset')[0];
btn.addEventListener('input', function(){
        var qntEstoque = document.querySelector('#qtd-estoque-1').value;
        var valorUni = document.querySelector('#valor-unitario-1').value;
        var valor = valorUni * qntEstoque;

    document.querySelector('#valor-total-1').value = valor;
});


btn2 = document.querySelectorAll('.info-fieldset')[0];
btn2.addEventListener('input', function(){
        var qntEstoque2 = document.querySelector('#qtd-estoque-2').value;
        var valorUni2 = document.querySelector('#valor-unitario-2').value;
        var valor2 = valorUni2 * qntEstoque2;

    document.querySelector('#valor-total-2').value = valor2;
});






