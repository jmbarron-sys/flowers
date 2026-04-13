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
let gif;
let gif2;
let gif3;
let gif4;
let gif5;
let gif6;
let isClicked = false;
let isClick
let isHovering = false;
let purple = {
  x1: 1420,
  y1: 458,
  x2: 1440,
  y2: 474,
  x3: 1420,
  y3: 490 
}


//custom variable for x coordinate of clouds
let cloudOneX = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
   noCursor();
}
function preload () {
  gif = loadImage('img/flower5.gif');
  gif2 = loadImage('img/flower6.gif');
  gif3 = loadImage('img/flower7.gif');
  gif4 = loadImage('img/flower8.gif');
  gif5 = loadImage ('img/redflower.gif');
  gif6 = loadImage ('img/purpleflower.gif');
  img = loadImage ('img/grass2.png');
  img2 = loadImage ('img/tree2.png');
  img3 = loadImage ('img/sun.png');
  img4 = loadImage ('img/cloud4.png');
  img5 = loadImage ('img/cloud5.png');
  img6 = loadImage ('img/butterfly2.png');
  img7 = loadImage ('img/flower5.png');
  img8 = loadImage ('img/flower6.png');
  img9 = loadImage ('img/flower7.png');
  img10 = loadImage ('img/flower8.png');


}

function draw() {
  background('#7A88ED');
      //X,Y
  fill("black") //white text
  noStroke();
  textSize (12);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);
  //sets the x coordinate to the frame count
  //resets at left edge
  cloudOneX = frameCount % width
  //Cloud
  image(img4,cloudOneX,40,400,200);
  //Moving cloud2
  image(img5,cloudOneX-1000,240,490,230)
  //Tree
  image(img2,900,80,373,630);

    //Flower 8
  if (isClick) {
  image(gif6,1280,460,180,220);
  } else {
    image(gif4,1280,460,180,220);
  }

    //Flower 7
  if (isClicked) {
  image(gif5,390,580,210,300);
  } else {
    image(gif3,390,580,210,300);
  }

  //Grass
  image(img,0,643,windowWidth,260);
  fill('#5D7B3D');
  noStroke();
  rect(0, 900, windowWidth, 50);

   //Flower 5
  if (mouseX > 85 && mouseX < 260 && mouseY > 660 && mouseY < 960) {
    isHovering = true;
  } else {
    isHovering = false;
  image(img7,45,630,255,355);
  }
     // Reveal gif if hovering
  if (isHovering) {
  image(gif,45,630,255,355);
  }

 //Flower 6
  if (mouseX > 745 && mouseX < 910 && mouseY > 660 && mouseY < 960) {
    isHovering = true;
  } else {
    isHovering = false;
  image(img8,700,630,260,350);
  }
     // Reveal gif if hovering
  if (isHovering) {
    image(gif2,700,630,260,350);
  }
  //Cursor
 image(img6, mouseX, mouseY, 80,80); 
  
 fill('purple');
noStroke();
triangle(purple.x1, purple.y1, purple.x2, purple.y2, purple.x3, purple.y3);


}


function click() {
  let button = dist(mouseX, mouseY, purple.x1, purple.y1);
  if (button <= 50) {

   window.open("fourth.html")
    console.log("click!");
  }
}
function mousePressed() {
  if (mouseX > 435 && mouseX < 560 && mouseY > 615 && mouseY < 850) {
    isClicked = true;
  }
  if (mouseX > 1312 && mouseX < 1420 && mouseY > 470 && mouseY < 655) {
    isClick = true;
  }
    // Triangle button click (your function logic)
  let button = dist(mouseX, mouseY, purple.x1, purple.y1);
  if (button <= 50) {
    window.open("fourth.html");
    console.log("click!");
  }
}
