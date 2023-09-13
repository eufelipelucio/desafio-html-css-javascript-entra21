    const btn = document.getElementById("btn");
    const input = document.getElementById("idade");
    const idadeValor = document.getElementById("idade-valor");
    
    btn.addEventListener("click" , function (){
        if(input.value != ''){
            let hoje = new Date();
            let [ano, mes, dia] = input.value.split('-').map(Number);
            let anoAtual = hoje.getFullYear();
            let mesAtual = hoje.getMonth()+1;
            let diaAtual = hoje.getDate();
            let idade = anoAtual - ano;
            
            mesAtual == mes && dia > diaAtual ? idade-- : idade = idade;
            idadeValor.innerHTML = idade < 18 ? "Você é menor de idade!!" : "Você é maior de idade!!";
    
            let styles = idadeValor.style;
    
            styles.color = idade < 18 ? "red" : "green";
            styles.textAlign = "center";
            styles.marginTop = "2rem";
        }

        event.preventDefault();
    })
    

