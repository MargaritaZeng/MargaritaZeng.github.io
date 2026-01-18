// let boxSizeX = 54;
// let boxSizeY = 60;
// let catX = 1056;
// let catY = 410;
// let boxSizeX = 54;
// let boxSizeY = 60;

let characterGoto = "none";

let moveStep = 0;
let speed = 4;

function moveL(){
  catX -= speed;
  moveStep += speed;
  image(theCatL, catX, catY, 54, 60);
}

function moveR(){
  catX += speed;
  moveStep += speed;
  image(theCatL, catX, catY, 54, 60);
}

function moveU(){
  catY -= speed;
  moveStep += speed;
  image(theCatL, catX, catY, 54, 60);
}

function moveD(){
  catY += speed;
  moveStep += speed;
  image(theCatL, catX, catY, 54, 60);
}

function checkLR(){

}

let Roadmap = [
    []
]