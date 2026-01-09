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

// img of the gaming part setting 
let bagG;
let guideG;
let buttonG;
let returnG;
let progressG;
let setButtonG;

let bagGHL;
let guideGHL;
let buttonGHL;
let returnGHL;
let progressGHL;
let setButtonGHL;

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

  bagG = await loadImage("rpggameImg/gaming page/setting/bag Bu.png");
  guideG = await loadImage("rpggameImg/gaming page/setting/beginner's guide Bu.png");
  buttonG = await loadImage("rpggameImg/gaming page/setting/button setting Bu.png");
  returnG = await loadImage("rpggameImg/gaming page/setting/return home Bu.png");
  progressG = await loadImage("rpggameImg/gaming page/setting/task progress Bu.png");
  setButtonG = await loadImage("rpggameImg/gaming page/setting/setting button.png");
// -----------------------the seting in the game ------------------

  proFirst = await loadImage("rpggameImg/gaming page/task progress updated/firstpage.png")

}

async function allImgHL(){
  illustrationHL = await loadImage("rpggameImg/startpage/illustration HL.png");
  propBackHL = await loadImage("rpggameImg/startpage/prop back HL.png");
  settingButtonHL = await loadImage("rpggameImg/startpage/setting HL.png");
  startGameButtonHL = await loadImage("rpggameImg/startpage/start game HL.png");
//-----------------startpage img of the hight light buttton-----------------------
  
  illustrationimgHL = await loadImage("rpggameImg/initial functions/illustration HL.png");
  progreimgHL = await loadImage("rpggameImg/initial functions/task progre HL.png");
  backHomeimgHL = await loadImage("rpggameImg/initial functions/backhome HL.png");
  buttonimgHL = await loadImage("rpggameImg/initial functions/button setting HL.png");
  //-------------------------------------------------------------------------

  bagGHL = await loadImage("rpggameImg/gaming page/setting/bag HL.png")
  guideGHL = await loadImage("rpggameImg/gaming page/setting/beginners guide HL.png")
  buttonGHL = await loadImage("rpggameImg/gaming page/setting/button setting HL.png")
  returnGHL = await loadImage("rpggameImg/gaming page/setting/return home HL.png")
  progressGHL = await loadImage("rpggameImg/gaming page/setting/task progress HL.png")
}
// the img of the game part  -----------------------------------
async function gamingImg(){


}