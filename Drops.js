class Drops{
constructor (x,y){
    var options ={
        restitution:0.1,
        friction:1,
    }
this.rain=Bodies.circle(x,y,3,options);
this.radius=3;
world.add(world,this.rain);
}
display(){
    Fill(blue);
    ellipseMode(centre);
}

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

}