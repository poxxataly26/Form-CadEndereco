# Form-CadEndereco

## Introdução
Esse código é uma página HTML que representa um formulário para realizar o cadastro de um endereço. O formulário possui campos para preencher o CEP, endereço, número, bairro, cidade e estado. Também é utilizado o framework Bootstrap5 para estilizar a página. Ao clicar no botão "Cadastrar", ainda não há uma ação definida para processar os dados inseridos no formulário.

## Descrição 

Este código é responsável por consumir a API do ViaCep e preencher um formulário com os dados do endereço a partir do CEP inserido. Ele começa com a declaração "use strict", que ativa o modo restrito do JavaScript. 

Em seguida, há uma função chamada "limparFormulario", que limpa os campos do formulário. 

Temos também a função "eNumero", que recebe um número e testa se ele contém apenas dígitos, usando uma expressão regular. A função "cepValido" verifica se o CEP possui o tamanho correto (8 dígitos) e se é válido, utilizando a função "eNumero" anteriormente definida. 

A função "preencherFormulario" recebe um objeto com os dados do endereço e preenche os campos do formulário com as informações correspondentes. 

Por fim, a função "pesquisarCep" é responsável por realizar a busca no ViaCep a partir do CEP inserido. Ela chama a função "limparFormulario", constrói a URL da API a partir do CEP informado, verifica se o CEP é válido e, se for, aguarda o fetch da URL para obter os dados do endereço. Em seguida, verifica se a propriedade "erro" está presente no objeto retornado (o que significa que o CEP não foi encontrado) e exibe uma mensagem de erro, ou chama a função "preencherFormulario" com os dados encontrados. 

O código termina adicionando um evento "focusout" ao campo do CEP, que dispara a função "pesquisarCep" quando o usuário sai do campo.

### Tecnologias utilizadas

- HTML5: linguagem de marcação para estruturação do conteúdo da página.
- CSS3: linguagem de formatação que estiliza a página, aplicando cores, fontes, layouts, etc.
- Bootstrap5: é um framework que oferece componentes e estilos prontos para construção de interfaces web responsivas e modernas.
- strict mode: utilizado para contrução do código para consumo de API de endereço

## Fontes consultadas

[Bootstrap](https://getbootstrap.com/docs/5.0/forms/layout/) - Página para fazer os códigos
[async](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function) - Define uma função assíncrona
[fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) - Fornece uma interface JavaScript para acessar e manipular
[hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) - método que retorna objeto 

## Autores

[Talyta](https://github.com/poxxataly26/portfolio-pessoal) 

<img src="https://github.com/poxxataly26/portfolio-pessoal/blob/main/Img/foto.jpeg" width="100px">