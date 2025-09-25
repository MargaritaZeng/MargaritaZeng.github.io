// 07 working with images
// margarita
// sep 25
//
let lionL, lionR;
let facingRight = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  imageMode(CENTER);
  noCursor();
}

async function loadAssets(){
  //handle loading all the images
  lionL = await loadImage ("assets/lion-left.png")
  lionR = await loadImage ("assets/lion-right.png")

}

function draw() {
  background(220);
  //update our direction 
  if (pmouseX < mouseX){ //implies mouse moving Right
    facingRight = true ;

  }
  else if(pmouseX > mouseX){// implies mouse moving left
    facingRight = false ; 
  }

  //update our drawing 
  if(facingRight){
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }
  else{
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
  
  
}
