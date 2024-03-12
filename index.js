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
            alert('Erro. Tente Novamente.')
            cep.value = '';
        }
    })
})



//Anexar arquivos
const subir = document.querySelector('#adicionar-arquivo');
subir.addEventListener('change', function(){

    //Arquivo 1
    if(sessionStorage.getItem('arquivo 1') == null){

    var url = (URL || webKit).createObjectURL(this.files[0]); 
    sessionStorage.setItem('arquivo 1', url);
    document.getElementById('doc-1').innerText = 'Arquivo anexado'
}
    //Arquivo 2
    else if(sessionStorage.getItem('arquivo 2') == null){
        url = (URL || webKit).createObjectURL(this.files[0]);
        sessionStorage.setItem('arquivo 2', url);
        document.getElementById('doc-2').innerText = 'Arquivo anexado'
    }
        else
            alert('Máximo 2 arquivos anexados.');
});


//Baixar arquivos anexados
//Baixar arquivo 1
const baixar = document.querySelector('#btn-baixar-1');
baixar.addEventListener('click', function(){
    baixar.href = sessionStorage.getItem('arquivo 1');
});

//Baixar arquivo 2
const baixar2 = document.querySelector('#btn-baixar-2');
baixar2.addEventListener('click', function(){
    baixar2.href = sessionStorage.getItem('arquivo 2');
});



//Apagar arquivos anexados.
function limparArquivo(key, id){
    sessionStorage.removeItem(`${key}`);
    document.getElementById(`${id}`).innerText = 'Nenhum arquivo anexado';
}

//Limpar arquivo 1.
var limparArquivo1 = document.getElementById('limpar-arquivo-1');
limparArquivo1.addEventListener('click', function(){
    limparArquivo('arquivo 1', 'doc-1');
})

//Limpar arquivo 2.
var limparArquivo2 = document.getElementById('limpar-arquivo-2');
limparArquivo2.addEventListener('click', function(){
    limparArquivo('arquivo 2', 'doc-2');
})

//Apagar todos os dados no sessionStorage quando a página for atualizada.
sessionStorage.clear();

//Armazenando os dados em JSON.
function gravaJSON(){

    var dadosOBJ = 
        {
            razaoSocial: document.getElementById('razao-social').value,
            nomeFantasia: document.getElementById('nome-fantasia').value,
            cnpj: document.getElementById('cnpj').value,
            inscricaoEstadual: document.getElementById('inscricao-estadual').value,
            inscricaoMunicipal: document.getElementById('inscricao-municipal').value,
            nomeContato: document.getElementById('nome-pessoa').value,
            telefoneContato: document.getElementById('telefone').value,
            emailContato: document.getElementById('email').value,
            produto:[
                        {
                            indice: 1,
                            descricaoProduto: document.getElementById('produto-1').value,
                            unidadeMedida: document.getElementById('medida-1').value,
                            qtdeEstoque: document.getElementById('qtd-estoque-1').value,
                            valorUnitario: document.getElementById('valor-unitario-1').value,
                            valorTotal: document.getElementById('valor-total-1').value,
                        },
                        {
                            indice: 2,
                            descricaoProduto: document.getElementById('produto-2').value,
                            unidadeMedida: document.getElementById('medida-2').value,
                            qtdeEstoque: document.getElementById('qtd-estoque-2').value,
                            valorUnitario: document.getElementById('valor-unitario-2').value,
                            valorTotal: document.getElementById('valor-total-2').value,
                        },
                    ],
            anexos: [
                        {
                            indice: 1,
                            nomeArquivo: '',
                            blobArquivo: sessionStorage.getItem('arquivo 1'),
                        },
                        {
                            indice: 2,
                            nomeArquivo: '',
                            blobArquivo: sessionStorage.getItem('arquivo 2'),
                        }

                    ]       
        }
        //Imprimindo o objeto e o JSON no console.
        var dadosJSON = JSON.stringify(dadosOBJ);
        console.log(dadosOBJ);
        console.log(dadosJSON);
}

var salvar = document.getElementById('salvar-fornecedor');
salvar.addEventListener('click', gravaJSON);



    










