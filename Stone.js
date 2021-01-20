class Stone {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.cricle(x, y, options);
        World.add(world, this.body);
        this.image = loadImage("images/stone.png");
    }

    display() {
        image(this.image, this.body.position.x, this.body.position.y, 40, 40);
    }
}