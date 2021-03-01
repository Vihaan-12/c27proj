class bob {
  constructor(x, y) {
    var options = {
        isStatic:true
    }
    this.body = Bodies.circle(x, y, 100, options);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("grey");
    ellipse(0, 0, 100);
    pop();
  }
}