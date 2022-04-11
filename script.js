function reset(){
    let cells = document.querySelectorAll(".cell");
    cells.forEach(element => element.style.background = "white");
}

function selectDim(){
    let input = document.querySelector("#dimensions");
    createCells(input.value);
    input.value = "";
}

function createCells(n) {
    n = Number(n);
    if(n > 100 || typeof(n) != "number" || n == NaN || n <= 0) {
        alert("Please enter a positive number less than or equal 100.");
        return;
    }
    let divQuantity = n*n;
    for (i = 0; i < divQuantity; i++){
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.style.background = "white";
        cell.addEventListener('mouseover', function(){
            cell.style.background = "black";
        })
        grid.appendChild(cell);
    }
    grid.style["grid-template-columns"] = `repeat(${n}, 1fr)`;
    grid.style["grid-template-rows"] = `repeat(${n},1fr)`;
}


let grid = document.querySelector("#grid");
grid.style.display = "grid";
grid.style.height = "960px";
grid.style.width = "960px";
grid.style.gap = "1px";
grid.style.background = "black";
grid.style.border = "1px solid black";






