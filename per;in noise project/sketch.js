// Perlin noise project 
// margarita
// sep 29
//

let rectwidth = 2;
let noiselevel = 800 ;
let seed = 0.04 ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function drawFlag(){
  rectMode(CORNERS);
  fill(86, 44, 148);
  rect(bigestX, bigestY, 5, bigestDiamter);
  


}


function draw() {
  // randomSeed(seed);
  noiselevel = 800+frameCount/100 ;
  background(220);
  generateTerrain();
  
}

function generateTerrain(){
  let countrect = windowWidth / rectwidth;
  let sumrect = 0;

  rectMode(CORNERS);


  let bigestDiamter = Infinity;
  let bigestX = 0;
  let bigestY = 0; 
  //let noiseScale = 0.01 ;
  for (i = 0 ; i< width; i+= rectwidth){

    

    let x2 = i +rectwidth;
    // let nx = noiseScale *x2;
    // let nt = noiseScale * frameCount ;
    let y2 = noise(noiselevel);
    y2 = map(y2, 0, 1 , 0, height);
    noiselevel += 0.01;


    if(y2 > bigestDiamter){
      bigestDiamter = y2;
      bigestX = i;
      bigestY = height;
      drawFlag();
      
    }

    noStroke();
    fill(179, 98, 191);
    rect(i,height, x2, y2 );
    sumrect += y2;
   
  }
  
  let rectAverage = sumrect/countrect;
  fill(255, 0, 0);
  line(0,rectAverage, windowWidth, rectAverage );

  
   rectMode(CORNER);

}
