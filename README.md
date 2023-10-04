# Form-CadEndereco

![image info](https://github.com/poxxataly26/Form-CadEndereco/blob/main/Img/Gif.gif)

## Introdução
Esse código é uma página HTML que representa um formulário para realizar o cadastro de um endereço. O formulário possui campos para preencher o CEP, endereço, número, bairro, cidade e estado. Também é utilizado o framework Bootstrap5 para estilizar a página. Ao clicar no botão "Cadastrar", ainda não há uma ação definida para processar os dados inseridos no formulário.

## Descrição 

Este código é responsável por consumir a API do [ViaCep](https://viacep.com.br/) e preencher um formulário com os dados do endereço a partir do CEP inserido. Ele começa com a declaração "use strict", que ativa o modo restrito do JavaScript. 

Em seguida, há uma função chamada "limparFormulario", que limpa os campos do formulário. 

Temos também a função "eNumero", que recebe um número e testa se ele contém apenas dígitos, usando uma expressão regular. A função "cepValido" verifica se o CEP possui o tamanho correto e se é válido, utilizando a função "eNumero" anteriormente definida. 

A função "preencherFormulario" recebe um objeto com os dados do endereço e preenche os campos do formulário com as informações correspondentes. 

Por fim, a função "pesquisarCep" é responsável por realizar a busca no ViaCep a partir do CEP inserido. Ela chama a função "limparFormulario", constrói a URL da API a partir do CEP informado, verifica se o CEP é válido e, se for, aguarda o fetch da URL para obter os dados do endereço. Em seguida, verifica se a propriedade "erro" está presente no objeto retornado "o que significa que o CEP não foi encontrado" e exibe uma mensagem de erro, ou chama a função "preencherFormulario" com os dados encontrados. 

O código termina adicionando um evento "focusout" ao campo do CEP, que dispara a função "pesquisarCep" quando o usuário sai do campo.

## Recursos de Javascript utilizados nesse projeto

- `hasOwnProperty` - é um método de objeto em JavaScript que verifica se um determinado objeto tem uma propriedade com o nome especificado. Ele retorna um valor booleano true se o objeto tiver a propriedade especificada e false se não tiver. Isso é útil para verificar se uma propriedade pertence diretamente ao objeto ou se é herdada de seu protótipo.

- `fetch` -  é uma API que permite recuperar dados de um servidor web usando requisições HTTP, sem precisar recarregar a página inteira. É muito usada em aplicações web modernas que usam JavaScript para criar interfaces de usuário dinâmicas.

- `async` - é uma funcionalidade do JavaScript que permite escrever código assíncrono de forma síncrona, facilitando o controle de fluxo em operações,  ela permite tratar erros de forma clara e eficiente, facilitando o desenvolvimento de aplicações assíncronas em JavaScript.

- `use strict` - é uma diretiva de JavaScript que restringe certas ações não seguras que o código pode executar e torna mais fácil detectar erros comuns. 

- `test()` - executa uma busca por uma correspondência entre uma expressão regular e uma string. Retorna true ou false.

- `strict mode` - é uma funcionalidade do JavaScript que impõe um conjunto de regras mais rigorosas para tornar a linguagem mais previsível e segura. Utilizado para contrução do código para consumo de API de endereço.

### Tecnologias utilizadas

- HTML5: linguagem de marcação para estruturação do conteúdo da página.
- CSS3: linguagem de formatação que estiliza a página, aplicando cores, fontes, layouts, etc.
- Bootstrap5: é um framework que oferece componentes e estilos prontos para construção de interfaces web responsivas e modernas.
- git: é um sistema de controle de versionamento de código. Ele é usado para gerenciar arquivos de texto de um projeto em desenvolvimento e acompanhar suas alterações ao longo do tempo. 
- GitHub: pode criar seu repositório, compartilhar seu trabalho com outros, receber contribuições ou corrigir problemas em projetos de outras pessoas.

## Fontes consultadas

[Bootstrap](https://getbootstrap.com/docs/5.0/forms/layout/) - Página para fazer os códigos   

## Autores

[Talyta](https://github.com/poxxataly26/portfolio-pessoal) 

<img src="https://github.com/poxxataly26/portfolio-pessoal/blob/main/Img/foto.jpeg" width="100px">