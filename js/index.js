const btn = document.getElementById("btn");
const fruta = document.getElementById("fruta");
const listaFrutas = document.getElementById("listFrutas");
const save = document.getElementById("save");
var frutas = ["BANANA","MAÇÃ","PERA","UVA"];

function carregar() {
    var itens = '';
    for (let i = 0; i < frutas.length; i++) {
        itens += `<li class="list-group-item m-auto w-75 d-flex align-center justify-content-between list-group-item-info mt-1 mb-1">
                        <p class="fs-5 text-black">${frutas[i]}</p>
                        <div>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#modal${i}">✏️</button>
                            <button class="btn btn-primary" onclick="remover(${i})">❌</button>
                        </div>
                        <div class="modal" id="modal${i}" tabindex="-1">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Edite fruta</h5>
                                        <button id="input" type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <input type="text" class="form-control mb-1 border border-primary p-2 novaFruta" name="novaFruta" class="novaFruta" value="${frutas[i]}">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" id="#save" class="btn btn-primary" data-bs-dismiss="modal" onclick="editar(${i})">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </li>`;
        fruta.value = '';
    }
    listaFrutas.innerHTML = itens;
}
carregar();

function remover(i) {
    const conf = window.confirm("Deseja remover essa fruta da cesta?");
    if (conf) {
        if (i >= 0) {
            frutas.splice(i, 1)
        }
    }
    carregar();
}

function editar(i){
    const novaFruta = document.getElementsByClassName("novaFruta")[i].value;
    frutas[i] = novaFruta.toUpperCase();
    carregar();
 }

btn.addEventListener("click", function () {
    if (frutas.includes(fruta.value)) {
        alert("fruta já na cesta")
        fruta.focus();
        return;
    }
    if (fruta.value != '') {

        frutas.push(fruta.value.toUpperCase());
    }
    carregar();
});



