let gif;
let gif2;
let gif3;
let gif4;
let gif5;
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
//custom variable for x coordinate of clouds
let cloudOneX = 40;


function preload() {
  gif = loadImage('img/flower1.gif');
  gif2 = loadImage('img/flower2.gif');
  gif3 = loadImage('img/flower3.gif');
  gif4 = loadImage('img/flower4.gif');
  gif5 = loadImage('img/cloud.gif');
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
  noCursor();
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
  
  //Flower 2
  if (mouseX > 385 && mouseX < 450 && mouseY > 470 && mouseY < 666) {
    isHovering = true;
  } else {
    isHovering = false;
  image(img7,340,450,170,250); 
  }
  // Reveal gif if hovering
  if (isHovering) {
  image(gif2,340,450,170,250)
  }
  
  //Flower 4
  if (mouseX > 1290 && mouseX < 1380 && mouseY > 690 && mouseY < 840) {
    isHovering = true;
  } else {
    isHovering = false;
  image(img9,1260,650,160,250);
  }
  // Reveal gif if hovering
  if (isHovering) {
  image(gif4,1260,650,160,250);
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
}