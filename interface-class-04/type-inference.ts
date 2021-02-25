enum Color {
    White,
    Black,
    Brow,
    Grey,
    Rainbow,
}

class Horse {
    constructor(
        public name: string,
        public color: Color,
        public readonly type: string,
        private noise: string = "..."
    ) {}

    public makeNoise() {
        console.log(this.noise);
    }

    public info() {
        console.log(this.infoText());
    }

    private infoText(): string {
        return `It is ${this.name} the ${Color[this.color]} ${this.type}.`;
    }
}

let horse = new Horse("A", Color.Black, "Stallion");
console.log(horse);

// Type 'null' is not assignable to type 'Horse'.
// horse = null;

class Unicorn extends Horse {}
