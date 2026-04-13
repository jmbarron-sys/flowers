let img;
let img2;
let img3;
let img4;
let img5;
let gif;
let gif2;
let gif3;
let gif4;

//custom variable for x coordinate of clouds
let cloudOneX = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function preload () {
  gif = loadImage('img/flower5.gif');
  gif2 = loadImage('img/flower6.gif');
  gif3 = loadImage('img/flower7.gif');
  gif4 = loadImage('img/flower8.gif');
  img = loadImage ('img/grass2.png');
  img2 = loadImage ('img/tree2.png');
  img3 = loadImage ('img/sun.png');
  img4 = loadImage ('img/cloud4.png');
  img5 = loadImage ('img/cloud5.png');
  
}

function draw() {
  background('#7A88ED');
  //Cloud
  image(img4,cloudOneX,40,400,200);
  //Moving cloud2
  image(img5,cloudOneX-1000,240,490,230)
  //Tree
  image(img2,900,80,373,630);
  //Flower7 gif
  image(gif3,390,580,210,300);
  //Flower8 gif
  image(gif4,1280,460,180,220);
  //Grass
  image(img,0,643,windowWidth,260);
  
  fill('#5D7B3D');
  noStroke();
  rect(0, 900, windowWidth, 50);
  //Sun
  image(img3,45,40,240,248);
  //Flower5 gif
  image(gif,45,600,255,355);
  //Flower6 gif
  image(gif2,700,600,260,350);

  
  //sets the x coordinate to the frame count
  //resets at left edge
  cloudOneX = frameCount % width
}