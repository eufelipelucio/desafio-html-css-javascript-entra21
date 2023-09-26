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
        num = '';
        alert("Número inserido com sucesso!!");
        mostraNumeros()
    } else {
        alert("Número repetido!!")
    }
}
function verificaPosicao() {
    var numeros = pegarNumeros(ordem.value);
    if(numeros.includes(parseInt(numero.value))){
        var num = 0;
        numeros.map((item, i) => item == numero.value ? num = i : null)
        return num;
    }else{
        alert("Posição Não Encontrado!")
        numero.value = ''
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
    mostraNumeros();
    posicaoTexto.innerHTML = "Posição: " + posicao.toString();
})

btnRemover.addEventListener('click', (e) => {
    e.preventDefault();
    apagarNumero(parseInt(numero.value));

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
