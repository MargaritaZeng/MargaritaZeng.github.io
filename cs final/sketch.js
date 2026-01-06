// cs final rpg game
// Margarita
// Dec 8

//check the gamestatus in the game 
let gameStatus = "startpage" ;
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
  // always the backround
  
  //this is for starting bage 

  if (gameStatus === "startpage"){
    //this is the start page img 
    showStartingpage();
  }

  //this is Highlight the start page button 
  mainbuttonHL();
//-----------startpage-----------

  if(gameStatus === "mainpage" ){
    image(backimg, 0, 0, 1200, 800);
    if(highlightButton===2) settingUp();
    else if(highlightButton=== 3) showImg();
    else if(highlightButton=== 4) propBag();
  }

  if(gameStatus === "inButton" ){
    image(backimg, 0, 0, 1200, 800);
    if(highlightButton===2) settingUp();
    else if(highlightButton=== 3) showImg();
    else if(highlightButton=== 4) propBag();
  }
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
  if(gameStatus === "startpage"){
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




function keyPressed(){
  //this is the starting page keycode
  if (gameStatus === "startpage"){
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
    if(key === " "){
      gameStatus = "mainpage";
    }
  }
  else if(gameStatus === "mainpage"){
    if (key === "w" || keyIsDown(38)){
      highlightButtonM++;
    }
    if (key === "s" || keyIsDown(40)){
      highlightButtonM--;
    }
    if (key === " "){
      if(highlightButtonM === 1){
        gameStatus = "startpage";
      }
      else{
        gameStatus = "inButton";
      }
    }
  }
  else if(gameStatus === "inButton"){
    if(key === " ") gameStatus ="mainpage";
  }

}

//functions of press mainpages button things
// ------------------------show the img of the mainpage-----------------

// the setting thing in the mainpage 
function settingUp(){
  if(gameStatus === "mainpage"){
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
  //in the button img
  else if(gameStatus === "inButton"){
    image(setbuttonimg, 0, 0, 1200, 800);
    image(backHomeimgHL, 100, -50, 1200, 800);
  }
}
// the bag in main page
function propBag(){
  if(gameStatus === "mainpage"){
    image(bagimg, 0, 0, 1200, 800);
    //return home img
    image(backHomeimgHL, 100,-50, 1200, 800);
    if(highlightButtonM>1 || highlightButtonM<1) highlightButtonM = 1;
  }
}
//show img in the main page 
function showImg(){
  if(gameStatus === "mainpage"){
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

  else if(gameStatus === "inButton"){


    if(highlightButtonM===3){
      image(illBackimg, 0, 0, 1200, 800);
      image(backHomeimgHL, 100,-50, 1200, 800);
    }
    else{
      image(proFirst, 0, 0, 1200, 800);
      image(backHomeimgHL, 100,-50, 1200, 800);
    }
  }
}


// to start the game 