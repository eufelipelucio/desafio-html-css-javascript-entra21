var expresao = document.querySelector(".tela");
var valores = document.getElementsByClassName("valores")
const calcular = document.getElementById("calcular");
const apagar = document.getElementById("apagar");

for (let i = 0; i < valores.length; i++) {
    const element = valores[i];
    const valor = element.innerHTML;
    element.addEventListener("click", () => {
        return expresao.value += valor
    })
}

async function teste() {
    var result = new Promise((res) => {
        if (expresao) {
            res(eval(expresao.value))
        }
    }).catch((err) => {
        if (err) {
           return "Inválido";
        }
    })
    return expresao.value = await result;
}
calcular.addEventListener("click",()=>{
    teste();
})
// calcular.addEventListener("click", ()=>{
//   const result =  expresao ? eval(expresao.value) : "Sem comando"
//      return expresao.value = result
// })


apagar.addEventListener("click", () => {
    return expresao.value = "";
})

