let gif;
let gif2;
let gif3;
let gif4;
let gif5;
let gif6;
let gif7;
let img; 
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let isHovering = false;
let isClicked = false;
let isClick;
//custom variable for x coordinate of clouds
let cloudOneX = 40;
let purple = {
  x1: 1420,
  y1: 458,
  x2: 1440,
  y2: 474,
  x3: 1420,
  y3: 490 
}

function preload() {
  gif = loadImage('img/flower1.gif');
  gif2 = loadImage('img/flower2.gif');
  gif3 = loadImage('img/flower3.gif');
  gif4 = loadImage('img/flower4.gif');
  gif5 = loadImage('img/cloud.gif');
  gif6 = loadImage('img/yellowflower.gif');
  gif7 = loadImage('img/pinkflower.gif');
  img = loadImage ('img/tree.png');
  img2=loadImage ('img/grass.png');
  img3=loadImage ('img/house.png');
  img4=loadImage ('img/cloud.png');
  img5=loadImage ('img/cloud2.png');
  img6=loadImage ('img/flower1.png');
  img7=loadImage ('img/flower2.png');
  img8=loadImage ('img/flower3.png');
  img9=loadImage ('img/flower4.png');
  img10=loadImage ('img/butterfly2.png');
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#7A88ED');
  //set frame rate to 50
  frameRate(50); 
  //Cloud
  image(gif5,cloudOneX,-10,400,200);
  //Moving cloud2
  image(img5,cloudOneX-1000,240,490,230)
  //Tree
  image(img,0,100,350,700);
  //House
  image(img3,900,380,350,500)
  
    //X,Y
  fill("black") //white text
  noStroke();
  textSize (12);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);
  
  //sets the x coordinate to the frame count
  //resets at left edge
  cloudOneX = frameCount % width
  
  //Flower 4
     if (isClicked) {
   image(gif7,1260,650,160,250);
  } else {
  image(gif4,1260,650,160,250);
  }
  //Flower 2 
   if (isClick) {
   image(gif6,340,450,170,250);
  } else {
   image(gif2,340,450,170,250);
  }
  //Grass
  image(img2,0,643,windowWidth,260);
  
  fill('#5D7B3D');
  noStroke();
  rect(0, 900, windowWidth, 50);
  
 //Flower 3
  if (mouseX > 550 && mouseX < 715 && mouseY > 600 && mouseY < 900) {
    isHovering = true;
  } else {
    isHovering = false;
  image(img8,500,640,240,360); 
  }
  // Reveal gif if hovering
  if (isHovering) {
  image(gif3,500,640,240,360);
  }
    //Flower 1
  if (mouseX > 80 && mouseX < 187 && mouseY > 500 && mouseY < 900) {
    isHovering = true;
  } else {
    isHovering = false;
  image(img6,50,580,220,400);  
  }
  // Reveal gif if hovering
  if (isHovering) {
  image(gif,50,580,220,400);
  }
//Cursor
 image(img10, mouseX, mouseY, 80,80);
 //Triangle button
  fill('purple');
  triangle(purple.x1, purple.y1, purple.x2, purple.y2, purple.x3, purple.y3);
  
}
function click() {
  let button = dist(mouseX, mouseY, purple.x1, purple.y1);
  if (button <= 50) {

   window.open("third.html")
    console.log("click!");
  }
}
function mousePressed() {
  if (mouseX > 367 && mouseX < 505 && mouseY > 490 && mouseY < 670) {
    isClick = true;
  }
  if (mouseX > 1288 && mouseX < 1370 && mouseY > 695 && mouseY < 855) {
    isClicked = true;
  }
    // Triangle button click (your function logic)
  let button = dist(mouseX, mouseY, purple.x1, purple.y1);
  if (button <= 50) {
    window.open("third.html");
    console.log("click!");
  }
}