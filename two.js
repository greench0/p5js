function setup() {
  createCanvas(windowWidth, windowHeight);
noLoop();
strokeWeight(3)
}

function draw() {

  background("pink");
  stroke('blue');
 
// let itteration = 10;
let blockW = windowWidth /25;

for (y=0; y < height; y = y + blockW) {
for (x=0; x < width; x = x + blockW) {
if (random() > .5) {
    line(x,y , x +blockW,y+blockW)
} 
else {
       line(x +blockW,y , x ,y+blockW)
}
} }

// end  draw
// frameRate(1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
  clear();
  redraw();
}