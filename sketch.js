let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;

function preload(){
 img = loadImage ('img/worm.png');
 img2 = loadImage ('img/welcome.png');
 img3 = loadImage ('img/flower.png');
 img4 = loadImage ('img/rain.png');
 img5 = loadImage ('img/line1.png');
 img6 = loadImage ('img/line2.png');
 img7 = loadImage ('img/butterfly.png');
 img8 = loadImage ('img/ladybug.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background ('#F6C94C');
  image(img,0,10,308,326);
  image(img2,240,389,1036,160);
  image(img3,740,304,270,670);
  image(img4,770,-20,200,317)
  image(img5,0,500,470,470)
  image(img6,1100,360,414,630)
  image(img7,1230,65,180,195)
  image(img8,420,680,140,200)

        //displays the x and y position of the mouse on the canvas
  fill(255) //white text
  textSize (12);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);
}
