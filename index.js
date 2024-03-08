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


//Preenchimento automático do valor total de cada produto.
var cont = document.querySelectorAll('.produto').length;

//Produto 1
var btn = document.querySelectorAll('.produto')[cont - cont];
btn.addEventListener('input', function(){
        var qntEstoque = document.querySelector('#qtd-estoque-1').value;
        var valorUni = document.querySelector('#valor-unitario-1').value;
        var valor = valorUni * qntEstoque;

    document.querySelector('#valor-total-1').value = valor;
});

//Produto 2
btn = document.querySelectorAll('.produto')[cont - 1];
btn.addEventListener('input', function(){
        var qntEstoque = document.querySelector('#qtd-estoque-2').value;
        var valorUni = document.querySelector('#valor-unitario-2').value;
        var valor = valorUni * qntEstoque;

    document.querySelector('#valor-total-2').value = valor;
});












