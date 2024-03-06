
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
