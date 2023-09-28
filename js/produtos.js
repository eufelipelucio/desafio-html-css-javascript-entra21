class Produto {
    descricao 
    valor
    quantidade
}

const table = document.getElementById("text")
const comprar = document.getElementById("comprar");
const descricao = document.getElementById("descricaoProduto");
const valorProduto = document.getElementById("valorProduto");
const qntProduto = document.getElementById("qntProduto");
const listarProdutos = document.getElementById("mostrar");
const total = document.getElementById("total");
const textTotal = document.getElementById("textTotal");

var produtos = [
    {
        descricao:"Pão",
        valor:12,
        quantidade:5
    },
    {
        descricao:"Queijo",
        valor:40,
        quantidade:3
    }
];

function mostrar(){
    let itens = '';
    produtos.map((prod,i)=>{
            itens += 
            `<tr class="border">
                <td class="border">${prod.descricao}</td>
                <td class="border">${prod.valor}</td>
                <td class="border">${prod.quantidade}</td>
                <td class="border"><button class="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#teste${i}">Editar</button></td>
                <td class="border"><button class="btn btn-danger" onclick=excluir(${i})>Excluir</button></td>
            <tr>
            <div class="modal" tabindex="-1" id="teste${i}">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-dark" id="modal${i}">Editar Produto</h5>
                            <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-dark">
                            <label for="descricaoProdutoNovo">Descrição:</label>
                            <input type="text" class="form-control mb-1 border border-primary p-2" name="descricaoProdutoNovo" id="descricaoProdutoNovo" value="${prod.descricao}">
                            <label for="valorProdutoNovo">Valor:</label>
                            <input type="number" class="form-control mb-1 border border-primary p-2" name="valorProdutoNovo" id="valorProdutoNovo" value="${prod.valor}">
                            <label for="qntProdutoNovo">Telefone:</label>
                            <input type="number" class="form-control mb-1 border border-primary p-2r" name="qntProdutoNovo" id="qntProdutoNovo" value="${prod.quantidade}">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  onclick=editar(${i})>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
            `
    })
    table.innerHTML = itens;
    calculaValorTotal();
}
function calculaValorTotal(){
    var total =  0;
    produtos.map((prod)=> {
        total += (prod.valor * prod.quantidade);     
    });
    textTotal.innerHTML = "Valor Total: " + total;
}
function editar(i){
    let produto = new Produto();
    produto.descricao = document.getElementById("descricaoProdutoNovo").value
    produto.valor = document.getElementById("valorProdutoNovo").value
    produto.quantidade = document.getElementById("qntProdutoNovo").value
    produtos[i] = produto;
    mostrar();
}
function excluir(i){
    let confir = window.confirm("Deseja excluir o produto?");
    if(confir){
        produtos.splice(i,1);
        mostrar();
    }
}

function clear(){
    descricao.value = ''
    valorProduto.value = ''
    qntProduto.value = ''
}
function adicionar(){
    if(descricao.value !== '' && valorProduto.value !== '' && qntProduto.value !== ''){
        let produto = new Produto();
        produto.descricao = descricao.value
        produto.valor = valorProduto.value
        produto.quantidade = qntProduto.value
        produtos.push(produto);
    }else{
        alert("Informe todos os valores")
    }
}
total.addEventListener('click',()=> {
   
})


comprar.addEventListener('click',(e)=>{
    e.preventDefault();
    adicionar();
    mostrar();
    clear();
})
listarProdutos.addEventListener("click",(e)=>{
    e.preventDefault();
    mostrar();
})
