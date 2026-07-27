const canvas = document.querySelector(".canvas");
const sizeButton = document.querySelector(".grid-size");
const clearButton = document.querySelector(".grid-clear");

function createCells(size) {
    canvas.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add('grid-cell');
        const cellSize = 500 / size;
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.dataset.opacity = "0";
        canvas.appendChild(cell);

        cell.addEventListener("mouseover", () => {
            let opacity = Number(cell.dataset.opacity);
            opacity += 0.1;

            if (opacity > 1) {
                opacity = 1;
            }

            cell.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            cell.dataset.opacity = opacity;
        });
    };
};

sizeButton.addEventListener("click", (e) => {
    const size = prompt("Enter size between 1 to 100");
    createCells(size);
});

