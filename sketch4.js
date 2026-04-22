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
function preload() {
  img = loadImage ('img/floor.png');
  img2 = loadImage ('img/text.png');
  gif = loadImage ('img/textp4.gif');
  flowers[0] = loadImage ('img/group1.png');
  flowers[1] = loadImage ('img/group2.png');
  flowers[2] = loadImage ('img/group3.png');
  flowers[3] = loadImage ('img/group4.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
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

   fill('purple');
noStroke();
triangle(purple.x1, purple.y1, purple.x2, purple.y2, purple.x3, purple.y3);
 //Triangle button
  fill('purple');
  triangle(purple.x1, purple.y1, purple.x2, purple.y2, purple.x3, purple.y3);
  
  if (mouseIsPressed) {
    click();
  }

}

function click() {
  let button = dist(mouseX, mouseY, purple.x1, purple.y1);
  if (button <= 50) {

   window.open("gallery.html")
    console.log("click!");
  }
}
function nextGenerate() {
  index = index + 1;
  if (index == flowers.length) {
    index = 0;
  }
}
