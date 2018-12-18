/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {

  let canvas = document.getElementById('canvas1')
  let ctx = canvas1.getContext('2d');
    ctx.font = '48px sans-serif';
    ctx.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

  let canvas = document.getElementById('canvas2')
  let ctx = canvas.getContext('2d');

let x;
let y;
let height;
let width;

do{
  height = prompt("Please enter the height for the Rectangle")
} while (height < 1 ||height > 512)

do{
  width = prompt("Please enter the width for the Rectangle")
} while (width < 1 ||width > 1024)

do{
  x = prompt("Please enter the x cordinate for the Rectangle")
} while (x < 5)
do{
  y = prompt("Please enter the y cordinate for the Rectangle")
} while (y < 5)

x = Number(x);
y = Number(y);
height = Number(height);
width = Number(width);

 ctx.strokeRect(x, y, height, width);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {

  canvas = document.getElementById("canvas3");
  const ctx = canvas.getContext("2d");

  let color;
   while(1){
     color = prompt("Please Enter a Valid Color")
     if(color == "black" || color == "blue" || color == "green" || color == "orange" || color == "purple" || color == "red" || color == "yellow") {
       break;
     }
     else {
       alert(`${color} is not supported.`)
     }
   }

  ctx.fillStyle=color;
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillRect(10, 10, 100, 50)
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let canvas = document.getElementById('canvas4');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512)

  let a = prompt("Enter the length of side 1");
  let b = prompt("Enter the length of side 2");
  let c = prompt("Enter the length of side 3");
  a = Number(a)
  b = Number(b)
  c = Number(c)


while((a*a) + (b*b) != (c*c) || a + 10 >= 512 || b + 10 >= 1024){
  alert("Please enter valid measurements for the triangle")
  a = prompt("Enter the length of side 1");
  a = Number(a)
  b = prompt("Enter the length of side 2");
  b = Number(b)
  c = prompt("Enter the length of side 3");
  c = Number(c)
}

a = Number(a)
b = Number(b)
  a = a + 10
  b = b + 10

  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(10, a);
  ctx.lineTo(b, a);
  ctx.lineTo(10, 10)
  ctx.stroke();
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
const canvas=document.getElementById("canvas5");
  const ctx=canvas5.getContext("2d");
  ctx.clearRect(0, 0, 1024, 512);

  let face;
  let x = 5;
  let y = 5;

  do {
    face = prompt("Enter face's radius");
    face = Number(face);
  } while (face + x >= 1024 || face + y >= 512 || face < 1)

  while(x - face < 5 || x + face > 1024) {
    x+= 5
  }
  while(y - face < 5 || y + face > 512) {
    y+= 5
  }

  let mouth = face*0.70
  let eyes = face*0.10
  let eye1X = x - (face/3.5)
  let eye1Y = y - (face/3)
  let eye2X = x + (face/2)
  let eye2Y = y - (face/3)
  let m = y + (face/9)


  ctx.beginPath();
  ctx.arc(x,y,face,0,2*Math.PI);

  ctx.moveTo(eye1X, eye1Y);
  ctx.arc(eye1X-eyes, eye1Y, eyes, 0, 2*Math.PI);

  ctx.moveTo(eye2X, eye2Y);
  ctx.arc(eye2X-eyes, eye2Y, eyes, 0, 2*Math.PI);

  ctx.moveTo(x+mouth,m);
  ctx.arc(x, m, mouth, 0, Math.PI);
  ctx.stroke();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
let canvas = document.getElementById('canvas6');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 256);
  
let outer = prompt("Enter the Outer Radius");
let inner = prompt("Enter the Inner Radius");
    
outer = Number(outer);
inner = Number(inner);

