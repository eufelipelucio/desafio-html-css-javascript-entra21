
const btn = document.getElementById("btn-calcula");
const situacaoAluno = document.getElementById("situacao-aluno");
const notaUm = document.getElementById("nota1");
const notaDois = document.getElementById("nota2");
const notaTres = document.getElementById("nota3");

btn.addEventListener('click',function(){    
    const nota1 = parseFloat(notaUm.value);
    if(isNaN(nota1) || nota1 > 10 || nota1 < 0){
        alert("Valor informado é inválido");
        notaUm.focus();
        return;
    }
    const nota2 = parseFloat(notaDois.value);
    if(isNaN(nota2) || nota2 > 10 || nota2 < 0){
        alert("Valor informado é inválido");
        notaDois.focus();
        return;
    }
    const nota3 = parseFloat(notaTres.value);
    if(isNaN(nota3) || nota3 > 10 || nota3 < 0){
        alert("Valor informado é inválido");
        notaTres.focus();
        return;
    }

    const freq = document.getElementById("freq").value;    
    let media = (nota1 + nota2 + nota3)/3;
    let msg = freq < 75 || media < 7 ? "Aluno REPROVADO!!" : "Aluno APROVADO!!";
    situacaoAluno.innerHTML = msg;
    situacaoAluno.style.color = freq < 75 || media < 7 ? "red" : "green";  
    
    event.preventDefault();
})


