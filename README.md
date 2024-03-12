# Formulário Front-End
### Projeto: Formulário de Cadastro de Fornecedores/Produtos
#### Acesse o formulário em: https://gustavonovaesh.github.io/Formulario/

### Descrição do Projeto

O projeto se resume a desenvolver um formulário completo com diversas funcionalidades, a fim de apresentar algumas das principais características HTML, CSS e JavaScript de um formulário. O projeto não conta com um back-end, este se limita as funcionalidades front-end.

O formulário contém 3 sessões, sendo elas:<br>
### 1°- Informeções básicas do fornecedor.<br>
Nessa parte, diversos campos são obrigatórios de serem preenchidos, de tal forma que o formulário não é enviado caso um desses campos estejam em branco. Além disso, o campo de CEP uma vez preenchido com um CEP váido, faz com que os demais campos de endereço sejam preenchidos automaticamente através da API Viacep.
Os campos estão dispostos de forma a facilitar o preenchimento, posicionado de forma lógica e intuitiva.

### 2°- Informações dos produtos.<br>
Na sessão de produtos, há compos para informar nome, unidade de medida, estoque, valor unitário e valor total. Os compos que onde são pedidos números não é possivél digitar caracteres para facilitar e evitar erros no formulário.
O campo de valor total não é editavél, pois ele é preenchido automaticamente após adicionado o estoque e o valor unitário a fim de agilizar o processo.
No canto esquerdo das informações há um botão de reset para limpar todos os campos do produto caso seja necessário.


### 3°- Anexar arquivos.<br>
Na sessão de anexar arquivos, é possivél anexar até dois arquivos diferentes. Após anexados é possivél também fazer o download clicando no ícone de vizualisação (olho). Os arqivos são armazenados como blob e seu endereço no Sessio Storage. É possivél vizualisar todo o processo através das ferramentas de desenvolvedor do seu navegador.
Por fim, há também um botão para deletar o arquivo anexado (lixeira vermelha).

Após preencher todas as informações obrigatórias e clicar em salvar fornecedor, todas as informações serão armazenadas no formato JSON e exibidas no console do navegador. Será exibido também o objeto com tais informações.

#### Por Gustavo da Silva Novaes




