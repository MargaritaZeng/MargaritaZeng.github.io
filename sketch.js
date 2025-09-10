// coordinate sysdtems and user events
// margarita
// sep 10 2025
//
// Extra for Experts:
// -a first look at interactive programs with p5.js


function setup() {//run once at the start
  createCanvas(windowWidth, windowHeight);
  print (windowWidth, windowHeight, width, height )
  //windowwidth : curret brower width
  //width:        canvas width
}

function draw() {// runs over and over 
                 //targeting 60 frames per second
  background(220);//draws a big solid rectangle
  fill(0, 255, 0);//0is black 255is white             
  circle(mouseX, mouseY , 30 );
  drawTwoCircles
}

function drawTwoCircles(){//[ACT] [SHFT] [F] + 
    // draw teo circles , one at a fixed location
    // and one at the mouse location
    fill(0,255,0);
    
    
        fill(0, 255, 0);
        //   R   G   B
        circle(mouseX,mouseY, 3);

        circle(width/2, height/2, 100);
}