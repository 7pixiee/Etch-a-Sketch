const canvas = document.querySelector(".canvas");
const sizeButton = document.querySelector(".grid-size");
const clearButton = document.querySelector(".grid-clear");

function createCells(size){
    canvas.innerHTML = "";

    for(let i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        cell.classList.add('grid-cell');
          const cellSize = 500 / size;
cell.style.width = `${cellSize}px`;
cell.style.height = `${cellSize}px`;
        canvas.appendChild(cell);
        cell.addEventListener("mousemove", () => {
            cell.style.backgroundColor = "pink";
        })
    }
};

sizeButton.addEventListener("click", (e) => {
    const size = prompt("Enter size between 1 to 100");
    createCells(size);
});

