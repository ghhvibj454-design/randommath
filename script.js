const hone = document.querySelector("h1");
const htwo = document.querySelector("h2");
const btn = document.querySelector("button");
function wiederNachUnten(){
    btn.style.transform = "translateY(10%)"
}
function flip(){
if(Math.random()<0.5){
    htwo.textContent = "head"
}
else{
    htwo.textContent = "tails"
}
btn.style.transform = "translateY(-10%)"
setTimeout(wiederNachUnten, 500)
}