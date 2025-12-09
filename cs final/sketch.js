// cs final rpg game
// Margarita
// Dec 8

//name of the starting page 
let mainimg ;
let gamename ;
let illustration ;
let propBack ;
let settingButton ;
let startGameButton ;

// check if is in the strating page 
let startpage = true ;
// let the button highlight 
let highlightButton = 0;
let HLbuttonImg;

let illustrationHL ;
let propBackHL ;
let settingButtonHL ;
let startGameButtonHL ;
// load img of the starting page img

async function startpageImg(){
  maining = await loadImage("rpggameImg/startpage/backpage.png");
  gamename = await loadImage("rpggameImg/startpage/gamename.png");
  illustration = await loadImage("rpggameImg/startpage/illustration Bu.png");
  propBack = await loadImage("rpggameImg/startpage/prop back Bu.png");
  settingButton = await loadImage("rpggameImg/startpage/setting Bu.png");
  startGameButton = await loadImage("rpggameImg/startpage/start game Bu.png");
}

async function startpageImgHL(){
  illustrationHL = await loadImage("rpggameImg/startpage/illustration HL.png");
  propBackHL = await loadImage("rpggameImg/startpage/prop back HL.png");
  settingButtonHL = await loadImage("rpggameImg/startpage/setting HL.png");
  startGameButtonHL = await loadImage("rpggameImg/startpage/start game HL.png");
}

// --------------------------------seting -----------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  startpageImg();
  startpageImgHL();
  keypressed();
}

function draw() {
  background(220);
  //img 3:2
  showStartingpage();
  mainbuttonHL();
}

//show the page of the starting page 
function showStartingpage(){
  image(maining , 0, 0, 1200, 800);
  image(gamename , 0, 0, 1200, 800);
  image(illustration , 0, 0, 1200, 800);
  image(propBack , 0, 0, 1200, 800);
  image(settingButton ,200, 150, 1200, 800);
  image(startGameButton , 0, 0, 1200, 800);
}
// show the high light button
function mainbuttonHL(){
  if(highlightButton>4) highlightButton = 0;
  else if(highlightButton<0) highlightButton = 3;
  else if(highlightButton=0) image(startGameButtonHL, 0, 0, 1200, 800);
  else if(highlightButton=1) image(settingButtonHL, 200, 150, 1200, 800);
  else if(highlightButton=2) image(illustrationHL, 0, 0, 1200, 800);
  else if(highlightButton=3) image(propBackHL, 0, 0, 1200, 800);
}


// high light of the main page button
function keypressed(){
if(startpage){
  if(keyCode === DOWN_ARROW) highlightButton++ ;
  if(keyCode === UP_ARROW) highlightButton-- ;
}
}