class Particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.01,
        
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color= color(random(20,200),random(20,100))
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
 var color = this.body.color
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};