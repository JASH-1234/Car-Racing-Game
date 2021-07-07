var database;
var GameState=0;
var PlayerCount,formObj,playerObj,gameObj;
var allPlayers,distance=0;

function setup(){
    database = firebase.database();//for connecting database
    createCanvas(500,500);
    gameObj = new game();
    gameObj.getState();
    gameObj.start();
}

function draw(){
  if(PlayerCount===2){
      gameObj.update(1);
  }
if(GameState===1){
    clear()
    gameObj.play()

    
}
}



