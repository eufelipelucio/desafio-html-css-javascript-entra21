
const btn = document.getElementById("btn");
const cargo = document.getElementById("cargos");
const salario = document.getElementById("salario");
const container = document.getElementById("container");
container.classList.add("d-none")

const componentResult = (salario, novoSalario, aumento) => {
    return (
        `   <p>Salário: R$ ${salario}</p>
            <p>Novo salário: R$ ${novoSalario}</p>
            <p>Valor do aumento: R$  ${aumento}</p>
        `
    )
}


btn.addEventListener("click", function () {
    event.preventDefault();
    if (salario.value == '') {
        alert("Informe um valor válido")
        salario.focus();
        return;
    }

    const cargo = document.getElementById("cargos").value;
    const salarioFloat = parseFloat(document.getElementById("salario").value);
    let novoSalario = 0;
    let valorAumento = 0;

    switch (cargo) {
        case "GERENTE":
            novoSalario = salarioFloat + (salarioFloat * 0.05);
            valorAumento = novoSalario - salarioFloat;
            container.classList.remove("d-none");
            container.innerHTML = componentResult(salarioFloat, novoSalario, valorAumento);
            break;
        case "SUPERVISOR":
            novoSalario = salarioFloat + (salarioFloat * 0.08);
            valorAumento = novoSalario - salarioFloat;
            container.classList.remove("d-none");
            container.innerHTML = componentResult(salarioFloat, novoSalario, valorAumento);
            break;
        case "OPERADOR":
            novoSalario = salarioFloat + (salarioFloat * 0.09);
            valorAumento = novoSalario - salarioFloat;
            container.classList.remove("d-none");
            container.innerHTML = componentResult(salarioFloat, novoSalario, valorAumento);
            break;
        default:
            novoSalario = salarioFloat + (salarioFloat * 0.10);
            valorAumento = novoSalario - salarioFloat;
            container.classList.remove("d-none");
            container.innerHTML = componentResult(salarioFloat, novoSalario, valorAumento);
    }
}
)