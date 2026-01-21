// the cat xy box number
let boxNumX = 18;
let boxNumY = 8;

// check the cat move and the speed
let moveStep = 0;
let speed = 4;
let mapmove = "none";
// check click space and if there is anyone or thing 
let character = "none";
let prop = "none";
// chack if the cat are moving
let isMoving = false;
// wich side does the cat go 
let moveDir = "none";

function moveL(){
  catX -= speed;
  moveStep += speed;  
  image(theCatL, catX, catY, boxSizeX, boxSizeY);
}

function moveR(){
  catX += speed;
  moveStep += speed;
  image(theCatL, catX, catY, boxSizeX, boxSizeY);
}

function moveU(){
  catY -= speed;
  moveStep += speed;
  image(theCatL, catX, catY, boxSizeX, boxSizeY);

}

function moveD(){
  catY += speed;
  moveStep += speed;
  image(theCatL, catX, catY, boxSizeX, boxSizeY);
}
//-----------------------------------------------------

function catMove(){

  // the cat can not goes out the map
  if(catX< 110)catX = 110;

  if(moveStep < boxSizeX){
    if(moveDir === "up")roadCheckU();
    else if(moveDir === "down")roadCheckD();
    else if(moveDir === "left")roadCheckL();
    else if(moveDir === "right")roadCheckR();
        
  }
  else{
    // let the boxnum change
    if(moveDir === "up") boxNumY--;
    if(moveDir === "down") boxNumY++;
    if(moveDir === "left") boxNumX--;
    if(moveDir === "right") boxNumX++;

    moveDir = "none";
    moveStep = 0;
    isMoving = false;
  }
}

// the road map left check and move
function roadCheckL(){
    if(boxNumY === 6){
      if(boxNumX-1>2 && boxNumX-1< 11 ||boxNumX-1<18 &&boxNumX-1>12){
        moveL();
      }
    }
    else if(boxNumY === 7){
      if(boxNumX-1 >1 && boxNumX-1 <17){
        moveL();
      }
    }
    else if(boxNumY === 8){
      if(boxNumX-1 >1 && boxNumX-1<5 || boxNumX-1 >8 && boxNumX-1<19){
        moveL();
      }
    }
    else if(boxNumY === 9){
      if(boxNumX-1 >1 && boxNumX-1 <19){
        moveL();
      }
    }
    else isMoving = false;
}
// the road map right check and move
function roadCheckR(){
    if(boxNumY === 6){
      if(boxNumX+1>2 &&boxNumX+1< 11 ||boxNumX+1<18 &&boxNumX+1>12){
        moveR();
      }
    }
    else if(boxNumY === 7){
      if(boxNumX+1 >1 && boxNumX+1 <17){
        moveR();
      }
    }
    else if(boxNumY === 8){
      if(boxNumX+1 >1 && boxNumX+1<5 || boxNumX+1 >8 && boxNumX+1<19){
        moveR();
      }
    }
    else if(boxNumY === 9){
      if(boxNumX+1 >1 && boxNumX+1 <19){
        moveR();
      }
    }
    else isMoving = false;
}
// the road map up check and move
function roadCheckU(){
    if(boxNumY-1 === 6){
      if(boxNumX >3 && boxNumX <11 ||boxNumX >12 && boxNumX <18){
        moveU();
      }
    }
    else if(boxNumY-1 === 7){
      if(boxNumX ===4 || boxNumX ===10 || boxNumX ===16){
        moveU();
      }
    }
    else if(boxNumY-1 === 8){
      if(boxNumX >1 && boxNumX<5 || boxNumX >8 && boxNumX<19){
        moveU();
      }
    }
    else isMoving = false;
}
// the road map down check and move
function roadCheckD(){
    if(boxNumY+1 === 7){
      if(boxNumX >3 && boxNumX <11 ||boxNumX >12 && boxNumX <17){
        moveD();
      }
    }
    else if(boxNumY+1 === 8){
      if(boxNumX ===4 || boxNumX ===10 || boxNumX ===16){
        moveD();
      }
    }
    else if(boxNumY+1 === 9){
      if(boxNumX >1 && boxNumX<5 || boxNumX >8 && boxNumX<19){
        moveD();
      }
    }
    else isMoving = false;
}


