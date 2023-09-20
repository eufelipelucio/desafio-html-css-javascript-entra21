const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const btn = document.getElementById("btn");
const container = document.getElementById("container");
container.classList.add("d-none")

const componentMsg = (msg) => {
    return (
        `
           <p>${msg}</p>
        `
    )
}

const renderComponent = (msg) => {
    container.classList.remove("d-none");
    container.appendChild
    container.innerHTML = componentMsg(msg);
}

btn.addEventListener("click", function () {
    event.preventDefault();

    let pesoFloat = parseFloat(peso.value);
    if (isNaN(pesoFloat)) {
        peso.focus();
        alert("Valor informado é inválido")
        return;
    }

    let alturaFloat = parseFloat(altura.value);
    if (isNaN(alturaFloat)) {
        altura.focus();
        alert("Valor informado é inválido")
        return;
    }

    let imc = pesoFloat / (alturaFloat * alturaFloat);
    console.log(imc);
    var msg = "";

    if (imc < 17) {
        msg = "Muito abaixo do peso";
        renderComponent(msg);
    }
    if (imc >= 17 && imc <= 18.49) {
        msg = "Abaixo do peso";
        renderComponent(msg);
    }
    if (imc >= 18.5 && imc <= 24.99) {
        msg = "Peso normal";
        renderComponent(msg);
    }
    if (imc >= 25 && imc <= 29.99) {
        msg = "Acima do peso";
        renderComponent(msg);
    }
    if (imc >= 30 && imc <= 34.99) {
        msg = "Obesidade I";
        renderComponent(msg);
    }
    if (imc >= 35 && imc <= 39.99) {
        msg = "Obesidade II (severa)";
        renderComponent(msg);
    }
    if (imc > 40) {
        msg = "Obesidade III (mórbida)";
        renderComponent(msg);
    }
    text.innerHTML = msg;
    text.style.textAlign = "center";

})