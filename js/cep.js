const cep = document.getElementById("cep");
const rua = document.getElementById('rua');
const cidade = document.getElementById('cidade');
const bairro = document.getElementById('bairro');

async function buscarCep(){
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`) 
        const dados = await response.json();
        rua.value = dados.logradouro
        bairro.value = dados.bairro
        cidade.value = dados.localidade
    }catch(err){
        console.log(err)
    }
    return dados;
}