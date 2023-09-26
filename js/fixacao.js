localStorage.setItem("numeros", JSON.stringify([12,5,1,3,6,90,45,16]))
const text = document.getElementById("text");
const posicaoTexto = document.getElementById("posicaoTexto");
const numero = document.getElementById("numero");
const ordem = document.getElementById("ordem");
const btnInserir = document.getElementById("inserir");
const btnRemover = document.getElementById("remover");
const btnTrocar = document.getElementById("trocar");
const btnPosicao = document.getElementById("encontrar");
const btnMostrar = document.getElementById("mostrar");

function trocarNumero(num){
    var numeros = pegarNumeros();
    var i = verificaPosicao()
    if(numeros.includes(parseInt(num))){
        var novoNum = parseInt(prompt("Insira o número que deseja trocar o "+ num));
        if(!isNaN(novoNum)&& novoNum !== num && !numeros.includes(novoNum)){
            if(!numeros.includes(novoNum)){
                numeros[i]= novoNum
                localStorage.setItem("numeros",JSON.stringify(numeros))
                alert("Número trocado com sucesso!!")
                numero.value = '';
            }else{
                alert("Número já está existe!")
                numero.value = '';
            }
        }else{
            alert("Informe um novo número válido")
            numero.value = '';
        }
   }
    mostraNumeros();   
}

function mostraNumeros() {
    var table = '';
    var numeros = pegarNumeros(ordem.value);
    numeros.map((item, i) => {
        table += `
            <tr class="border">
                <td class="border">${item}</td>
                <td class="border">${i}</td>
            </tr>
        `
    })
    text.innerHTML = table;
}
mostraNumeros();
function apagarNumero(num) {
    var numeros = pegarNumeros(ordem.value);
    if(numeros.includes(parseInt(num))){
        var confir = window.confirm(`Deseja apagar o número ${num} ?`);
        if (confir) {
            numeros = numeros.filter((numero) => numero !== num)
            localStorage.setItem("numeros", JSON.stringify(numeros))
            mostraNumeros()
            numero.value = '';
            numero.focus();
            alert("Número removido com sucesso!")
        }
    }else{
        numero.value = '';
        alert("Número Não Encontrado!")
    }
}

function inserir(num) {
    var numeros = pegarNumeros(ordem.value);
    if (!numeros.includes(parseInt(num))) {
        numeros.push(parseInt(num));
        localStorage.setItem("numeros", JSON.stringify(numeros));
        alert("Número inserido com sucesso!!");
        mostraNumeros()
    } else {
        alert("Número repetido!!")
    }
}
function verificaPosicao() {
    var num = -1;
    var numeros = pegarNumeros(ordem.value);
    if(numeros.includes(parseInt(numero.value))){
        numeros.map((item, i) => item == numero.value ? num = i : null)
        return num;
    }else{
        alert("Posição Não Encontrado!")
        numero.value = '';
        posicaoTexto.innerHTML = ''
        return num;
    }
}

function pegarNumeros(ordem) {
    var arr = JSON.parse(localStorage.getItem('numeros'));
    switch (ordem) {
        case "CRESCENTE":
            ordenar(arr);
            break;
        case "DECRESCENTE":
            desordenar(arr);
            break;
        default:
            break;
    }
    return arr;
}

function ordenar(arr) {
    var arrAux = arr.sort((a, b) => a > b ? 1 : -1)
    return arrAux
}

function desordenar(arr) {
    var arrAux = ordenar(arr);
    return arrAux.reverse();
}
btnMostrar.addEventListener('click', (e) => {
    e.preventDefault();
    mostraNumeros();
})

btnPosicao.addEventListener('click', (e) => {
    e.preventDefault();
    var posicao = verificaPosicao();
    if(posicao >= 0){
        mostraNumeros();
        posicaoTexto.innerHTML = "Posição: " + posicao.toString();
        numero.value = '';
    }
})

btnRemover.addEventListener('click', (e) => {
    e.preventDefault();
    apagarNumero(parseInt(numero.value));

})
btnTrocar.addEventListener('click',(e)=>{
    e.preventDefault()
    trocarNumero(numero.value);
})

btnInserir.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isNaN(numero.value) && numero.value !== "") {
        inserir(numero.value);
        numero.value = '';
    } else {
        numero.focus();
    }
})
