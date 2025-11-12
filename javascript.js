let btn = document.querySelector("button");


btn.addEventListener("click", (e) => {
    if (document.querySelector(".squares-container")) {
        document.querySelector(".squares-container").remove();
        requestToGenerateGrid();
    } else {
        requestToGenerateGrid();
    };
    
});


function requestToGenerateGrid() {
    let requestedSize = prompt("Grid size?");
        while (requestedSize < 2 || requestedSize > 100) {
            requestedSize = prompt("Grid size?");
        }
        generateGrid(requestedSize);
};


function generateGrid(squaresPerSide) {
    let totalSquares = squaresPerSide ** 2;
    let squaresContainer = document.createElement("div");
    squaresContainer.className = "squares-container";
    document.body.appendChild(squaresContainer);
    
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

        square.addEventListener('mouseleave', (e) => {
            square.style.backgroundColor = "blue";
        });
    };
}







