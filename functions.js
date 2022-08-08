// Create a default 16 x 16 grid of squares (divs)
// to make divs appear as a grid, try: float/clear, inline-block, flexbox, CSS Grid
// space should be 960px wide



function mouseOver(myDiv) {
    myDiv.style.backgroundColor = "white";
}

function createGrid(numSquare, grid){
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

// Need a button that creates a popup asking for the desired number of squares
// removes old grid and new grid appears in the space of the same size by refreshing page with new defaultSquare value
// limit is a max of 100px wide//
// look into how to make a js script run after a button is pushed
// look into prompts

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
            defaultSquare = sizeRequest;
        }
    }
}

// **create square size as 960 / num of squares desired for editability in future
let defaultSquare = 16;
let currentSquare = 16;
let totalSquares = 16 * 16;

// **create a loop to create defaultSquare number of div elements with defaultSquare number of divs inside it (one for each square)

const grid = document.getElementById('grid');
grid.style.display = "flex";
grid.style.flexDirection = "row";

// **create "hover" effect by changing background color to edit CSS in javascript via their class id (leaving a pixelated trail)
// **give each div a onmouseover and onmouseout of changing background color to white
//defaultSquare should be numSquare



// Extra Credit: Instead of just changing the color of a square from black to white (for example), have each pass through 
// with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it 
// so that only after 10 passes is the square completely black.


createGrid(defaultSquare, grid);
document.querySelector("#btn").addEventListener('click', onPrompt);