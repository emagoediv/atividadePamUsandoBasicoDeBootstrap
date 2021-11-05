const n1 = document.getElementById("m1");
const b = document.getElementById("btn");


b.addEventListener("click", ()=>{
    if(n1.value == 1){
        window.open("opcao1/calcularAumento.html", ",_top");
    }else if(n1.value == 2){
        window.open("opcao2/calcularDesconto.html", ",_top");
    }else{
        window.confirm("valor inválido");
    }

})