class Thunder{

    constructor(){

        var options ={ 
            isStatic:true
        }
        this.body = Bodies.rectangle(150,50,75,75,options);
        this.width = 75;
        this.height = 75;
        this.image = loadImage(random('images/thunderbolt/1.png','images/thunderbolt/2.png','images/thunderbolt/3.png','images/thunderbolt/4.png'))
        World.add(world,this.body);

    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}