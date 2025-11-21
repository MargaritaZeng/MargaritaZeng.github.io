// exercise
// margarita
// nov 13

let Chip;
let Butter;

async function setup() {
  
  pixelDensity(1);
  //myImage = await loadImage("assets/nuit.jpg");
  Chip = await loadImage("assets/chip.jpg");
  Butter = await loadImage("assets/butterfly.jpg");
  createCanvas(1200, 1200);
}

// For each pixel, remove the red component (set to 0)
//                 halve the blue component
// R G B A R G B A

function colorEffect(){
  //use the single loop strategy
  //let halfImage = 4*height*(width/2);
  for(let i = 0; i < pixels.length/2; i+=4){
    //for(let j = 1200; j<2400 ; i+=4){
      pixels[i+1] = 0;
    //}
    //pixels[i+1] = 0;     //G
    //pixels[i+2] = pixels[i+2] / 2   //B
  }
}

function Movebetter(x, y){
  //the butterfly pro
  let a = get(x,y, x+300, y+300);
  let b = get(x+300,y,x+600,y+300);
  let d = get(x,y+300,x/2, y+300);
  let c = get(x+300,y+300,x+600,y+600);
  
  image(a, 900, 0);
  image(b, 900, 300);
  image(c, 600, 300);
  image(d, 600, 0);
}


function draw() {
  background(220);
  image(Chip,0,0);
  image(Butter, 600, 0);
  Movebetter(600, 0); 
  loadPixels(); //populate the pixels array

    colorEffect(); //replace w/ each different exercise
    //circle change place
  updatePixels();  //redraw based on our changes
}