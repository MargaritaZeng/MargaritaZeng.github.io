// all the loading things and the name of the loading iamge 
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
let backimg;
let bagimg;
let illBackimg;
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

// img of the progress 
let proFirst ;


// load img of the starting page img

async function startpageImg(){
  mainimg = await loadImage("rpggameImg/startpage/backpage.png");
  gamename = await loadImage("rpggameImg/startpage/gamename.png");
  illustration = await loadImage("rpggameImg/startpage/illustration Bu.png");
  propBack = await loadImage("rpggameImg/startpage/prop back Bu.png");
  settingButton = await loadImage("rpggameImg/startpage/setting Bu.png");
  startGameButton = await loadImage("rpggameImg/startpage/start game Bu.png");
//--------------------startpage img of main buttons----------------------------
  backimg = await loadImage("rpggameImg/initial functions/backimg.png");
  bagimg = await loadImage("rpggameImg/initial functions/bagimg.png");
  illBackimg = await loadImage("rpggameImg/initial functions/illustration backimg.png");
  backbuttonimg = await loadImage("rpggameImg/initial functions/button backpage.png");
  setbuttonimg = await loadImage("rpggameImg/initial functions/button setup.png");
  
  buttonimg = await loadImage("rpggameImg/initial functions/button setting Bu.png");
  illustrationimg = await loadImage("rpggameImg/initial functions/illustration Bu.png");
  progreimg = await loadImage("rpggameImg/initial functions/task progre Bu.png");
  backHomeimg = await loadImage("rpggameImg/initial functions/backhome Bu.png");
//--------------------main page img of button and bag img--------------------
  proFirst = await loadImage("rpggameImg/gaming page/task progress updated/firstpage.png")

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

