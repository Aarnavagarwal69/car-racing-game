class Player{
    constructor(){
this.index=null;
this.distance=0;
this.name=null;
    }
getCount(){
    var playerCountref=database.ref("playercount");
    playerCountref.on("value",(data)=>{
        playercount=data.val();
    }
    )
}
updateCount(count){
database.ref("/").update({
    playercount:count
});
        }
    update(){
        var playerindex = "players/player"+this.index;
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        });
    
        
    }
    static getplayerinfo(){
        var plinfo=database.ref("players")
        plinfo.on("value",(data)=>{
            allplayers=data.val()
        });
    }
 }
