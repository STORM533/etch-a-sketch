
const form = document.querySelector("#myForm");
const btns  = document.querySelectorAll("button");
btns.forEach((button) =>{
    button.addEventListener("submit",() =>{
        event.preventDefault();
        createDiv()
    })
})
function createDiv(){
    const input  = document.querySelector("#myForm").input
    const container = document.querySelector("#container");
    for(let i = 1; i <= size; i++){
        
        const divs = document.createElement("div");
        container.appendChild(divs);
    }
}
