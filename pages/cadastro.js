const btn = document.getElementById("btn");
const lista = document.getElementById("lista");

var users = [{
    nome: "felipe",
    email: "felipe@gmail.com",
    tel: 4448887878
},
{
    nome: "mathias",
    email: "mathias@gmail.com",
    tel: 4448855454
}
];

function carregar() {
    var contatos = '';
    for (let i = 0; i < users.length; i++) {
        contatos += `<li class="list-group-item d-flex justify-content-between list-group-item-info mt-1 mb-1">
                            <div d-flex>
                                <p>Nome: ${users[i].nome}</p>
                                <p>Email: ${users[i].email}</tp>
                                <p>Telefone: ${users[i].tel}</p>
                            </div>
                            <div class="d-flex flex-column justify-content-between">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#modal${i}">✏️</button>
                                <button class="btn btn-primary" onclick="excluir(${i})">❌</button>
                            </div>  
                            <div class="modal" id="modal${i}" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Edite usuário</h5>
                                        <button id="input" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body d-flex flex-column w-75">
                                        <label for="nome">Nome:</label>
                                        <input type="text" class="form-control mb-1 border border-primary p-2 novoNomeUser" name="novoNomeUser" value="${users[i].nome}">
                                        <label for="email">Email:</label>
                                        <input type="email" class="form-control mb-1 border border-primary p-2 novoEmailUser" name="novoEmailUser" value="${users[i].email}">
                                        <label for="telefone">Telefone:</label>
                                        <input type="number" class="form-control mb-1 border border-primary p-2 novoTelUser" name="novoTelUser" value="${users[i].tel}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="#save" class="btn btn-primary" data-bs-dismiss="modal" onclick="editar(${i})">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </li>`;
    }
    lista.innerHTML = contatos;
}
carregar();

function excluir(i) {
    const conf = window.confirm("Deseja remover essa fruta da cesta?");
    if (conf) {
        users.splice(i, 1)
    }
    carregar();
}


function editar(i) {
    var novoNome = document.getElementsByClassName("novoNomeUser")[i].value;
    var novoEmail = document.getElementsByClassName("novoEmailUser")[i].value;
    var novoTel = document.getElementsByClassName("novoTelUser")[i].value;
    var newUser = users[i];
    if (novoEmail == users[i].email) {
        alert("Insira um email diferente");
        return;
    }
    const result = users.findIndex(user => {
        return user.email == novoEmail;
    })

    if (result == -1) {
        newUser.nome = novoNome;
        newUser.email = novoEmail;
        newUser.tel = novoTel;
        carregar();
    } else {
        alert("email cadastrado")
        novoEmail = users[i].email;
        carregar();
    }
}




btn.addEventListener("click", function () {
    event.preventDefault();
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const tel = document.getElementById("telefone");
    const user = {
        nome: nome.value,
        email: email.value,
        tel: tel.value
    }
    var result = users.find(({ email }) => {
        return email == user.email ? true : false;
    });
    if (result) {
        alert("Email já cadastrado");
        return;
    }
    if (user.nome == '' || user.email == '' || user.tel == '') {
        alert("campo vazio");
        return;
    }
    users.push(user);
    carregar();
})
