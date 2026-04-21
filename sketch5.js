var mainframe = [];
var flowers = [];
let index1 = 0;
let index2 = 0;
let btn;
let img;
let img2;
let img3;
let img4;
let img5;
let input, button, greeting;

function preload () {
  img = loadImage ('img/background.png');
  img2 = loadImage ('img/frame1.png');
  img3 = loadImage ('img/frame2.png');
  img4 = loadImage ('img/frame3.png');
  img5 = loadImage ('img/frame4.png');
  flowers[0] = loadImage ('img/b1.png');
  flowers[1] = loadImage ('img/b2.png');
  flowers[2] = loadImage ('img/b3.png');
  flowers[3] = loadImage ('img/b4.png');
  flowers[4] = loadImage ('img/b5.png');
  flowers[5] = loadImage ('img/b6.png');
  flowers[6] = loadImage ('img/b7.png');
  flowers[7] = loadImage ('img/b8.png');
  flowers[8] = loadImage ('img/b9.png');
  flowers[9] = loadImage ('img/b10.png');
  flowers[10] = loadImage ('img/b11.png');
  flowers[11] = loadImage ('img/b12.png');
  mainframe[0] = loadImage ('img/mframe1.png');
  mainframe[1] = loadImage ('img/mframe2.png');
  mainframe[2] = loadImage ('img/mframe3.png');
  mainframe[3] = loadImage ('img/mframe4.png');
  
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
//Pick a Frame
btn3 = createButton("Select a frame");
btn3.mousePressed(nextGenerate1);
btn3.class("btn3");
//Text input
input = createInput();
input.position(1158,880);
input.style("border-radius", "12px");
input.style("border-width", "2.5px");
input.style("border-style", "solid");
input.style("border-color", "#7D1EBC");
input.style("background-color", "#F8EFDD");
input.style("outline", "none");
input.size(200, 40);
//Submit button
btn4 = createButton('Submit');
  btn4.class("btn4");
  btn4.mousePressed(greet);
//Message display
  greeting = createElement('h2', 'Your message...');
  greeting.class("greeting");
}

function draw() {
  background(220);
  //Background
  image(img,0,0,windowWidth,windowHeight);
  //Frame1
  image(img2,140,90,230,280);
  //Frame2
  image(img3,133,550,250,250);
  //Frame3
  image(img4,1180,150,240,250);
  //Frame4
  image(img5,1070,500,340,304);
  //Main fram index
  image(mainframe[index1],500,90,540,740);
  //Flowers index
  image(flowers[index2],675,250,220,400)

  //X,Y
  fill("black") //white text
  noStroke();
  textSize (12);
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);

   fill('#7A87ED');
  rectMode(CORNER); // default: CORNER
  rect(0, windowHeight-90, windowWidth,90);
}
  //Generate frames when pressed
function nextGenerate1() {
  index1 = index1 + 1;
  if (index1 == mainframe.length) {
    index1 = 0;
  }
}
function mousePressed() {
  // Flower click area
  if (mouseX > 650 && mouseX < 820 && mouseY > 230 && mouseY < 690) {
    nextGenerate();
  }    
      //Generate flowers when pressed
function nextGenerate() {
  index2 = index2 + 1;
  if (index2 == flowers.length) {
    index2 = 0;
  } 
 }
}
 function greet() {
  const message = input.value();
  greeting.html(message);
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill("#F8EFDD");
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(message, 0, 0);
    pop();
  }
}

