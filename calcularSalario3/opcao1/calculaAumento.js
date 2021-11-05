const salario = document.getElementById("m1");
const porcentagem = document.getElementById("pta");
const b = document.getElementById("btn");
const R = document.getElementById("r");
const bprogress = document.getElementById("pb");

setInterval(()=>{
    bprogress.style.width = porcentagem.value + "%";
},100)

b.addEventListener("click", ()=>{
    let v, p, nv;
    v = Number(salario.value); 
    p = Number(porcentagem.value); 
    nv = v + (v *(p*0.01));
    R.value = nv;
    nS = salario - (salario *(porc*0.01));

})