if (isNaN(outer) == true || isNaN(inner) == true) {
  alert("One of your inputs is not a number.");
} else if (outer < 2) {
  alert("Your outer radius is too small.");
} else if (inner < 1) {
  alert("Your inner radius is too small.");
} else if (outer <= inner) {
  alert("Your outer radius must be larger than your inner radius.")
} else {
  ctx.beginPath();
  ctx.moveTo(125, 125 - outer);
  
  let x = 0;
  let angle = 0 * Math.PI;
    
  while (x < 5) {
    ctx.lineTo(Math.cos(1.3 * Math.PI - angle) * inner + 125, Math.sin(1.3 * Math.PI - angle) * inner + 125);
    ctx.lineTo(Math.cos(1.1 * Math.PI - angle) * outer + 125, Math.sin(1.1 * Math.PI - angle) * outer + 125);
    angle = angle + 0.4 * Math.PI;
    x = x + 1;
  }
  ctx.closePath();
  ctx.stroke();
  lineWidth = 1;
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
let canvas = document.getElementById('canvas7');
  let ctx = canvas7.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(67, 10);
  ctx.lineTo(147, 10);
  ctx.lineTo(204, 67);
  ctx.lineTo(204, 147);
  ctx.lineTo(147, 204);
  ctx.lineTo(67, 204);
  ctx.lineTo(10, 147);
  ctx.lineTo(10, 67);
  ctx.lineTo(67, 10);
  ctx.fillStyle="red";
  ctx.fill();
  ctx.stroke();

  ctx.font='65px sans-serif';
  ctx.fillStyle="white";
  ctx.fillText('STOP', 20, 130);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
let canvas = document.getElementById('canvas8');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512)

  let length
  let x = 0
  let y = 0 
  let max = 5;
  let xOver = 0;
  let yUp = 0;
  let init = 0;
  
    do{
        length = prompt("Enter the side length of a box")
        length = Number(length)
    } while(length < 0 || length > 100 || NaN)
 
 ctx.beginPath();
    while (y < 5) {
      while (x < max) {
          ctx.strokeRect(10 + xOver + init, 512 - 10 - length - yUp, length, length);
          xOver = xOver + length;
          x++;
      }
      y++;
      x = 0;
      xOver = 0;
      yUp = yUp + length;
      max = max - 1;
      init = init + (length / 2);
   }    
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
let canvas = document.getElementById('canvas9');
  let ctx = canvas9.getContext('2d');
  ctx.clearRect(0, 0, 1024, 760);

  let houseColor = prompt("Please enter a house color.")
  while(houseColor != "brown" && houseColor !="blue" && houseColor !="green" && houseColor !="orange" && houseColor !="purple" && houseColor !="red" && houseColor !="yellow"){
      houseColor = prompt(`${houseColor} is not a supported color`)
    }

  let doorColor = prompt("Please enter a front door color")
  while(doorColor != "brown" && doorColor !="blue" && doorColor !="green" && doorColor !="orange" && doorColor !="purple" && doorColor !="red" && doorColor !="yellow" || doorColor == houseColor){
      doorColor = prompt(`${doorColor} is not a supported color or is the same as the previous color`)
    }

  ctx.rect(150, 250, 724, 495)
  ctx.fillStyle = houseColor
  ctx.fillRect(150, 250, 724, 495);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 250);
  ctx.lineTo(512, 10);
  ctx.lineTo(874, 250);
  ctx.lineTo(150, 250);
  ctx.fillStyle = "gray"
  ctx.closePath();
  ctx.fill();

  ctx.rect(462, 545, 100, 200);
  ctx.fillStyle = doorColor
  ctx.fillRect(462, 545, 100, 200);
  ctx.stroke();

  let window = "SkyBlue"

  ctx.rect(250, 550, 100, 100)
  ctx.fillStyle = window
  ctx.fillRect(250, 550, 100, 100);
  ctx.stroke();

  ctx.rect(250, 350, 100, 100)
  ctx.fillStyle = window
  ctx.fillRect(250, 350, 100, 100);
  ctx.stroke();

  ctx.rect(674, 550, 100, 100)
  ctx.fillStyle = window
  ctx.fillRect(674, 550, 100, 100);
  ctx.stroke();

  ctx.rect(674, 350, 100, 100)
  ctx.fillStyle = window
  ctx.fillRect(674, 350, 100, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(540, 650, 10, 0, 2*Math.PI)
  ctx.fillStyle = "GoldenRod"
  ctx.fill();
  ctx.stroke();
}
