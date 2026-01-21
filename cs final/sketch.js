// cs final rpg game
// Margarita
// Dec 8

//check the gamestatus in the game 
let gameStatus = "startpage" ;
// startpage mainpage inbutton plot chapterName RPGmove
let taskNew ="off";

//this is to check the highlight button of starting bage 
let highlightButton = 1;
// this is to check the main page hight light button
let highlightButtonM = 1;
// this is to check the setting in the game  hight light button
let highlightButtonG = 1;

let settingS = 1;
let settingG = "closed"; 
let automatic = false;
// closed is setting are not show 
// open is setting is show and closed
// settingS%2 === 1 is setting is show and open
// inside is setting open the button
//this is in the game part

let catX;
let catY;

let storyList = 0;

// --------------------------------seting -----------------------------


function setup() {
  createCanvas(windowWidth, windowHeight);

  // set the startpage Img and high light button 
  startpageImg();
  allImgHL();
  gamingImg();  

  catX = 756;
  catY = 180;
  
}


function draw() {
  background(220);
  //img 3:2
  // always the backround
  image(backimg, 0, 0, 1200, 800);
  //this is for starting bage 

  //-----------------------------start page ----------------------
  if (gameStatus === "startpage"){
    //this is the start page img 
    showStartingpage();
    //this is Highlight the start page button 
    if(highlightButton===1) image(startGameButtonHL, 0, 0, 1200, 800);
    else if(highlightButton===2) image(settingButtonHL, 200, 150, 1200, 800);
    else if(highlightButton===3) image(illustrationHL, 0, 0, 1200, 800);
    else if(highlightButton===4) image(propBackHL, 0, 0, 1200, 800);
  }
  //--------------------------main page----------------------------
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

//------------------the story part---------------------
  if(gameStatus ==="chapterName"){
    image(chapterName, 0, 0, 1200, 800);
    fill(222, 47, 172);
    textSize(44);
    text("press space", 900, 780);
  }
  // 27 30 32 72 91 110 +1
  if(gameStatus === "plot" && automatic === false){  
    rpgMap();
    plotFirst();
    emojy();
  }

  if(automatic === true){   
    image(officeMap, 0, 0, 1200, 800);
    image(nemorinL,10*boxSizeX,4*boxSizeY,65,90);
    plotFirst();
    moveInstr();
  }
  // ---------------------seting in the game------------ ----------
  

  if(gameStatus === "RPGmove"){
    if(photoG === true && newsG === true && prop === "none"){
      gameStatus = "plot";
    }
    if(mapmove === "roadmap" ){
    RPGmoveRoad();   
    catMove();
    showword();
    }
    if(mapmove === "housemap" ){
      RPGmoveHouse();
      catMoveH();
      showwordH();
    }
  } 


  if(settingG === "open"){
    //show the setting buttonS
    image(setButtonG, 0, -30, 1200, 800);
    settingInside();
  } 
  if(taskNew === "on"){
    image(taskN, 0, 0, 1200, 800);
  }
  if(settingG === "inside"){
    if(highlightButtonG === 1) propBag();
    else if(highlightButtonG === 2) settingUp();
    else if(highlightButtonG === 5)showImg(); 
    else if(highlightButtonG === 4){
      image(beginning, 300, 150, 600, 400);
      image(backHomeimgHL, 20, -10, 1200, 800);
    } 
    else if(highlightButtonG === 3){
      gameStatus = "startpage";
      settingS++;
    } 
  }
  
  stateCheck();
} 
//-----------------------------------------setup and drawing ----------------------------------------------------

// check if there are some of the img to show when the story go on 
// and check if is the time to chage the img
function stateCheck(){
  //show the chapter name 
  if(storyList === 31){
    gameStatus = "chapterName";
  } 
  // show the progress at first 
  if(storyList > 10 && storyList < 14){
  image(task01, 180, 45, 825, 550);
  }
  
  if(storyList === 14 || storyList === 55 || storyList === 75 || storyList === 107 || storyList === 143){
    taskNew = "on" ;
  }

  if(storyList === 27){
  text(conversation[27][2],240, 675, 720, 200);
  automatic = true;
  }

 
}


