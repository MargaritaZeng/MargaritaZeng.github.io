// cs final rpg game
// Margarita
// Dec 8

// check if is in the strating page 
let startpage = true;
// check if the startpage button is cilck
let buttonOfstartpage = false;



//name of the starting page 
let mainimg ;
let gamename ;
let illustration ;
let propBack ;
let settingButton ;
let startGameButton ;

// let the button highlight 
let illustrationHL ;
let propBackHL ;
let settingButtonHL ;
let startGameButtonHL ;

//img of the mainthing in buttons
let bagimg;
let backimg;
let buttonimg;
let backbuttonimg;
let setbuttonimg;
let illustrationimg;
let progreimg;
let backHomeimg;

//img of the mainthing in buttons hight light thing 
let buttonimgHL;
let illustrationimgHL;
let progreimgHL;
let backHomeimgHL;

// load img of the starting page img

async function startpageImg(){
  mainimg = await loadImage("rpggameImg/startpage/backpage.png");
  gamename = await loadImage("rpggameImg/startpage/gamename.png");
  illustration = await loadImage("rpggameImg/startpage/illustration Bu.png");
  propBack = await loadImage("rpggameImg/startpage/prop back Bu.png");
  settingButton = await loadImage("rpggameImg/startpage/setting Bu.png");
  startGameButton = await loadImage("rpggameImg/startpage/start game Bu.png");
//--------------------startpage img of main buttons----------------------------

  bagimg = await loadImage("rpggameImg/initial functions/bagimg.png");
  backimg = await loadImage("rpggameImg/initial functions/backimg.png");
  buttonimg = await loadImage("rpggameImg/initial functions/button setting Bu.png");
  backbuttonimg = await loadImage("rpggameImg/initial functions/button backpage.png");
  setbuttonimg = await loadImage("rpggameImg/initial functions/button setup.png");
  illustrationimg = await loadImage("rpggameImg/initial functions/illustration Bu.png");
  progreimg = await loadImage("rpggameImg/initial functions/task progre Bu.png");
  backHomeimg = await loadImage("rpggameImg/initial functions/backhome Bu.png");

}

async function startpageImgHL(){
  illustrationHL = await loadImage("rpggameImg/startpage/illustration HL.png");
  propBackHL = await loadImage("rpggameImg/startpage/prop back HL.png");
  settingButtonHL = await loadImage("rpggameImg/startpage/setting HL.png");
  startGameButtonHL = await loadImage("rpggameImg/startpage/start game HL.png");
//-----------------startpage img of the hight light buttton-----------------------

  illustrationimgHL = await loadImage("rpggameImg/initial functions/illustration HL.png");
  progreimgHL = await loadImage("rpggameImg/initial functions/task progre HL.png");
  backHomeimgHL = await loadImage("rpggameImg/initial functions/backhome HL.png");
  buttonimgHL = await loadImage("rpggameImg/initial functions/button setting HL.png");
}

// --------------------------------seting -----------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);

  // set the startpage Img and high light button 
  startpageImg();
  startpageImgHL();
  
}

function draw() {
  background(220);
  //img 3:2
  //this is for starting bage 
  if(returnHome){
    startpage = true;
    buttonOfstartpage = false;
  }

  if (startpage){
    //this is the start page img 
    showStartingpage();
  }
//-----------startpage-----------

  if(buttonOfstartpage){
    image(backimg, 0, 0, 1200, 800);
    if(highlightButton===2) settingUp();
    else if(highlightButton=== 3) showImg();
    else if(highlightButton=== 4) propBag();
  }
  //this is Highlight the button 
  mainbuttonHL();
}
//--------------------------------setup and drawing ---------------------------

//show the page of the starting page 
function showStartingpage(){
  image(mainimg , 0, 0, 1200, 800);
  image(gamename , 0, 0, 1200, 800);
  image(illustration , 0, 0, 1200, 800);
  image(propBack , 0, 0, 1200, 800);
  image(settingButton ,200, 150, 1200, 800);
  image(startGameButton , 0, 0, 1200, 800);
}



// show the high light button
function mainbuttonHL(){

  //this is the starting page showing the highlight button
  if(startpage){
    if(highlightButton===1) image(startGameButtonHL, 0, 0, 1200, 800);
    if(highlightButton===2) image(settingButtonHL, 200, 150, 1200, 800);
    if(highlightButton===3) image(illustrationHL, 0, 0, 1200, 800);
    if(highlightButton===4) image(propBackHL, 0, 0, 1200, 800);
  }
}

//this is to check the highlight button of starting bage 
let highlightButton = 1;
// this is to check the main page hight light button
let highlightButtonM = 1;

let returnHome = false



function keyPressed(){
  //this is the starting page keycode
  if (startpage){
    if (key === "w" || keyIsDown(38)){
      if (highlightButton === 4){
        highlightButton = 1;
      }
      else highlightButton++;
    }
    if (key === "s" || keyIsDown(40)){
      if (highlightButton === 1){
        highlightButton = 4;
      }
      else highlightButton--;
    }
    if(key ===" "){
      buttonOfstartpage = true;
      startpage = false;
    }
  }
  if(buttonOfstartpage){
    if (key === "w" || keyIsDown(38)){
      highlightButtonM++;
    }
    if (key === "s" || keyIsDown(40)){
      highlightButtonM--;
    }
    if (key === " "){
      if(highlightButtonM === 1){
        returnHome = true;
      }
    }
  }

}

//functions of press mainpages button things
// ------------------------show the img of the mainpage-----------------

// the setting thing in the mainpage 
function settingUp(){
  if(buttonOfstartpage){
    image(backbuttonimg, 0, 0, 1200, 800);
    image(buttonimg, 0, 100, 1200, 800);
    //return home img
    image(backHomeimg, 100,-50, 1200, 800);

    //draw the hight light button 
    if(highlightButtonM>2) highlightButtonM = 1;
    else if(highlightButtonM<1) highlightButtonM =2;
    // 1 always be the backhome betton
    else if(highlightButtonM===1) image(backHomeimgHL, 100, -50, 1200, 800);
    else if(highlightButtonM===2) image(buttonimgHL, 0, 100, 1200, 800);

  }
}
// the bag in main page
function propBag(){
  if(buttonOfstartpage){
    image(bagimg, 0, 0, 1200, 800);
    //return home img
    image(backHomeimgHL, 100,-50, 1200, 800);
    if(highlightButtonM>1 || highlightButtonM<1) highlightButtonM = 1;
  }
}
//show img in the main page 
function showImg(){
  if(buttonOfstartpage){
    image(backbuttonimg, 0, 0, 1200, 800);
    image(illustrationimg, 0, 0, 1200, 800);
    image(progreimg, 0, 0, 1200, 800);
    //return home img
    image(backHomeimg, 100,-50, 1200, 800);

    //draw the hight light button 
    if(highlightButtonM>3) highlightButtonM = 1;
    else if(highlightButtonM<1) highlightButtonM =3;
    // 1 always be the backhome betton
    else if(highlightButtonM===1) image(backHomeimgHL, 100, -50, 1200, 800);
    else if(highlightButtonM===3) image(illustrationimgHL, 0, 0, 1200, 800);
    else if(highlightButtonM===2) image(progreimgHL, 0, 0, 1200, 800);

  }
}
// to start the game 