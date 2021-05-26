class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            friction: 1,
            restitution: 0
        }

        this.body = Bodies.cricle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
    }
}
