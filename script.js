let grid = document.querySelector("#grid");
grid.style.display = "grid";
grid.style.height = "960px";
grid.style.width = "960px";
grid.style.gap = "1px";
grid.style.background = "black";
grid.style.border = "1px solid black";


function createCells(n) {
    let divQuantity = n*n;
    for (i = 0; i < divQuantity; i++){
        let cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell);
    }
    grid.style["grid-template-columns"] = `repeat(${n}, 1fr)`;
    grid.style["grid-template-rows"] = `repeat(${n},1fr)`;
}

createCells(16);
let cells = document.querySelectorAll(".cell");
cells.forEach(element => element.style.background = "white");