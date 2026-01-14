// all the loading things and the name of the loading iamge 

 

//name of the starting page img
let mainimg ;              
let gamename ;            // let the button highlight of start page 
let illustration ;        let illustrationHL ;
let propBack ;            let propBackHL ;
let settingButton ;       let settingButtonHL ;
let startGameButton ;     let startGameButtonHL ;

//img of the mainthing in buttons
let backimg;
let bagimg;
let illBackimg;           //img of the mainthing in buttons hight light thing 
let buttonimg;            let buttonimgHL;
let backbuttonimg;        let illustrationimgHL;
let setbuttonimg;         let progreimgHL;
let illustrationimg;      let backHomeimgHL;
let progreimg;
let backHomeimg;

// img of the progress 
let proFirst ;

// img of the gaming part setting 
let bagG;                 let bagGHL; 
let guideG;               let guideGHL;
let buttonG;              let buttonGHL;
let returnG;              let returnGHL;
let progressG;            let progressGHL;
let setButtonG;           let setButtonGHL;

// the image of the plot part world box
let textBox;
let headBoxL;             let headBoxR;
let nameBoxL;             let nameBoxR;

// the image of the people pace
let nemorin;
let npc;
let theCat;
let theCatP;
let serenie;
let vallerin;

// the mood of character
let smile;
let sad;                 let sadC;
let happy;               let happyC;
let impatient;           let impatientC;
let speechless;          let speechlessC;
let confuse;             let confuseC;
let surprise;            let surpriseC
let cry;
let frown;



// load img of the starting page img
async function startpageImg(){
//--------------------startpage img of buttons----------------------------
  mainimg = await loadImage("rpggameImg/startpage/backpage.png");
  gamename = await loadImage("rpggameImg/startpage/gamename.png");
  illustration = await loadImage("rpggameImg/startpage/illustration Bu.png");
  propBack = await loadImage("rpggameImg/startpage/prop back Bu.png");
  settingButton = await loadImage("rpggameImg/startpage/setting Bu.png");
  startGameButton = await loadImage("rpggameImg/startpage/start game Bu.png");

//--------------------main page img of button and back img--------------------
  backimg = await loadImage("rpggameImg/initial functions/backimg.png");
  bagimg = await loadImage("rpggameImg/initial functions/bagimg.png");
  illBackimg = await loadImage("rpggameImg/initial functions/illustration backimg.png");
  backbuttonimg = await loadImage("rpggameImg/initial functions/button backpage.png");
  setbuttonimg = await loadImage("rpggameImg/initial functions/button setup.png");
  
  buttonimg = await loadImage("rpggameImg/initial functions/button setting Bu.png");
  illustrationimg = await loadImage("rpggameImg/initial functions/illustration Bu.png");
  progreimg = await loadImage("rpggameImg/initial functions/task progre Bu.png");
  backHomeimg = await loadImage("rpggameImg/initial functions/backhome Bu.png");

// -----------------------the seting in the game ------------------
  bagG = await loadImage("rpggameImg/gaming page/setting/bag Bu.png");
  guideG = await loadImage("rpggameImg/gaming page/setting/beginner's guide Bu.png");
  buttonG = await loadImage("rpggameImg/gaming page/setting/button setting Bu.png");
  returnG = await loadImage("rpggameImg/gaming page/setting/return home Bu.png");
  progressG = await loadImage("rpggameImg/gaming page/setting/task progress Bu.png");
  setButtonG = await loadImage("rpggameImg/gaming page/setting/setting button.png");

}

async function allImgHL(){
//-----------------startpage img of the hight light buttton--------------
  illustrationHL = await loadImage("rpggameImg/startpage/illustration HL.png");
  propBackHL = await loadImage("rpggameImg/startpage/prop back HL.png");
  settingButtonHL = await loadImage("rpggameImg/startpage/setting HL.png");
  startGameButtonHL = await loadImage("rpggameImg/startpage/start game HL.png");

  //-------------main page high light button----------------------
  illustrationimgHL = await loadImage("rpggameImg/initial functions/illustration HL.png");
  progreimgHL = await loadImage("rpggameImg/initial functions/task progre HL.png");
  backHomeimgHL = await loadImage("rpggameImg/initial functions/backhome HL.png");
  buttonimgHL = await loadImage("rpggameImg/initial functions/button setting HL.png");

  //-------------------the hight light button img of the setting in the game------------------------------------------------------
  bagGHL = await loadImage("rpggameImg/gaming page/setting/bag HL.png")
  guideGHL = await loadImage("rpggameImg/gaming page/setting/beginners guide HL.png")
  buttonGHL = await loadImage("rpggameImg/gaming page/setting/button setting HL.png")
  returnGHL = await loadImage("rpggameImg/gaming page/setting/return home HL.png")
  progressGHL = await loadImage("rpggameImg/gaming page/setting/task progress HL.png")
}


// the img of the game part  -----------------------------------
async function gamingImg(){
    //the story box
    textBox = await loadImage("rpggameImg/gaming page/text box.png");
    headBoxL = await loadImage("rpggameImg/gaming page/boxL.png");
    headBoxR = await loadImage("rpggameImg/gaming page/boxR.png");
    nameBoxL = await loadImage("rpggameImg/gaming page/name boxL.png");
    nameBoxR = await loadImage("rpggameImg/gaming page/name boxR.png");

    // the face of people
    nemorin = await loadImage("rpggameImg/gaming page/portrait/nemorin.png");
    npc = await loadImage("rpggameImg/gaming page/portrait/npc.png");
    theCat = await loadImage("rpggameImg/gaming page/portrait/the catC.png");
    theCatP = await loadImage("rpggameImg/gaming page/portrait/the catP.png");
    serenie = await loadImage("rpggameImg/gaming page/portrait/serenie.png");
    vallerin = await loadImage("rpggameImg/gaming page/portrait/vallerin.png");

    // the progress img
    proFirst = await loadImage("rpggameImg/gaming page/task progress updated/firstpage.png")

    //the mood img
    smile = await loadImage("rpggameImg/gaming page/expression/smile.png")
    sad = await loadImage("rpggameImg/gaming page/expression/sad.png")
    happy = await loadImage("rpggameImg/gaming page/expression/happy.png")
    impatient = await loadImage("rpggameImg/gaming page/expression/impatirnt.png")
    speechless = await loadImage("rpggameImg/gaming page/expression/speechless.png")
    confuse = await loadImage("rpggameImg/gaming page/expression/confuse.png")
    surprise = await loadImage("rpggameImg/gaming page/expression/surprise.png")
    cry = await loadImage("rpggameImg/gaming page/expression/cry.png")
    frown = await loadImage("rpggameImg/gaming page/expression/frown.png")

    sadC = await loadImage("rpggameImg/gaming page/expression/sadC.png")
    happyC = await loadImage("rpggameImg/gaming page/expression/happyC.png")
    impatientC = await loadImage("rpggameImg/gaming page/expression/impatientC.png")
    speechlessC = await loadImage("rpggameImg/gaming page/expression/speechless.png")
    confuseC = await loadImage("rpggameImg/gaming page/expression/confuseC.png")
    surpriseC = await loadImage("rpggameImg/gaming page/expression/surpriseC.png")
}

// let smile;
// let sad;                 let sadC;
// let happy;               let happyC;
// let impatient;           let impatientC;
// let speechless;          let speechlessC;
// let confuse;             let confuseC;
// let surprise;            let surpriseC
// let cry;
// let frown;