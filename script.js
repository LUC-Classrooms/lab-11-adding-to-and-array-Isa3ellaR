
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); // creates a new array of one elemnt and assigns it to "dot"

function setup() { // set up the sketch
  createCanvas(500, 300); // set the size of the canvas
  dots[0] = new Dot(width/2, height/2); // initialize the dots array index 0 every time with a new instance of the Dot class 
} //blocks the end of the setup function

function draw() { //start of draw function, draws something 60 times/second
  background(200); //sets background to grey color

  //loop through all elements in the dots array
  for(let i = 0; i < dots.length; i++){
    dots[i].move(); //movement of each Dot object
    dots[i].display(); //displays each Dot object
  }
  textSize(24); //sets text size to 24
  fill(100, 0, 200); //fills text color with purple
  text("'dots' array length: " + dots.length, 100, 100); //text + display with the length of the dots array on the canvas (displays an increasing number with each new instance of the Dot object)

} //end of the draw function

function mousePressed(){ //function executes when the mouse is pressed
  let obj = new Dot(mouseX, mouseY); //creates new Dot object at the mouse coordinates (if mouse is pressed)
  dots.push(obj); //adds the new Dot object with the .push() function
  
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

}// end of the mousePressed function


function Dot(X, Y){ //constructor function for the Dot objects
  
  this.x = X; //sets x property from the first argument
  this.y = Y; //sets y property from the second argument
  this.w = random (20, 50); //random size width between 20 and 50
  this.sx = random(-5, 5); //sets random horizontal(x) speed between -5 and 5
  this.sy = random(-5, 5); //sets random vertical(y) speed between -5 and 5
  this.r = random(0, 255); //sets random red value (between 0 and 255)
  this.g = random(0, 255); //sets random green value (between 0 and 255)
  this.b = random(0, 255); //sets random blue value (between 0 and 255)
  
  this.display = function(){ //displays the Dot
    fill(this.r, this.g, this.b); //fills the Dot object with the random values for the color
    ellipse(this.x, this.y, this.w, this.w); //makes an ellipse with the random x coordinate, y coordinate, and width
  } //end of display function
  
  this.move = function(){ //moves the dot object
    this.x += this.sx; // updates x coordinate based on x speed 
    this.y += this.sy; //updates y coordinate based on y speed
    
    if (this.x < 0 || this.x > width){ //if statement that reverses x speed if the Dot object reached the canvas edges horizontally
        this.sx *= -1; //reverse of x speed/change in direction
    } //end of if statement

    if (this.y < 0 || this.y > height){ //if statement taht reverses y speed if the Dot object reaches the canvas edges vertically
        this.sy *= -1; //reverse of y speed/change in direction
    } //end of if statement
  } //end of this.move function
    
} //end of constructor function