function showword(){
    if(character === "correct"){
      image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      
      text("... It's her",240, 675, 720, 200);

      //gameStatus = "plot";
    }
    if(character === "old man"){
      image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      text("It's definitely a woman you're looking for, not a man.",240, 675, 720, 200);
    }
    if(character === "child"){
        image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      text("Changed to a child? Really?",240, 675, 720, 200);
    }

    if(character === "couple"){
        image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("girl",285, 602);
      fill(0);
      text("That's weird… I feel like someone's staring at me.",240, 675, 720, 200);
    }
}
//-------------------------------------------------------------------------------------------
function catMoveH(){

  // the cat can not goes out the map
  //if(catX< 110)catX = 110;

  if(moveStep < boxSizeX){
    if(moveDir === "up")houseCheckU();
    else if(moveDir === "down")houseCheckD();
    else if(moveDir === "left")houseCheckL();
    else if(moveDir === "right")houseCheckR();
        
  }
  else{
    // let the boxnum change
    if(moveDir === "up") boxNumY--;
    if(moveDir === "down") boxNumY++;
    if(moveDir === "left") boxNumX--;
    if(moveDir === "right") boxNumX++;

    moveDir = "none";
    moveStep = 0;
    isMoving = false;
  }
}
// the house map check if the cat can go 
function houseCheckL(){
    if(boxNumY === 3){
      if(boxNumX-1>4 && boxNumX-1< 14){
        moveL();
      }
    }
    else if(boxNumY === 4){
      if(boxNumX-1 >8 && boxNumX-1 <11){
        moveL();
      }
    }
    else if(boxNumY === 7){
      if(boxNumX-1>8 && boxNumX-1 <13){
        moveL();
      }
    }
    else if(boxNumY === 8){
      if(boxNumX-1 === 8 || boxNumX-1 === 12 ||boxNumX-1 === 11){
        moveL();
      }
    }
    else if(boxNumY === 9){
      if(boxNumX-1>6 && boxNumX-1 <11){
        moveL();
      }
    }
    else if(boxNumY === 10){
      if(boxNumX-1 === 9){
        moveL();
      }
    }
    else isMoving = false;
}
// the house map check if the cat can go right 
function houseCheckR(){
    if(boxNumY === 3){
      if(boxNumX+1>4 && boxNumX+1< 15){
        moveR();
      }
    }
    else if(boxNumY === 4){
      if(boxNumX+1 >8 && boxNumX+1 <12){
        moveR();
      }
    }
    else if(boxNumY === 7){
      if(boxNumX+1>8 && boxNumX+1 <14){
        moveR();
      }
    }
    else if(boxNumY === 8){
      if(boxNumX+1 === 9 || boxNumX+1 === 12 ||boxNumX+1 === 13){
        moveR();
      }
    }
    else if(boxNumY === 9){
      if(boxNumX+1>7 && boxNumX+1 <12){
        moveR();
      }
    }
    else if(boxNumY === 10){
      if(boxNumX+1 === 10){
        moveR();
      }
    }
    else isMoving = false;
}
// the house map check if the cat can go up 
function houseCheckU(){
    if(boxNumY-1 === 3){
      if(boxNumX>8 && boxNumX<12){
        moveU();
      }
    }
    else if(boxNumY-1 === 5 ||boxNumY-1 === 6 ||boxNumY-1 === 7){
      if(boxNumX === 9 || boxNumX === 8){
        moveU();
      }
    }
    else if(boxNumY-1 === 4){
      if(boxNumX === 9){
        moveU();
      }
    }
    else if(boxNumY-1 === 8){
      if(boxNumX===8 || boxNumX ===9 || boxNumX ===11|| boxNumX ===13){
        moveU();
      }
    }
    else if(boxNumY-1 === 9){
      if(boxNumX===9 || boxNumX ===10){
        moveU();
      }
    }
    else isMoving = false;
}

function houseCheckD(){
    if(boxNumY+1 === 4){
      if(boxNumX>8 && boxNumX<12){
        moveD()
      }
    }
     else if(boxNumY+1 === 5){
      if(boxNumX === 9){
        moveD()
      }
    }
    else if(boxNumY+1 === 8 ||boxNumY+1 === 6 ||boxNumY+1 === 7){
      if(boxNumX === 9 || boxNumX === 8){
        moveD()
      }
    }
    else if(boxNumY+1 === 9){
      if(boxNumX===8 || boxNumX ===9 || boxNumX ===11|| boxNumX ===13){
        moveD()
      }
    }
    else if(boxNumY+1 === 10){
      if(boxNumX===9 || boxNumX ===10){
        moveD()
      }
    }
    else isMoving = false;
}
let photoG = false;
let newsG = false;
function showwordH(){
    if(prop === "ring"){
      image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      
      text("Looks pretty old…",240, 675, 720, 200);
    }
    if(prop === "fridge"){
      image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      
      text("The food's all expired… just how long has she been dead?",240, 675, 720, 200);
    }
     if(prop === "photo"){
      photoG = true ;
      image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      
      text("You can't make out the face, but this must be her son.(You put the photo into your bag.)",240, 675, 720, 200);

    }
     if(prop === "wardore"){
      image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      
      text("These look like kid's toys.",240, 675, 720, 200);

    }
    if(prop === "Newspaper"){
      newsG = true;
      image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      
      text("A new Knight Commander sworn in",240, 675, 720, 200);

    }
    if(prop === "TV"){
      image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      
      text("Entertainment News: The Knight Commander is actually an illegitimate child!",240, 675, 720, 200);

    }
    if(prop === "Photo album"){
      image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      
      text("Why… are there no pictures inside?",240, 675, 720, 200);

    }
    if(prop === "Bedroom"){
      image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      
      text("…Going into someone's bedroom without permission feels wrong.",240, 675, 720, 200);
    }
    if(prop === "box"){
      image(textBox, 0, 0, 1200, 800);
      image(nameBoxL, 0, 0, 1200, 800);
      fill(217, 137, 52);
      text("???",285, 602);
      fill(0);
      
      text("It's locked. Probably nothing useful inside.",240, 675, 720, 200);

    }
}