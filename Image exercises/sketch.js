// exercise
// margarita
// nov 13

// majority color
let pilot;


function setup() {
  createCanvas(891, 892);
  loadAssets();
  pixelDensity(1);
}

async function loadAssets(){
  pilot = await loadImage("assets/chip.jpg");
  
  
  
}

// let started = false

// function mousePressed(){
//   started = true;
//   resizeCanvas(pilot.width, pilot.height, false);
//   pilot.loop();
// }

function setPixelOneD (pos, r, g, b){
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function setPixel(x, y, r, g, b){
  let index = (width*y +x)*4;
  setPixelOneD(index, r, g, b);
}

function draw() {
  if (started){
    image(pilot, 0, 0);
    loadPixels();
  //setPixelOneD(8, 0, 255, 0);
  //setPixel(10, 10, 0, 0, 255);
  background(0);
  textImage();
  }
  
  // boost();
  // greyscale();

  //updatePixels();
}

function textImage(){
  fill(255);
  let scaleAmount = 3;
  textSize(scaleAmount);
  for(let x = 0 ; x< width ; x+=scaleAmount){
    for (let y = 0 ; y<height; y+= scaleAmount){
      let avg = getAvg(x, y);
      if (avg = 1) fill()
    }
  }
}

function getAvg(x, y){
  let i = (width*y +x)*4;
  let r = pixels[i]; 
  let g = pixels[i+1]; 
  let b = pixels[i+2];
  if (r>g && r>b)   return 1 ;
  if (g>b && g>r)   return 2 ;
  if (b>r && b>g)   return 3 ;
  if (r=g && r>b)   return 1 ;
  if (r=b && r>g)   return 1 ;
  if (g=b && g>r)   return 2 ;
  //return (r+g+b)/3
}

function greyscale(){
  for (let x = 0 ; x<width ; x++){
    for (let y = 0 ; y<height ; y++){
      let avg = getAvg(x, y);
      setPixel(x, y, avg, avg, avg, )
    }
  }
}

function boost(){
  let boost = map(mouseX, 0, width , -100, 100);
  for(let i = 0 ; i <pixels.length; i+= 4){
    let r = pixels[i] +boost;
    let g = pixels[i+1] +boost;
    let b = pixels[i+2] +boost;
    setPixelOneD(i, r, g, b);
  }
}