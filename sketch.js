var canvas,backgroundimage;
var gamestate = 0;
var playercount;
var database;
var form,player,game;
var allplayers;
var car1,car2,car3,car4,cars;


function setup(){
canvas=createCanvas(600,600);
database=firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw(){
if (playercount === 4){
    game.update(1);
}
if (gamestate===1){
    clear()
    game.play();
}
}
