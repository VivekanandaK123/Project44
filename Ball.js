class Ball {
    constructor(x, y, radius){
  
    var options = {
     isStatic:true
    }
    this.radius = radius;
    this.body = Bodies.circle(x, y, radius, options);
    this.image = loadImage("images/basketball.jpg");
    
    World.add(world, this.body);
  
    }
  
    display(){
  
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      noStroke();
      fill("orange");
      imageMode(CENTER);
      image(this.image,0,0,this.radius,70);
      pop();
    }
  
  
  }