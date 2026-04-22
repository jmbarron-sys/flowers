var flowers = [];
let index = 0;
let img; 
let img2;
let gif;
let purple = {
  x1: 1420,
  y1: 458,
  x2: 1440,
  y2: 474,
  x3: 1420,
  y3: 490 
}
let purple2 = {
  x1: 91,
  y1: 458,
  x2: 71,
  y2: 474,
  x3: 91,
  y3: 490 
}
function preload() {
  img = loadImage ('img/floor.png');
  img2 = loadImage ('img/butterfly2.png');
  gif = loadImage ('img/textp4.gif');
  flowers[0] = loadImage ('img/group1.png');
  flowers[1] = loadImage ('img/group2.png');
  flowers[2] = loadImage ('img/group3.png');
  flowers[3] = loadImage ('img/group4.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
btn5 = createButton("Click Here");
btn5.mousePressed(nextGenerate);
btn5.class("btn5");
}

function draw() {
  background('#7A88ED');
  //Floor
  image(img,-8,630,1540,400);
  //Text
  image(gif,20,40,1100,80);
  //Group
  image(flowers[index],300, 300, 1000, 450);
 //Triangle button Foward
  fill('purple');
  noStroke();
  triangle(purple.x1, purple.y1, purple.x2, purple.y2, purple.x3, purple.y3);
  //Triangle button Back
  fill('purple');
  noStroke();
  triangle(purple2.x1, purple2.y1, purple2.x2, purple2.y2, purple2.x3, purple2.y3);
  //Cursor
 image(img2, mouseX, mouseY, 80,80);
  
  if (mouseIsPressed) {
    click();
  }

}

function click() {
  let button = dist(mouseX, mouseY, purple.x1, purple.y1);
  if (button <= 50) {

   window.location.replace("gallery.html");
    console.log("click!");
  }
   let button2 = dist(mouseX, mouseY, purple2.x1, purple2.y1);
  if (button2 <= 50) {

   window.location.replace("third.html");
    console.log("click!");
  }
}
function nextGenerate() {
  index = index + 1;
  if (index == flowers.length) {
    index = 0;
  }
}
