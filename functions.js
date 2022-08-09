// Creates a default 16 x 16 grid of squares (divs) that fills 960 px.
// Each square changes from black to white when the mouse passes over it.
// The grid can be resized by the user via prompt up to 100 squares per side.

let defaultSquare = 16;
let currentSquare = 16;
const grid = document.getElementById('grid');

grid.style.display = "flex";
grid.style.flexDirection = "row";

function mouseOver(myDiv) {
    myDiv.style.backgroundColor = "white";
}

function createGrid(numSquare){
    let squareSize = 960/(numSquare);
    squareSize = squareSize + "px";

    //creates the rows of divs
    for (h = 0; h < numSquare; h++){
        let newDivRow = document.createElement('div')
        grid.append(newDivRow);
        newDivRow.className += "divRow";
        console.log("row ", h);
        //creates the columns of divs and each square (background and event listener included)
        for (i = 0; i < numSquare; i++){
            let newDiv = document.createElement('div');
            
            console.log("square ", i);

            newDiv.id += "square";
            newDiv.style.height = squareSize;
            newDiv.style.width = squareSize;
            newDiv.style.backgroundColor= "black";
            newDiv.onmouseover = function() {mouseOver(newDiv)};
            newDivRow.append(newDiv);

            
        }
    }
}

function deleteGrid(){
    while (grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
}

function onPrompt() {
    let sizeRequest = prompt("How many squares would you like there to be per side? (less than 100 only)");
    alert(sizeRequest);
    if (sizeRequest != null){
        if (sizeRequest > 100) {
            alert("Must be less than 100!");
        }else {
            currentSquare = sizeRequest;
            deleteGrid();
            createGrid(currentSquare);
        }
    }
}


createGrid(defaultSquare, grid);
document.querySelector("#btn").addEventListener('click', onPrompt);


// Extra Credit for future consideration: Instead of just changing the color of a square from black to white, have each pass through 
// with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it 
// so that only after 10 passes is the square completely black.