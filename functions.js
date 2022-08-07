// Create a default 16 x 16 grid of squares (divs)
// to make divs appear as a grid, try: float/clear, inline-block, flexbox, CSS Grid
// Be careful with borders and margins
//space should be 960px wide

// **create square size as 960 / num of squares desired for editability in future
let setSquare = 16;
let totalSquares = 16 * 16;
let squareSize = 960/totalSquares;



// Set up a “hover” effect (mouse enters and then leaves a div) so that the grid divs change color when your mouse passes over them, 
// leaving a (pixelated) trail through your grid like a pen would.

// Can change color of the divs by: adding a new class to the div, changing the div’s background color using JavaScript


// Need a button that creates a popup asking for the desired number of squares
// removes old grid and new grid appears in the space of the same size
// limit is a max of 100px wide//
// look into how to make a js script run after a button is pushed
// look into prompts







// Extra Credit: Instead of just changing the color of a square from black to white (for example), have each pass through 
// with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it 
// so that only after 10 passes is the square completely black.