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
let purple2 = {
  x1: 91,
  y1: 458,
  x2: 71,
  y2: 474,
  x3: 91,
  y3: 490 
}
//this is a global variable for your color picker for your text color and your message
let colorPicker;
let currentMessage = "Your message will appear here";
let currentColor = "#7D1EBC";

function preload () {
  img = loadImage ('img/background.png');
  img2 = loadImage ('img/frame1.png');
  img3 = loadImage ('img/frame2.png');
  img4 = loadImage ('img/frame3.png');
  img5 = loadImage ('img/frame4.png');
  img6 = loadImage ('img/butterfly2.png');
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
  noCursor();
//Download Button
  removeBtn = createButton("Download");
  removeBtn.position(30, 880);
  removeBtn.size (100,46);
  removeBtn.mousePressed(saveToFile);
  removeBtn.style("color", "#7D1EBC");
  removeBtn.style("background-color", "#F8EFDD");
  removeBtn.style("border", "2.5px solid #7D1EBC");
  removeBtn.style("border-radius", "12px");
  removeBtn.style("font-family", "sans-serif");
  removeBtn.style("font-weight", "800");
  removeBtn.style("text-decoration", "none");
  removeBtn.style("padding", "8px 18px");
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
  //this is the color picker and you can see it's position, size, and style. You can change the default color by changing the hex code in the createColorPicker function.
  colorPicker = createColorPicker("#7D1EBC"); // default color
  colorPicker.position(width / 2 + 353, height - 64);
  colorPicker.style("width", "45px");
  colorPicker.style("height", "45px");
  colorPicker.style("border-radius", "12px");
  colorPicker.style("border", "2.5px solid #7D1EBC");
  colorPicker.style("cursor", "pointer");
  colorPicker.style("padding", "0");
  colorPicker.style("background", "none");
}

// Save the current canvas to file as png
function saveToFile() {
saveCanvas('Flower Bouquet', 'png')
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

  //Blue footer
  fill('#7A87ED');
  rectMode(CORNER); // default: CORNER
  rect(0, windowHeight-90, windowWidth,90);
  //Triangle button
  fill('purple');
  noStroke();
  triangle(purple2.x1, purple2.y1, purple2.x2, purple2.y2, purple2.x3, purple2.y3);
  //Cursor
  image(img6, mouseX, mouseY, 80,80);
  
  if (mouseIsPressed) {
    click();
  }
//this is where the message will be displayed on the canvas after the user submits it. You can adjust the position, size, and style of the text as needed.
  if (currentMessage !== "") {
    //this pulls in the selected color
    fill(currentColor);
    noStroke();
    textSize(30);
    textFont('Helvetica');
    textStyle('bold');
    textAlign(CENTER, TOP);
    textWrap(WORD);
    //Text Wrap , box
    text(currentMessage, width / 2-350, 40,700);
  }

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
//Message Output
function greet() {
  //const message = input.value();
  currentMessage = input.value();
  currentColor = colorPicker.value();
  //greeting.html(currentMessage);
  console.log("chosen color:", currentColor); // add this
  input.value(""); // I added quotes here to clear the input field after submission

}



function click() {
  let button2 = dist(mouseX, mouseY, purple2.x1, purple2.y1);
  if (button2 <= 50) {

   window.location.replace("fourth.html");
    console.log("click!");
  }
}
  function putImage() {
  var canvas = document.getElementById("canvasSignature");

  var image = canvas.toDataURL("image/png")
    .replace("image/png", "image/octet-stream");

  window.location.href = image;
}