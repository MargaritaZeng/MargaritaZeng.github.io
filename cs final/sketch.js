// cs final rpg game
// Margarita
// Dec 8

//check the gamestatus in the game 
let gameStatus = "startpage" ;
// startpage mainpage inbutton plot


//this is to check the highlight button of starting bage 
let highlightButton = 1;
// this is to check the main page hight light button
let highlightButtonM = 1;
// this is to check the setting in the game  hight light button
let highlightButtonG = 1;

let settingS = 1;
let settingG = "closed"; 
// closed is setting are not show 
// open is setting is show and closed
// settingS%2 === 1 is setting is show and closed
// inside is setting open the button
//this is in the game part

let storyList = 130 ;

// --------------------------------seting -----------------------------


function setup() {
  createCanvas(windowWidth, windowHeight);

  // set the startpage Img and high light button 
  startpageImg();
  allImgHL();
  gamingImg();  
}

function draw() {
  background(220);
  //img 3:2
  // always the backround
  image(backimg, 0, 0, 1200, 800);
  //this is for starting bage 

  if (gameStatus === "startpage"){
    //this is the start page img 
    showStartingpage();

    if(highlightButton===1) image(startGameButtonHL, 0, 0, 1200, 800);
    else if(highlightButton===2) image(settingButtonHL, 200, 150, 1200, 800);
    else if(highlightButton===3) image(illustrationHL, 0, 0, 1200, 800);
    else if(highlightButton===4) image(propBackHL, 0, 0, 1200, 800);
  }

  //this is Highlight the start page button 

//-----------startpage-----------

  if(gameStatus === "mainpage" ){    
    if(highlightButton===2) settingUp();
    else if(highlightButton=== 3) showImg();
    else if(highlightButton=== 4) propBag();
  }

  if(gameStatus === "inButton" ){
    if(highlightButton===2) settingUp();
    else if(highlightButton=== 3) showImg();
    else if(highlightButton=== 4) propBag();
  }


// ----- start the game -----plot part -----------
  

  if(settingG === "inside"){
    if(highlightButtonG === 1) propBag();
    else if(highlightButtonG === 2) settingUp();
    else if(highlightButtonG === 3){
      gameStatus = "startpage";
      settingS++;
    } 
    else if(highlightButtonG === 5)showImg();  
  }

  if(settingG === "open"){
    //show the setting buttonS
    image(setButtonG, 0, -30, 1200, 800);
    settingInside();
  } 

  if(gameStatus === "plot"){  
    plotFirst();
    
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
      if(highlightButton === 1){
        gameStatus = "plot";
        settingG = "open"
      }
      else gameStatus = "mainpage";
    }
  }

//------this is the mainpage keycode------------------------------
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
      else gameStatus = "inButton";
    }
  }

//------this is the main page key code ----------------------------------
  else if(gameStatus === "inButton"){
    if(key === " ") gameStatus ="mainpage";
  }

  else if(settingG === "inside"){
    if(key === " ") settingG = "open" ;
  }
//-------this is the setting in game's keycode-------------------------------------
  else if(settingG === "open"){
    // open the setting in game 
    if(keyIsDown(16)){
      settingS++;
    }

    //setting in game 
    else if(settingS%2 === 0){
      if (key === "w" || keyIsDown(38)){
        if (highlightButtonG === 1) highlightButtonG = 5;
        else highlightButtonG--;
      } 
      if (key === "s" || keyIsDown(40)){
        if (highlightButtonG === 5)highlightButtonG = 1;
        else highlightButtonG++;
      }
      if(key === " ") settingG = "inside";
    }

    //-------this is the story part keycode------------------------------
    else if(gameStatus === "plot"){
      if(key === " "){
        storyList++ ;
      }
    }
    
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

  //in the button img and the setting in game's img
  else if(gameStatus === "inButton" || settingG === "inside"){
    image(setbuttonimg, 0, 0, 1200, 800);
    image(backHomeimgHL, 100, -50, 1200, 800);
  }

}

// the bag in main page
function propBag(){
  if(gameStatus === "mainpage" || settingG === "inside"){
    image(bagimg, 0, 0, 1200, 800);
    //return home img
    image(backHomeimgHL, 100,-50, 1200, 800);
    if(highlightButtonM>1 || highlightButtonM<1) highlightButtonM = 1;
  }

}

