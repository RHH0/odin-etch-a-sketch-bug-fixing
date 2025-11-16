let btn = document.querySelector("button");
let squaresContainer = document.querySelector(".squares-container");


btn.addEventListener("click", (e) => {
    if (document.querySelector(".square")) {
        const squares = document.querySelectorAll(".square")
        squares.forEach((square) => {
            square.remove();
        });
        
        requestToGenerateGrid();
    } else {
        requestToGenerateGrid();
    };
    
});


function requestToGenerateGrid() {
    let requestedSize = prompt("Grid size?");
        while (requestedSize < 2 || requestedSize > 100 || isNaN(requestedSize)) {
            requestedSize = prompt("Grid size?");
        }
        generateGrid(requestedSize);
};


function generateGrid(squaresPerSide) {
    let totalSquares = squaresPerSide ** 2;
    
    for (i = 1; i <= totalSquares; i++) {
        let square = document.createElement("div");
        let lengthPerSide = 650 / squaresPerSide;  //650 px is the restricted length for each row
        
        square.className = "square";
        square.id = "square"
        square.style.width = `${lengthPerSide}px`;
        square.style.height = `${lengthPerSide}px`;
        squaresContainer.appendChild(square);

        square.addEventListener('mouseenter', (e) => {
            square.style.backgroundColor = "yellow";
        });

        
    };
}







