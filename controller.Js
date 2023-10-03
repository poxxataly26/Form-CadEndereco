'use strict'; // Modo restrito
//Consumindo API de CEP, do ViaCep
// https://viacep.com.br/

//Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

// Verificar se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); //testa número informado com expressão regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep); //verificar tamanho do cep digitado e executa função do cep eNumero

//Função para preencher formulário
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//Consumo da API da ViaCep
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); //esperar/aguardar
        const addres = await dados.json();
        // hasOwnProperty reorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio  ojeto  em questão
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(addres);
        }
    }else{
        alert('CEP incorreto');
    }
}
//Adiciona evento DOM ao input do CEP para executar função pesquisarCep
document.getElementById('cep').addEventListener('focusout', pesquisarCep);