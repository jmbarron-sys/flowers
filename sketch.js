let ratio;
let img;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let gif;
let gif2;

function preload(){
 img = loadImage ('img/worm.png');
 img3 = loadImage ('img/flower.png');
 img4 = loadImage ('img/rain.png');
 img5 = loadImage ('img/line1.png');
 img6 = loadImage ('img/line2.png');
 img7 = loadImage ('img/butterfly.png');
 img8 = loadImage ('img/ladybug.png');
 img9 = loadImage ('img/butterfly2.png');
 gif = loadImage ('img/welcome.gif');
 gif2 = loadImage ('img/flower.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   noCursor();
}

function draw() {
  background ('#F6C94C');
  image(img,0,10,308,326);
  image(gif,240,389,1036,160);
  image(gif2,705,304,400,670);
  image(img4,770,-20,200,317)
  image(img5,0,500,470,470)
  image(img6,1100,360,414,630)
  image(img7,1230,65,180,195)
  image(img8,420,680,140,200)
    //Cursor
 image(img9, mouseX, mouseY, 80,80); 

        //displays the x and y position of the mouse on the canvas
  fill(255) //white text
  textSize (12);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);
 
}
function windowResized() {
  const design_w = 1440;
  const design_h = 900;
  ratio = min(windowWidth/design_w, windowHeight/design_h);
  resizeCanvas(design_w*ratio,design_h*ratio);
}
