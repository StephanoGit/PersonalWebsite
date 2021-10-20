document.body.style.overflow = 'hidden';

let bttnState = false;

const canvas1 = document.getElementById("canvas1");
const context1 = canvas1.getContext("2d");
let width1 = canvas1.width = window.screen.width;
let height1 =  canvas1.height = 128 * 3;

const canvas2 = document.getElementById("canvas2");
const context2 = canvas2.getContext("2d");
let width2 = canvas2.width = window.screen.width * 0.6;
let height2 =  canvas2.height = 128 * 3;

const frameWidth = 128;
const frameHeight = 72 * 6;
let xPos1 = 0;
let yPos1 = 0;
let xPosEndRail1;
let xPosEndRail2;
let frameIndex = 0;
let count = 0;
let noRails1 = 9;
let noRails2 = 4;
let proportion1 = 1.3;
let proportion2 = 2.5;

//get the spriteSheets for rails
const railSpriteSheet = new Image();
railSpriteSheet.src="css/img/railswsupport_spriteSheet.png";
const railEndSpriteSheet = new Image();
railEndSpriteSheet.src="css/img/railsend_spriteSheet.png";
const railEndFlippedSpriteSheet = new Image();
railEndFlippedSpriteSheet.src="css/img/railsend_flipped_spriteSheet.png";

//draw initial state of rails when page is open and button not pressed
function drawStationaryRails(){
  context1.clearRect(0, 0, width1, height1);
  context2.clearRect(0, 0, width2, height2);

  for(let i = 0; i < noRails1; i++){
    context1.drawImage(
      railSpriteSheet,
      frameIndex * frameWidth,
      50,
      frameWidth,
      frameHeight,
      xPos1 + window.screen.width / proportion1 / noRails1 * i,
      yPos1,
      window.screen.width / proportion1 / noRails1,
      window.screen.width / proportion1 / noRails1 * 3
    );
    xPosEndRail1 = xPos1 + window.screen.width / proportion1 / noRails1 * (i+1);
  }

  for(let i = 0; i < noRails2; i++){
    context2.drawImage(
      railSpriteSheet,
      (7 - frameIndex) * frameWidth,
      50,
      frameWidth,
      frameHeight,
      xPos1 + window.screen.width / proportion2 / noRails2 * (i + 0.625),
      yPos1,
      window.screen.width / proportion2 / noRails2,
      window.screen.width / proportion2 / noRails2 * 3
    );
    xPosEndRail2 = 0;
  }

  context1.drawImage(
    railEndSpriteSheet,
    frameIndex * frameWidth,
    56,
    frameWidth,
    frameHeight,
    xPosEndRail1,
    yPos1,
    window.screen.width / proportion1 / noRails1,
    window.screen.width / proportion1 / noRails1 * 3
  );

  context2.drawImage(
    railEndFlippedSpriteSheet,
    (7 - frameIndex) * frameWidth,
    56,
    frameWidth,
    frameHeight,
    xPos1,
    yPos1,
    window.screen.width / proportion2 / noRails2,
    window.screen.width / proportion2 / noRails2 * 3
  );

    //right end of upper rail
    context2.drawImage(
      railEndSpriteSheet,
      (7 - frameIndex) * frameWidth,
      56,
      frameWidth,
      frameHeight,
      (noRails2 * 2.88) * (window.screen.width / proportion2 / noRails2) / proportion2,
      yPos1,
      window.screen.width / proportion2 / noRails2,
      window.screen.width / proportion2 / noRails2 * 3
    );
    
  requestAnimationFrame(drawStationaryRails);
}
drawStationaryRails();
checkScreenSize();

function animate(){

  checkScreenSize();

  if(window.screen.width < 1500){
    noRails1 = 9;
    noRails2 = 4;
  } else if(window.screen.width < 1920){
    noRails1 = 10;
    noRails2 = 4.5;
  } else if (window.screen.width > 1920) {
    noRails1 = 11;
    noRails2 = 5;
  }

  for(let i = 0; i < noRails1; i++){
    context1.drawImage(
      railSpriteSheet,
      frameIndex * frameWidth,
      50,
      frameWidth,
      frameHeight,
      xPos1 + window.screen.width / proportion1 / noRails1 * i,
      yPos1,
      window.screen.width / proportion1 / noRails1,
      window.screen.width / proportion1 / noRails1 * 3
    );
    xPosEndRail1 = xPos1 + window.screen.width / proportion1 / noRails1 * (i+1);
  }

  for(let i = 0; i < noRails2; i++){
    context2.drawImage(
      railSpriteSheet,
      (7 - frameIndex) * frameWidth,
      50,
      frameWidth,
      frameHeight,
      xPos1 + window.screen.width / proportion2 / noRails2 * (i + 0.625),
      yPos1,
      window.screen.width / proportion2 / noRails2,
      window.screen.width / proportion2 / noRails2 * 3
    );
    xPosEndRail2 = (noRails2 * 2.85) * (window.screen.width / proportion2 / noRails2) / proportion2;
  }

  //end rail of the lower rail
  context1.drawImage(
    railEndSpriteSheet,
    frameIndex * frameWidth,
    56,
    frameWidth,
    frameHeight,
    xPosEndRail1,
    yPos1,
    window.screen.width / proportion1 / noRails1,
    window.screen.width / proportion1 / noRails1 * 3
  );

  //left end of upper rail
  context2.drawImage(
    railEndFlippedSpriteSheet,
    (7 - frameIndex) * frameWidth,
    56,
    frameWidth,
    frameHeight,
    xPos1,
    yPos1,
    window.screen.width / proportion2 / noRails2,
    window.screen.width / proportion2 / noRails2 * 3
  );

  //right end of upper rail
  context2.drawImage(
    railEndSpriteSheet,
    (7 - frameIndex) * frameWidth,
    56,
    frameWidth,
    frameHeight,
    xPosEndRail2,
    yPos1,
    window.screen.width / proportion2 / noRails2,
    window.screen.width / proportion2 / noRails2 * 3
  );

  count++;

  if(count > 5 ){
    frameIndex++;
    count = 0;
  }

  if(frameIndex > 7){
    frameIndex = 0;
  }
}

function checkScreenSize(){
  width1 = canvas1.width = window.screen.width;
  height1 =  canvas1.height = 128 * 3;

  width2 = canvas2.width = window.screen.width * 0.6;
  height2 =  canvas2.height = 128 * 3;
}

var globalID;

function frame(){
  context1.clearRect(0, 0, width1, height1);
  context2.clearRect(0, 0, width2, height2);
  animate();
  globalID = requestAnimationFrame(frame);
}

let id = null;
const box_aboutme = document.getElementById("box_boxes_2");
let pos = 0;
function moveBox(){
  pos = pos + 1.2;
  box_aboutme.style.left = pos + 'px';
}

if(bttnState == true){
  globalID = requestAnimationFrame(frame);
}

$("#bttn").on("mouseup", function() {
  cancelAnimationFrame(globalID); 
  clearInterval(id);
});
$("#bttn").on("mousedown", function() {
  globalID = requestAnimationFrame(frame);
  id = setInterval(moveBox, 10);
});

function changeImg(){
  var img = document.getElementById('bttn');
  if(img.src.match("button_unpressed.png")){
    bttnState = true;
    img.src = "/css/img/button_pressed.png";
  } else {
    bttnState = false;
    img.src = "/css/img/button_unpressed.png";
  }
}



