const header =
    `<header>
        <nav class="navbar navbar-expand-sm bg-primary p-2">
            <a class="navbar-brand fs-4 text-white ms-3" href="../index.html"><i data-feather="home"></i></a>
            <button class="navbar-toggler text-white" role="button" data-bs-parent="true" type="button" aria-expanded="true" data-bs-toggle="collapse" data-bs-target="#coll">
                <span class="navbar-toggler-icon text-white"></span>
            </button>
            <div class="collapse navbar-collapse" id="coll">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link text-white text-center fs-5" href="/pages/exercicio2.html">IDADE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white text-center fs-5" href="/pages/exercicio3.html">SITUAÇÃO-ALUNO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white text-center fs-5" href="/pages/exercicio4.html">IMC</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white text-center fs-5" href="/pages/exercicio5.html">AUMENTO</a>
                    </li>
                </ul>
            </div>  
        </nav>
    </header>
    `
const dataHeader = document.createElement("div");
document.body.appendChild(dataHeader);
dataHeader.innerHTML = header;

