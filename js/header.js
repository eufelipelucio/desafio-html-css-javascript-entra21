const header =
    `<header class="header">
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