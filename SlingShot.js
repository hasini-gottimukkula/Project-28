class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 8

        }
        this.slingShot = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(world, this.slingShot);
    }
    fly() {
        this.slingShot.bodyA = null;
    }

    attach() {
        this.slingShot.bodyA = (body);
    }

    display() {
        if (this.slingShot.bodyA) {
            var pointA = bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
}