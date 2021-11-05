const n1 = document.getElementById("m1");
const n2 = document.getElementById("m2");
const b = document.getElementById("btn");
const R = document.getElementById("r");

b.addEventListener("click", ()=>{
    let nota1, nota2, r;
    nota1 = Number(n1.value); 
    nota2 = Number(n2.value); 
    if(nota1>nota2){
        r = "O primeiro valor é maior";
    }else if(nota1<nota2){
        r = "o segundo valor é maior";
    }else if(nota1 == nota2){
        r = "os valores são iguais";
    }
    R.value = r;

})