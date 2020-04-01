class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gamestate');
    gameStateRef.on("value",function(data){
       gamestate = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gamestate: state
    });
  }

  async start(){
    if(gamestate === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playercount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();

    Player.getplayerinfo();
    
    if(allplayers !== undefined){
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 0;
      var y;

      for(var plr in allplayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allplayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    drawSprites();
  }
}













/*
class Game{
    constructor(){

    }
getState(){
    var gamestateref=database.ref('gamestate');
    gamestateref.on("value",function(data){
        gamestate=data.val();
    }
    )
}
update(state){
database.ref('/').update({
    gamestate:state
});
        }
        async start(){
            if(gamestate === 0){
              player = new Player();
              var playerCountRef = await database.ref('playercount').once("value");
              if(playerCountRef.exists()){
                playercount = playerCountRef.val();
                player.getCount();
              }
              form = new Form()
              form.display();
            
            }
            car1 = createSprite(100,200);
            car2 = createSprite(300,200);
            car3 = createSprite(500,200);
            car4 = createSprite(700,200);
            cars = [car1,car2,car3,car4];
          }
    play(){
        form.hide();

        //textSize=30;
       // text("game start",120,100);
        Player.getplayerinfo();
        if (allplayers !== undefined)
        {
            // var display_position=130;
            var index=0
            var x = 0;
            var y 
             for(var plr in allplayers){
               index = index+1;                                                                                                  
               x = x + 200;                                                                                                       
               //y = displayHeight-allplayers[plr].distance                                                                    
               cars[index-1].x = x;                                                                                               
               cars[index-1].y = y;

               if (index===player.index){
                 cars[index-1].shapeColor=blue;   
                 camera.position.x=displayWidth/2;
                 camera.position.y=cars[index-1].y

                 }
               

             //display_position+=20;
             //textSize=15;
             //text (allplayers);
             //text(allplayers[plr].name + ": " + allplayers[plr].distance, 120,display_position)   
        }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
  }
 }
}

*/