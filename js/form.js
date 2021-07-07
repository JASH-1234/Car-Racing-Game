class form {
      constructor() {
this.title=createElement("h2");
this.input= createInput("name");
this.button= createButton("play");
this.greet=createElement("h4");
      }
      display() {
            this.title.html("Car Racing Game");
            this.title.position(550, 100);
            this.input.position(550, 180);
            this.button.position(550, 260);
            this.greet.position(550, 180);
            this.button.mousePressed( ()=> {
                  this.input.hide();
                  this.button.hide();
                  playerObj.name = this.input.value();
                  PlayerCount++
                  playerObj.index=PlayerCount;
                  playerObj.update();
                  playerObj.updateCount(PlayerCount);
                  this.greet.html("hello " + playerObj.name);
            })
      }
      hide(){
            this.input.hide()
            this.button.hide()
            this.greet.hide();
      }
}