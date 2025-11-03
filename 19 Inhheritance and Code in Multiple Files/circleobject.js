class CircleObject extends AnimatedObject{
    constructor(x,y){
      super(x, y);
      // we can also add-on to what was in the parent class
      this.size = random(20, 40);
  
    }
    // no menyion of move() ...it will be same as parent's move()
    display(){//function override ; copies overtop of parent version
      if (dist(this.x , this.y , mouseX, mouseY)< this.size/2){
        fill(0, 255, 0);
  
      }
      else fill(255);
      circle(this.x, this.y, this.size);
  
    }
  }