// Dynamic
class CircleGeometry {
    private PI: number = 3.14;

    constructor(public radius: number) { }

    public area(): number {
        return this.PI * (this.radius ** 2);
    }

    public circumference(): number {

        return 2 * this.PI * this.radius;
    }
}

const circle = new CircleGeometry(2);

console.log(circle.area());
console.log(circle.circumference());

// Static
Math.PI;
Math.random();
Math.sin(Math.PI / 2);
Math.pow(2, 4);

class StaticCircleGeometry {
    private static PI: number = 3.14;

    static area(radius: number): number {
        return StaticCircleGeometry.PI * (radius ** 2);
    }

    static circumference(radius: number): number {
        return 2 * StaticCircleGeometry.PI * radius;
    }
}

const areaFromStaticMethod = StaticCircleGeometry.area(2);
const circumferenceFromStaticMethod = StaticCircleGeometry.circumference(2);
