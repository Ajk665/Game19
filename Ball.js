class Ball{

    constructor(x,y,r){
        var options ={

            isStatic:false

        }
        this.r = r;
        this.body = Bodies.circle(x,y,15,options);
        World.add(world,this.body);


    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0,this.r);
        pop();



    }

}