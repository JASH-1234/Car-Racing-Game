class player {
      constructor() {
            this.index = null;
            this.distance = 0;
            this.name = null;
      }
      getCount() {
            database.ref("PlayerCount").on("value",  (data)=> {
                  PlayerCount = data.val();
            })
      }
      update() {
            var playerindex = "Player/p" + this.index
            database.ref(playerindex).set({
                  name: this.name,
                  distance: this.distance
            })
      }
      updateCount(count) {
            database.ref("/").update({
                  PlayerCount: count
            })


      }
      static getPlayerInfo() {//static are not attached to each obj of the class and are called by the class themselves rather than the object of the class 
  database.ref("Player").on("value",(data)=>{
      allPlayers=data.val()
})
      }
}