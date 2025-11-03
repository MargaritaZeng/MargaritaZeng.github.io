// Inheritance and code in multiple files 
// margarita 
// oct 30 
// 
let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0 ; i<20 ; i++){
    objects.push(new AnimatedObject(random(width),random(height)));
    objects.push(new CircleObject(random(width),random(height)));
    objects.push(new LineObject());

  }
}

function draw() {
  background(220);
  for (let o of objects){
    o.move();
    o.display();
  }
}

// Parent Class ("super class ")
// -----if all iin onr file , should  occur first ...



//child Class #1 - circle


