class Bob {
    constructor(x, y, radius) {
        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 3.5
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
       // this.image = loadImage("sprites/paper.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("red");
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(0, 0, 40, 40);
        pop();
    }
}