const p = document.getElementById("pausa");
const r = document.getElementById("retoma");
const barprogress = document.getElementById("pb");
var pausado = false;
var delay = 1000;
var i = 0;
var timer = setInterval(function ligaTimer() {
    if(pausado == false){
    barprogress.style.width = i*10 + "%";
    if(i==10){
        i = 0;
    }
    i++;
    }

    p.addEventListener("click",()=>{
        delay = 0;
    })
    
    r.addEventListener("click",()=>{
        delay = 1000;
    })
}, delay);


p.addEventListener("click",()=>{
    pausado = true;
})

r.addEventListener("click",()=>{
    pausado = false;
})