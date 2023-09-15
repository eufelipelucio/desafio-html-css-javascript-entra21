const header =
    `<header class="header">
        <input class="hamburguer" type="checkbox">
            <img class="hamburguer-icon" src="../assets/hambuguer-icon.svg" width="50px" alt="Menu Hambuguer"/>
            <img class="icon-x" src="../assets/icon-x.svg" width="50px" alt="Menu X"/>
        </input>
        <div class="header__logo">
            <img  class="logo" src="../assets/logo-felipe-lucio.png" alt="Logo Felipe Lúcio">
        </div>
        <nav class="navbar">
            <ul class="navbar__exercicios">
                <li class="navbar__exercicio--link"><a href="../index.html">Exercício 1</a></li>
                <li class="navbar__exercicio--link"><a href="/pages/exercicio2.html">Exercício 2</a></li>
                <li class="navbar__exercicio--link"><a href="/pages/exercicio3.html">Exercício 3</a></li>
                <li class="navbar__exercicio--link"><a href="/pages/exercicio4.html">Exercício 4</a></li>
                <li class="navbar__exercicio--link"><a href="/pages/exercicio5.html">Exercício 5</a></li>
            </ul>
        </nav>
    </header>
    `
const dataHeader = document.createElement("div");
document.body.appendChild(dataHeader);
dataHeader.innerHTML = header;