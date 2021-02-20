class CircleGeometryAcs {
    private readonly PI: number = 3.14;
    static readonly staticPI: number = 3.14;

    constructor(public radius: number) { }

    get area() {
        return this.PI * (this.radius ** 2);
    }

    set area(value: number) {
        this.radius = (value / this.PI) ** 0.5;
    }

    public circumference(): number {
        return 2 * this.PI * this.radius;
    }
}

const circleAcs = new CircleGeometryAcs(2);

console.log(circleAcs.area);

circleAcs.radius = 3;

console.log(circleAcs.area);
