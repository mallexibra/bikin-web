const list = document.getElementById("ul");
const check = document.querySelector("#check");

check.addEventListener("click", ()=>{
    list.classList.toggle("none");
})