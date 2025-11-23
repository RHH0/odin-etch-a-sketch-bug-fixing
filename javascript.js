let btn = document.querySelector("button");
let squaresContainer = document.querySelector(".squares-container");
const body = document.querySelector("body");
let isKeyPressed = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

btn.addEventListener("click", (e) => {
    if (document.querySelector(".square")) {
        const squares = document.querySelectorAll(".square")
        squares.forEach((square) => {
            square.remove();
        });
        
        requestToGenerateGrid();
    } 
    else {
        requestToGenerateGrid();
    };
    
});

body.addEventListener("mousedown" , (e) =>{
    isKeyPressed = true;
})

body.addEventListener("mouseup" , (e) =>{
    isKeyPressed = false;
})


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

        let redValue = getRandomInt(255);
        let greenValue = getRandomInt(255);
        let blueValue = getRandomInt(255);
        square.addEventListener('mouseenter', (e) => {
            if(isKeyPressed){
                square.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
            }            
        });
    };
}