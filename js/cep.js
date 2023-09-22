const cep = document.getElementById("cep");
const rua = document.getElementById('rua');
const cidade = document.getElementById('cidade');
const bairr = document.getElementById('bairro');

function buscarCep(){
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then((dados)=> dados.json())
    .then((response)=> {
        var { logradouro, bairro, localidade } = response;
        rua.value = logradouro;
        bairr.value = bairro;
        cidade.value = localidade;
        }
    )
}