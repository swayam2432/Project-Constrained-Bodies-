class Roof {
    constructor(x, y,width,height) {
        var option1 = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, option1);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        stroke("red");
        fill("yellow");
        rectMode(CENTER);
        rect(0, 0, this.width,this.height);
        pop();

    }
}
