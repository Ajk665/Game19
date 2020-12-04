class Man{

    constructor(){

        var options ={

            isStatic:true

        }
        this.body = Bodies.rectangle(150,600,100,200,options);
        this.width = 100;
        this.height = 200;
        this.image = loadImage('image/Walking Frame/walking_1.png');
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);  
        fill('black')  
        imageMode(RADIUS);
        image(this.image,0, 0, this.width,this.height);
        pop();
        
    }

}