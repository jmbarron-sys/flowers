var flowers = [];
let index = 0;
let img; 
let img2;
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
  flowers[0] = loadImage ('img/group1.png');
  flowers[1] = loadImage ('img/group2.png');
  flowers[2] = loadImage ('img/group3.png');
  flowers[3] = loadImage ('img/group4.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  btn = createButton("Generate");
  btn.size (140,50)
  btn.position(1300,800);
  btn.mousePressed(nextGenerate);
  btn.style("color", "#7C1EBC"); 
  btn.style("background-color", "#F8EFDE"); 
  btn.style("font-size", "20px");
}

function draw() {
  background('#7A88ED');
  //Floor
  image(img,-8,630,1540,400);
  //Text
  image(img2,0,-160,1224,590);
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
