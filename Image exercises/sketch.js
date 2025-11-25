// exercise
// margarita
// nov 13

let race;
let Butter;
let chip ;
let nuit ;

async function setup() {
  
  pixelDensity(1);
  //myImage = await loadImage("assets/nuit.jpg");
  race = await loadImage("assets/race.jpg");
  Butter = await loadImage("assets/butterfly.jpg");
  chip = await loadImage("assets/chip.jpg");
  nuit = await loadImage("assets/nuit.jpg");
  createCanvas(1200, 1200);
  noLoop();

}

// For each pixel, remove the red component (set to 0)
//                 halve the blue component
// R G B A R G B A

function colorEffect(){
  //use the single loop strategy
  //let halfImage = 4*height*(width/2);
  for(let y = 0; y < race.height ; y++){
    for(let x = race.width/2; x<race.width; x++){
      let index = (x+y*race.width)*4;
      race.pixels[index+1] = 0;
    }
    //pixels[i+1] = 0;     //G
    //pixels[i+2] = pixels[i+2] / 2   //B
  }
}

function Movebetter(x, y){
  //the butterfly pro
  let a = get(x,y, x/2, y+150);
  let b = get(x+150,y,x+300,y+150);
  let d = get(x,y+150,x/2, y+150);
  let c = get(x+150,y+150,x+300,y+300);

  image(c, 300, 150);
  image(b, 450, 150);
  image(a, 450, 0);
  image(d, 300, 0);
}

function getAvg(x, y) {
  let i = (nuit.width * y + x) * 4
  let r = nuit.pixels[i];
  let g = nuit.pixels[i + 1];
  let b = nuit.pixels[i + 2];
  return (r + g + b) / 3
}

let One ;let two ; let three;  
function colorPosterize(){




for (let y = 0; y < nuit.height; y++) {
    for (let x = 0; x < nuit.width; x++) {
      let avg = getAvg(x, y);
      print(avg);
      if (205< avg && avg >255){
        One = 170 ;
        two = 230 ;
        three = 220;
      }//fill(170, 230, 220);
      else if (155< avg && avg>204){
        One = 105 ;
        two = 150 ;
        three = 210;
      } //fill(105, 150, 210);
      else if (105< avg && avg>154){
        One = 120 ;
        two = 180 ;
        three = 60;
      } //fill(120, 180, 60);
      else if (55< avg&& avg >104){
        One = 130 ;
        two = 30 ;
        three = 130;
      } //fill(130, 30, 130);
      else if (0< avg&& avg >54){
        One = 90 ;
        two = 10 ;
        three = 50;
      } //fill(90, 10, 50);
      else {
        One = 90 ;
        two = 10 ;
        three = 50;
      }
      setpixel(x, y, One , two, three);
    }
  }

}

function setpixel(x, y, r, g, b) {
  let i = (x + y * nuit.width) * 4;
  nuit.pixels[i + 0] = r;
  nuit.pixels[i + 1] = g;
  nuit.pixels[i + 2] = b;
  nuit.pixels[i + 3] = 255;
}

function getBigest(x, y) {
  let i = (chip.width * y + x) * 4
  let r = chip.pixels[i];
  let g = chip.pixels[i + 1];
  let b = chip.pixels[i + 2];
  if (r>g) return 1 ;
  else if (r>b) return 1 ;
  else if (g>r) return 2 ;
  else if (g>b) return 2 ;
  else if (b>g) return 3 ;
  else if (b>r) return 3 ;
  else if (r>g && r===b || r>b && r===g ) return 1;
  else if (g>r && g===b) return 2;
}

function setpixelC(x, y, r, g, b) {
  let i = (x + y * chip.width) * 4;
  chip.pixels[i + 0] = r;
  chip.pixels[i + 1] = g;
  chip.pixels[i + 2] = b;
  chip.pixels[i + 3] = 255;
}

function MajorityColor(){
  for(let y = 0; y <chip.height; y++){
    for(let x = 0; x<chip.width; x++){
      let biggsetNumber = getBigest(x, y);
      if(biggsetNumber === 1) setpixelC(x, y,255,0,0);
      else if(biggsetNumber === 2) setpixelC(x, y,0,255,0);
      else if(biggsetNumber === 3) setpixelC(x, y,0,0,255);
      else setpixelC(x, y,0,0,255);
    }
    
  }

}

function draw() {
  
  background(220);
  image(race,0,0, 300, 300);
  image(Butter, 300, 0, 300, 300);
  Movebetter(300, 0);
  image(nuit, 300, 300, 300, 300);
  //colorPosterize();
  image(chip, 0, 300, 300, 300);


  chip.loadPixels(); 
  MajorityColor()
  chip.updatePixels(); 
 
 
  race.loadPixels(); //populate the pixels array
  colorEffect();
  race.updatePixels(); 

 
  nuit.loadPixels(); 
  colorPosterize()
  nuit.updatePixels(); 
 

  
  
  
}