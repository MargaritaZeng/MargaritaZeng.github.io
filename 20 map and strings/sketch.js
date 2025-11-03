// map data structrue and reading file 
// margarita
// oct 31
//
let textFile ;
let imgText, rows, cols, colorMap;

function preload(){
  textFile = loadStrings("assets/info.txt") ;
  imgText = loadStrings("assets/image.txt") ;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // loadAssets();
  // processText();
  rows = imgText.length ;
  cols = imgText[0].length;

  colorMap  = new Map ([
    ["b", "black"],
    ["w", color(255)]
  ]);

  drawImage();
}

function drawImage(){
  
}

function processText(){
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split('');
  print(splitWords);

  print("SPLIT INTO CHARACTERS")
  let splitChars = textFile[1].split('');
  print(splitChars);

  print("SPREAD INTO CHARACTERS")
  let spreadChars = [...textFile[2]];
  print(spreadChars);

}



function draw() {
  background(220);
}
