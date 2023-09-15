
const btn = document.getElementById("btn");
const notaUm = document.getElementById("nota1");
const notaDois = document.getElementById("nota2");
const notaTres = document.getElementById("nota3");
const container = document.getElementById("container");
container.classList.add("invisivel")

const componentSituacaoAluno = (msg, color) => {
    return (
        `
        <p id="situacao-aluno" style="color:${color}">${msg}</p>
        `
    )
}
const verificaNota = (nota) => {
    const notaFloat = parseFloat(nota.value);
    if (isNaN(notaFloat) || notaFloat > 10 || notaFloat < 0) {
        nota.focus();
        return false;
    } else {
        return notaFloat;
    }
}


btn.addEventListener('click', function () {
    event.preventDefault();

    const nota1 = verificaNota(notaUm);
    const nota2 = verificaNota(notaDois);
    const nota3 = verificaNota(notaTres);

    if (nota1 || nota2 || nota3) {
        const freq = document.getElementById("freq").value;
        let media = (nota1 + nota2 + nota3) / 3;
        let msg = freq < 75 || media < 7 ? "Aluno REPROVADO!!" : "Aluno APROVADO!!";
        let color = freq < 75 || media < 7 ? "red" : "green";
        container.classList.remove("invisivel");
        container.innerHTML = componentSituacaoAluno(msg, color);
    } else {
        alert("Valor informado inválido!")
    }

})


