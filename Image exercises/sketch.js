// exercise
// margarita
// nov 13

let myImage;

async function setup() {
  
  pixelDensity(1);
  //myImage = await loadImage("assets/nuit.jpg");
  myImage = await loadImage("assets/chip.jpg");
  createCanvas(600, 600);
}

// For each pixel, remove the red component (set to 0)
//                 halve the blue component
// R G B A R G B A

function colorEffect(){
  //use the single loop strategy
  for(let i = 0; i < pixels.length; i+=4){
    
    pixels[i+1] = 0;     //G
    //pixels[i+2] = pixels[i+2] / 2   //B
  }
}

function draw() {
  background(220);
  image(myImage,0,0);
  loadPixels(); //populate the pixels array

    colorEffect(); //replace w/ each different exercise

  updatePixels();  //redraw based on our changes
}