const btn = document.getElementById("btn");
const input = document.getElementById("idade");
const container = document.getElementById("container");
container.classList.add("invisivel");

const componentIdade = (msg, color) => {
    return (
        `
            <p id="idade-valor" style="color:${color}">${msg}</p>
            `
    )
}

btn.addEventListener("click", function () {
    event.preventDefault();

    if (input.value != '') {
        let hoje = new Date();
        let [ano, mes, dia] = input.value.split('-').map(Number);
        let anoAtual = hoje.getFullYear();
        let mesAtual = hoje.getMonth() + 1;
        let diaAtual = hoje.getDate();
        let idade = anoAtual - ano;

        mesAtual == mes && dia > diaAtual ? idade-- : idade = idade;

        let msg = idade < 18 ? "Você é menor de idade!!" : "Você é maior de idade!!";
        let color = idade < 18 ? "red" : "green";
        container.classList.remove("invisivel");
        container.innerHTML = componentIdade(msg, color);

    }

})