//show img in the main page 
function showImg(){
  if(gameStatus === "mainpage"){
    //main page button 
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
    // show the img 

    if(highlightButtonM===2){
      // show the progress in game and startpage
      image(proFirst, 0, 0, 1200, 800);
      image(backHomeimgHL, 100,-50, 1200, 800);
    }
    else{
      image(illBackimg, 0, 0, 1200, 800);
      image(backHomeimgHL, 100,-50, 1200, 800);     
    }
  }

  else if (settingG === "inside"){
    // show the progress in game and startpage
    image(proFirst, 0, 0, 1200, 800);
    image(backHomeimgHL, 100,-50, 1200, 800);
  }

}


// -------------------------to start the game ----------------------------------------


// set the setting in the game 
function settingInside(){
  //let the setting always be close at first 
  if(settingS%2 === 0){
    // show the setting button 
    image(bagG, 0, 0, 1200, 800);
    image(guideG, 0, 0, 1200, 800);
    image(buttonG, 0, 0, 1200, 800);
    image(returnG, 0, 0, 1200, 800);
    image(progressG, 0, 0, 1200, 800);

    //show the hight light button in the seting 
    if(highlightButtonG === 1)image(bagGHL, 0, 0, 1200, 800);
    else if(highlightButtonG === 2)image(buttonGHL, 0, 0, 1200, 800);
    else if(highlightButtonG === 3)image(returnGHL, 0, 0, 1200, 800);
    else if(highlightButtonG === 4)image(guideGHL, 0, 0, 1200, 800);
    else if(highlightButtonG === 5)image(progressGHL, 0, 0, 1200, 800);
  }
  
}


// strat the story in the first fart 
function plotFirst(){

  // show the box 
  image(textBox, 0, 0, 1200, 800);
  // image(headBoxL, 0, 0, 1200, 800);
  // image(headBoxR, 0, 0, 1200, 800);
  //----
  
  fill(217, 137, 52);
  if(conversation[storyList][0] === "the cat"){
    image(headBoxL, 0, 0, 1200, 800);
    image(nameBoxL, 0, 0, 1200, 800);

    if(storyList > 82) image(theCatP, 0, -100, 1300, 900);
    else image(theCat, 0, -100, 1300, 900);

    text(conversation[storyList][0],275, 602);
  }

  else if(conversation[storyList][0] === "nemorin"){
    image(headBoxR, 0, 0, 1200, 800);
    image(nameBoxR, 0, 0, 1200, 800);   
    image(nemorin, 0, 0, 1200, 800);

    text(conversation[storyList][0],830, 602);
  }

  else if(conversation[storyList][0] === "elderly woman"){
    image(headBoxR, 0, 0, 1200, 800);
    image(nameBoxR, 0, 0, 1200, 800);
    image(serenie, 0, 0, 1200, 800);
    textSize(20);
    text(conversation[storyList][0],818, 605);
  }

  else if(conversation[storyList][0] === "sereniel"){//93
    image(headBoxR, 0, 0, 1200, 800);
    image(nameBoxR, 0, 0, 1200, 800);
    image(serenie, 0, 0, 1200, 800);

    text(conversation[storyList][0],830, 602);
  }

  

  else if(conversation[storyList][0] === "receptionist"){   
    image(headBoxR, 0, 0, 1200, 800);
    image(nameBoxR, 0, 0, 1200, 800);
    image(npc, 0, 0, 1200, 800);

    textSize(20);
    text(conversation[storyList][0],825, 602);
  }

  else if(conversation[storyList][0] === "vallerin"){    
    image(headBoxR, 0, 0, 1200, 800);
    image(nameBoxR, 0, 0, 1200, 800);
    image(vallerin, 0, 0, 1200, 800);

    text(conversation[storyList][0],830, 602);
  }

  else if(conversation[storyList][0] === "narrator"){
    image(nameBoxL, 0, 0, 1200, 800);

    text(conversation[storyList][0],255, 602);
  }

  //print the name

  //print the conversation
  fill(0);
  textSize(30);
  text(conversation[storyList][2],240, 675, 720, 200);
  //fill(217, 137, 52, 50)
  //rect(220, 605, 720, 200);
}

// let nemorin;
// let npc;
// let theCat;
// let theCatP;
// let serenie;
// let vallerin;
