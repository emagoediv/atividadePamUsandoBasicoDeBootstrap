const n1 = document.getElementById("m1");
const n2 = document.getElementById("m2");
const n3 = document.getElementById("m3");
const b = document.getElementById("btn");
const R = document.getElementById("r");
const bprogress = document.getElementById("pb");

b.addEventListener("click", ()=>{
    let nota1, nota2, nota3, r;
    nota1 = Number(n1.value); 
    nota2 = Number(n2.value); 
    nota3 = Number(n3.value);
    r = (nota1 + nota2 + nota3) / 3;
    R.value = r;
    bprogress.setAttribute("aria-valuenow",r*10);
    bprogress.style.width = r*10 + "%";
    if(r >= 7){
        window.confirm("Aprovado");
    }else{
        window.confirm("Reprovado");
    }

})