// Create a default 16 x 16 grid of squares (divs)
// to make divs appear as a grid, try: float/clear, inline-block, flexbox, CSS Grid
// space should be 960px wide

// **create square size as 960 / num of squares desired for editability in future
let setSquare = 16;
let totalSquares = 16 * 16;
let squareSize = 960/setSquare;
squareSize = squareSize + "px";

// **create a loop to create setSquare number of div elements with setSquare number of divs inside it (one for each square)

const grid = document.getElementById('grid');
grid.style.display = "flex";
grid.style.flexDirection = "row";

// **create "hover" effect by changing background color to edit CSS in javascript via their class id (leaving a pixelated trail)
// **give each div a onmouseover and onmouseout of changing background color to white
//function mOver(obj){
//    obj.backgroundColor = "white";
//}

//function mOut(obj){
//    obj.backgroundColor = "white";
//}

//function mouseOver() {
 //   document.getElementById("square").style.backgroundColor = "white";
//}

//function mouseOut() {
//    document.getElementById("square").style.backgroundColor = "white";
//}

//creates the rows of divs
for (h = 0; h < setSquare; h++){
    let newDivRow = document.createElement('div')
    grid.append(newDivRow);
    newDivRow.className += "divRow";
    //creates the columns of divs and each square (background and event listener included)
    for (i = 0; i < setSquare; i++){
        let newDiv = document.createElement('div');

        newDivRow.append(newDiv);
        newDiv.id += "square";
        newDiv.style.height = squareSize;
        newDiv.style.width = squareSize;
        newDiv.style.backgroundColor= "black";
        newDiv.onmouseover = function() {mouseOver()};
        newDiv.onmouseout = function () {mouseOut()};

        function mouseOver() {
            newDiv.style.backgroundColor = "white";
        }
        function mouseOut() {
            newDiv.style.backgroundColor = "white";
        }
    }
}

//document.querySelectorAll("#square").onmouseover = function() {mouseOver()};
//document.querySelectorAll("#square").onmouseout = function () {mouseOut()};

// Need a button that creates a popup asking for the desired number of squares
// removes old grid and new grid appears in the space of the same size
// limit is a max of 100px wide//
// look into how to make a js script run after a button is pushed
// look into prompts







// Extra Credit: Instead of just changing the color of a square from black to white (for example), have each pass through 
// with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it 
// so that only after 10 passes is the square completely black.