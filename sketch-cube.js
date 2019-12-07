function setup() {
createCanvas(windowWidth,windowHeight);
noLoop()
rectMode(CENTER);
// background(222);
stroke('blue')
fill('pink')
}


function draw() {
translate(width/2, height/2)

var recW = random(75,350);
var recH = random(75,350);

let recW2 = recW / 2;
let recH2 = recH / 2; 

let pointA = random(recW2 + 10, recW2 + 50);
let pointB = random(- recH2 , recW2);

let pointA1 = recW - pointA; 

push()
rotate(random(360))
strokeWeight(0);
rect(0 , 0, recW, recH)

// back fills
beginShape();
vertex(recW2 , recH2)
vertex(- recW2 , recH2)
vertex(- pointA1 , pointB)
vertex(pointA , pointB)
endShape(CLOSE)

beginShape();
vertex(- recW2 , - recH2)
vertex(recW2 , - recH2);
vertex(pointA1 , - pointB)
vertex(- pointA , - pointB)
endShape(CLOSE)

// left side squre
strokeWeight(4);
beginShape();
vertex(- pointA , - pointB)
vertex(- recW2 , - recH2)
vertex(- pointA1 , pointB)
vertex(- recW2 , recH2)
endShape(CLOSE)

// right side square
beginShape();
vertex(pointA , pointB)
vertex(recW2 , recH2)
vertex(pointA1 , - pointB)
vertex(recW2 ,- recH2)
endShape(CLOSE)

// vertical lines
line(pointA , pointB , - pointA1 ,  pointB )
line(- recW2, recH2, recW2 , recH2 )

line(pointA1 , - pointB , - pointA , - pointB)
line(- recW2 , - recH2 , recW2 ,- recH2)


strokeWeight(10)
point(- pointA , - pointB)
point(- recW2 , - recH2)
point(- pointA1 , pointB)
point(- recW2 , recH2)
point(pointA , pointB)
point(recW2 , recH2)
point(pointA1 , - pointB)
point(recW2 ,- recH2)

pop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function mousePressed() {
    clear();
    redraw();
  }
