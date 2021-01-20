class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 8

        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.body);
    }
    fly() {
        this.slingShot.bodyA = null;
    }

    attach() {
        this.slingShot.bodyA = body;
    }

    display() {
        if (this.slingShot.bodyA = null) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
}