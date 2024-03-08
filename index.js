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

//Preenchendo CEP com API viaCEP.
const cep = document.querySelector('#cep');
const endereco = document.querySelector('#endereco');
const bairro = document.querySelector('#bairro');
const municipio = document.querySelector('#municipio');
const estado = document.querySelector('#estado');

const showData = (result) =>{

        endereco.value = result.logradouro;
        bairro.value = result.bairro;
        municipio.value = result.localidade;
        estado.value = result.uf;
}

cep.addEventListener('blur', (e) => {
    let search = cep.value.replace('-','');
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {response.json()
        .then(data => showData(data))
    })
    .catch(e =>  {
        if(cep.value != ''){
            alert('CEP inválido!')
            cep.value = '';
        }
    })
})












