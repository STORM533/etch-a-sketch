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

createDivs(6);



 