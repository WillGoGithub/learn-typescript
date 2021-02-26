enum Color {
    White,
    Black,
    Brown,
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

    protected infoText(): string {
        return `It is ${this.name} the ${Color[this.color]} ${this.type}.`;
    }
}

let horse = new Horse("A", Color.Black, "Stallion");
console.log(horse);

// Type 'null' is not assignable to type 'Horse'.
// horse = null;

class Unicorn extends Horse {
    constructor(name: string) {
        super(name, Color.Rainbow, "Unicorn", "Noise");
    }

    public puke() {
        console.log(`Puking ${Color[this.color]} vomit!`);
    }

    protected infoText(): string {
        return `It's a ${this.name}`;
    }
}

let unicorn = new Unicorn("Max");
let another: Horse = new Unicorn("Mix");

unicorn.puke();
// Property 'puke' does not exist on type 'Horse'.
// another.puke();

class Stallion extends Horse {
    constructor(name: string) {
        super(name, Color.Brown, "Stallion");
    }
}

let stallion: Stallion = new Horse("Sta", Color.Brown, "Stallion");

// 定義兩種存取權限相等的類別
class C1 {
    constructor(public prop: string) {}

    public publicMethod(): string {
        return this.prop;
    }
}

class C2 {
    constructor(public prop: string) {}

    public publicMethod(): string {
        return this.prop;
    }
}

let some: C1 = new C2("Hello");

// 定義存取權限不等的類別
class C1Private {
    constructor(public prop: string, private privateProp: number) {}

    public publicMethod(): number {
        return this.privateMethod();
    }

    private privateMethod(): number {
        return this.privateProp;
    }
}

class C2Private {
    constructor(public prop: string, private privateProp: number) {}

    public publicMethod(): number {
        return this.privateMethod();
    }

    private privateMethod(): number {
        return this.privateProp;
    }
}

let another: C1Private = new C2Private("Hello", 2);
