const btnBusca = document.getElementById("buscaUmGato");
const btnBuscaGatos = document.getElementById("buscaGatos");
var container =  document.getElementById('container');
var data = []
var urlGatos = `https://api.thecatapi.com/v1/images/search?limit=10`
var urlGato = `https://api.thecatapi.com/v1/images/search`
btnBusca.addEventListener('click', () => {
   buscaGatos(urlGato);
})
btnBuscaGatos.addEventListener('click',()=>{
    buscaGatos(urlGatos);
})


function buscaGatos(url){
    var image = '';
    fetch(url)
    .then((dados) => dados.json())
    .then((response) => {
        data = response;
    })
    .then(()=>{
        data.map((item) => {
            return (
                image += 
                    `<div class="card m-auto" style="width:250px">
                        <img src=${item.url}  class="card-img-top" alt="Image">
                    </div>`
            )
        });
    container.innerHTML = image;
})
}
