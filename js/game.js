class game {
      constructor() {

      }
      getState() {
            database.ref("GameState").on("value", function (data) {
                  GameState = data.val()
            })

      }
      async start() {
            if (GameState === 0) {
                  playerObj = new player();
                  var PlayerRef = await database.ref("PlayerCount").once("value")
                  if(PlayerRef.exists()){
                        PlayerCount=PlayerRef.val();
                        playerObj.getCount();
                  }
                  formObj = new form();
                  formObj.display();
            }
      }
update(state){
      database.ref("/").update({
            GameState:state
      })
}
play(){
      formObj.hide();
      textSize(20)
      text("Game Start",200,150)
     
      var info =  player.getPlayerInfo()
      console.log(info);
      if(allPlayers!==undefined){
            var y = 180
            for(var i in allPlayers){
                  if(i==="p" + playerObj.index)
                      fill("blue")
                      else 
                      fill("red")
            
            y+=20
            textSize(15)
            text(allPlayers,[i].name+":"+allPlayers[i].distance,200,y);
            }
      }
      if(keyIsDown(UP_ARROW)&&playerObj.index!==null){
            playerObj.distance+=5;
            playerObj.update();
      }
}
}
