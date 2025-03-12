function randomColors(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createDivs(input) {
    const container = document.querySelector("#container");
    const containerPx = 500;
    const divPx = containerPx/input;
    for (let i = 1; i <= input; i++) {
        const pDiv = document.createElement("div"); 
        pDiv.classList.add("grids-verticals");

        for (let j = 1; j <= input; j++) {
            const cDiv = document.createElement("div");
            cDiv.classList.add("grids-horizontals");
            cDiv.style.width = `${divPx}px`;
            cDiv.style.height = `${divPx}px`;
            cDiv.addEventListener("mouseover" , function(){
                this.style.backgroundColor = randomColors();
            });
            cDiv.addEventListener("mouseout" , function(){
                this.style.backgroundColor = randomColors();
            })

            pDiv.appendChild(cDiv);
        }

        container.appendChild(pDiv);
    }
}


const form = document.querySelector("#myForm");
const input = document.querySelector("#name");
    
form.addEventListener("submit" , (event) => {
    event.preventDefault();
    const submitButton = event.submitter;
    submitButton.disabled = true;
    const gridSize = parseInt(input.value);
    if (!isNaN(gridSize) && gridSize > 0) {
        createDivs(gridSize);      
        input.disabled = true;
        alert("refresh page for more creation")
    } else {
        alert("refresh page and enter a number greater than 0.");
    }
});









 