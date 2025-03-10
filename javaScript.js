function createDivs(input) {
    const container = document.querySelector("#container");

    for (let i = 1; i <= input; i++) {
        const parentDiv = document.createElement("div"); 
        parentDiv.classList.add("grids-verticals");

        for (let j = 1; j <= input; j++) {
            const childDiv = document.createElement("div");
            childDiv.classList.add("grids-horizontals");
            parentDiv.appendChild(childDiv);
        }

        container.appendChild(parentDiv);
    }
}
const form = document.querySelector("#myForm");
const input = document.querySelector("#name");

    form.addEventListener("submit" , (event) => {
        event.preventDefault();
        const gridSize = parseInt(input.value);
        if (!isNaN(gridSize) && gridSize > 0) {
            createDivs(gridSize);
            event.submitter.target = true;
            input.disabled = true;
            alert("refresh for more creation")
        } else {
            alert("Please enter a number greater than 0.");
        }
    });







 