function moveInstr(){
  if(moveStep < boxSizeX*2){
    moveL();
  }
  else if(moveStep < boxSizeX*2 + boxSizeY*6){
    moveD();
  }
  else{
    moveStep = 0;
    automatic = false;
    storyList =28;
  }
}

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
      if (highlightButton === 4)highlightButton = 1;
      else highlightButton++;
    }
    if (key === "s" || keyIsDown(40)){
      if (highlightButton === 1)highlightButton = 4;
      else highlightButton--;
    }
    if(key === " "){
      if(highlightButton === 1){
        if(storyList === 34 || storyList === 74)gameStatus ="RPGmove";
        else gameStatus = "plot";
        settingG = "open"
      }
      else gameStatus = "mainpage";
    }
  }

//------this is the mainpage keycode------------------------------
  else if(gameStatus === "mainpage"){
    if (key === "w" || keyIsDown(38))highlightButtonM++;
    if (key === "s" || keyIsDown(40))highlightButtonM--;
    if (key === " "){
      if(highlightButtonM === 1)gameStatus = "startpage";
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

  else if(gameStatus === "chapterName"){
    if(key === " ") {
      gameStatus = "plot" ;
      storyList++;
    }
  }

//-------this is the setting in game's keycode-------------------------------------
  else if(settingG === "open"){
    // open the setting in game 
    if(keyIsDown(16)){
      if(taskNew === "on") taskNew = "off" ;
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

    else if(gameStatus === "plot" && automatic === false){

    if(key === " ") {          
        print(storyList);
        storyList++;
        //the road map
        if(storyList === 34){
          boxNumX = 18;
          boxNumY = 8;
          catX = boxNumX*boxSizeX;
          catY = boxNumY*boxSizeY;
          gameStatus ="RPGmove"; 
          mapmove = "roadmap" ;     
        }
        // the inside house map
        if(storyList === 74){
          boxNumX = 10;
          boxNumY = 10;
          catX = boxNumX*boxSizeX;
          catY = boxNumY*boxSizeY;
          mapmove = "housemap" ;
          gameStatus ="RPGmove";
          
        }
        if(storyList > 91){
          storyList = 0;
          catX = 756;
          catY = 180;
          gameStatus = "startpage";
        }
      }
    }

    else if(gameStatus === "RPGmove" && !settingS%2 === 0){
    
    if(key === "w"|| keyIsDown(38)){
      moveDir = "up";
      isMoving = true;
      
    }
    if(key === "s"|| keyIsDown(40)){
      print("key pressed");
      moveDir = "down";
      isMoving = true;
      
    }
    if(key === "a"|| keyIsDown(37)){
      moveDir = "left";
      isMoving = true;
      
    }
    if(key === "d" || keyIsDown(39)){
      moveDir = "right";
      print("press right");
      isMoving = true;
      
    }
    if(key === " "){
      if(mapmove === "roadmap"){
        //check for the right one
      if(boxNumX === 3 && boxNumY === 6 || boxNumX === 2 && boxNumY === 7){
        if(character === "correct")gameStatus ="plot";
        else character ="correct";       
      }
      //check the old man
      if(boxNumX === 17 && boxNumY === 8 || boxNumX === 16 && boxNumY === 7 || boxNumX === 17 && boxNumY === 6){
        if(character === "old man")character = "none";
        else character ="old man";  
      }
      //check the child
      if(boxNumX === 9 && boxNumY === 8 || boxNumX === 8 && boxNumY === 9){
        if(character === "child")character = "none";
        else character ="child";  
      }
      // check the couple 13 6, 12 7, 11 7, 10 6
      if(boxNumX === 13 && boxNumY === 6 || boxNumX === 10 && boxNumY === 6 ||boxNumX === 12 && boxNumY === 7 ||boxNumX === 11 && boxNumY === 7){
        if(character === "couple")character = "none";
        else character ="couple";  
      }
      }

      if(mapmove === "housemap"){
          // check the ring 
        if(boxNumX === 12 && boxNumY === 7){
          if(prop === "ring")prop = "none";
        else prop = "ring";  
        }
        // check the fridge
        if(boxNumX === 6 && boxNumY === 3){
          if(prop === "fridge")prop = "none";
        else prop = "fridge";  
        }
        // check the photo
        if(boxNumX === 14 && boxNumY === 3){
          if(prop === "photo")prop = "none";
        else prop = "photo";  
        }
        // check the waredore
        if(boxNumX === 12 && boxNumY === 3){
          if(prop === "wardore")prop = "none";
        else prop = "wardore";  
        }
        // check the newspaper
        if(boxNumX === 13 && boxNumY === 7){
          if(prop === "Newspaper")prop = "none";
        else prop = "Newspaper";  
        }
        // check the tv
        if(boxNumX === 11 && boxNumY === 9 ||boxNumX === 12 && boxNumY === 8 ||boxNumX === 13 && boxNumY === 9){
          if(prop === "TV")prop = "none";
        else prop = "TV";  
        }
        // check the album
        if(boxNumX === 10 && boxNumY === 7 ||boxNumX === 11 && boxNumY === 7){
          if(prop === "Photo album")prop = "none";
        else prop = "Photo album";  
        }
        // check the bedroom
        if(boxNumX === 8 && boxNumY === 5){
          if(prop === "Bedroom")prop = "none";
        else prop = "Bedroom";  
        }
        // check the bedroom
        if(boxNumX === 5 && boxNumY === 3){
          if(prop === "box")prop = "none";
        else prop = "box";  
        }
        
      }
    }
  }

  
    //-------this is the story part keycode------------------------------
  
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
      //(storyList === 53 || storyList === 73 || storyList === 105 || storyList === 141)
      //   12=>01      02                  03                   04                  05
      if(storyList<12) image(proFirst, 0, 0, 1200, 800);
      else if(storyList>11 && storyList<53) image(task01, 0, 0, 1200, 800);
      else if(storyList>52 && storyList<73) image(task02, 0, 0, 1200, 800);
      else if(storyList>72 && storyList<105) image(task03, 0, 0, 1200, 800);
      else if(storyList>104 && storyList<141) image(task04, 0, 0, 1200, 800);
      else image(task05, 0, 0, 1200, 800);

      image(backHomeimgHL, 100,-50, 1200, 800);
    }
    else{
      image(illBackimg, 0, 0, 1200, 800);
      image(backHomeimgHL, 100,-50, 1200, 800);     
    }
  }

  else if (settingG === "inside"){
    // show the progress in game and startpage
    if(storyList<12) image(proFirst, 0, 0, 1200, 800);
    else if(storyList>11 && storyList<53) image(task01, 0, 0, 1200, 800);
    else if(storyList>52 && storyList<73) image(task02, 0, 0, 1200, 800);
    else if(storyList>72 && storyList<105) image(task03, 0, 0, 1200, 800);
    else if(storyList>104 && storyList<141) image(task04, 0, 0, 1200, 800);
    else image(task05, 0, 0, 1200, 800);

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

    text("???",285, 602);
  }

  //print the name

  //print the conversation
  fill(0);
  textSize(30);
  text(conversation[storyList][2],240, 675, 720, 200);
}

// the emojy img show out

function emojy(){

  if(conversation[storyList][0] === "the cat"){
    if(conversation[storyList][1] === "sad")image(sadC, 0, 0, 1200, 800);
    else if(conversation[storyList][1] === "speechless")image(speechlessC, 0, 0, 1200, 800);
    else if(conversation[storyList][1] === "happy")image(happyC, 0, 0, 1200, 800);
    else if(conversation[storyList][1] === "impatient")image(impatientC, 0, 0, 1200, 800);
    else if(conversation[storyList][1] === "confuse")image(confuseC, 0, 0, 1200, 800);
    else if(conversation[storyList][1] === "surprise")image(surpriseC, 0, 0, 1200, 800);
  }
  else{
    if(conversation[storyList][1] === "sad")image(sad, 45, 0, 1200, 800);
    else if(conversation[storyList][1] === "speechless")image(speechless, 45, 0, 1200, 800);
    else if(conversation[storyList][1] === "happy")image(happy, 45, 0, 1200, 800);
    else if(conversation[storyList][1] === "impatient")image(impatient, 45, 0, 1200, 800);
    else if(conversation[storyList][1] === "confuse")image(confuse, 45, 0, 1200, 800);
    else if(conversation[storyList][1] === "surprise")image(surprise, 45, 0, 1200, 800);
    else if(conversation[storyList][1] === "cry")image(cry, 45, 0, 1200, 800);
    else if(conversation[storyList][1] === "frown")image(frown, 45, 0, 1200, 800);
    else if(conversation[storyList][1] === "smile")image(smile, 45, 0, 1200, 800);
  }
}
// 27 30 32 72 91 110 +1
let boxSizeX = 54;
let boxSizeY = 60;

// the character x is (box-1)*boxsize (box-2)*boxsize;
function rpgMap(){
  if(storyList < 31){
    image(officeMap, 0, 0, 1200, 800);

    image(nemorinL,10*boxSizeX,4*boxSizeY,65,90);
    //the cat did not show out after the cat moving 
    if(storyList <27)image(theCatL, catX, catY, 54, 60);
    //560, 270, 40, 60
  } 
  else if(storyList >30 && storyList < 73){
  boxSizeX = 55;
  boxSizeY = 55;

  //y-1.5*boxsize

  // load the img of the map , characters and prop 
  image(roadMap, 0, 0, 1200, 800);

  image(roadNpc1, 11*boxSizeX,5.5*boxSizeY,boxSizeX,boxSizeY*1.5);
  image(roadNpc3, 12*boxSizeX,5.5*boxSizeY,boxSizeX,boxSizeY*1.5);//cople
  image(roadNpc2, 17*boxSizeX,6.5*boxSizeY,boxSizeX,boxSizeY*1.5);//old man
  image(serenieL, 2*boxSizeX+5,5.5*boxSizeY,boxSizeX,boxSizeY*1.5);

  if(storyList > 33){
    image(theCatL, catX, catY, boxSizeX, boxSizeY);
  }
  else image(theCatL,18*boxSizeX,8*boxSizeY,55,55);



  //the front part of the map img 
  image(roadMapF, 0, 0, 1200, 800); 
  image(roadNpc4, 8*boxSizeX,8*boxSizeY,40,55);//child
  } 
  else if(storyList >72 && storyList < 92){
    boxSizeX = 55;
    boxSizeY = 55;

    image(inHouseMap, 0, 0, 1200, 800);
    //in the house
    if(storyList > 73 )image(theCatL,catX, catY,55,55);
    else image(theCatL,10*boxSizeX,10*boxSizeY,55,55);

    image(serenieL, 12*boxSizeX,3.5*boxSizeY,boxSizeX,boxSizeY*1.5);
    image(inHouseMapF, 0, 0, 1200, 800);

  } 
}

// the move character in firt map road
function RPGmoveRoad(){
  boxSizeX = 55;
  boxSizeY = 55;
  //y-1.5*boxsize
  // load the img of the map , characters and prop 
  image(roadMap, 0, 0, 1200, 800);

  image(roadNpc1, 11*boxSizeX,5.5*boxSizeY,boxSizeX,boxSizeY*1.5);
  image(roadNpc3, 12*boxSizeX,5.5*boxSizeY,boxSizeX,boxSizeY*1.5);//cople
  
  image(serenieL, 2*boxSizeX+5,5.5*boxSizeY,boxSizeX,boxSizeY*1.5);

  image(theCatL, catX, catY, boxSizeX, boxSizeY);


  image(roadNpc2, 17*boxSizeX,6.5*boxSizeY,boxSizeX,boxSizeY*1.5);//old man
  //the front part of the map img 
  image(roadMapF, 0, 0, 1200, 800); 
  image(roadNpc4, 8*boxSizeX,8*boxSizeY,40,55);//child
  
}

function RPGmoveHouse(){
  boxSizeX = 55;
  boxSizeY = 55;

  image(inHouseMap, 0, 0, 1200, 800);
    //in the house
  image(theCatL,catX, catY,55,55);
  image(serenieL, 12*boxSizeX,3.5*boxSizeY,boxSizeX,boxSizeY*1.5);

  image(inHouseMapF, 0, 0, 1200, 800);
    
}