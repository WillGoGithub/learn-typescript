interface PersonInfo {
    name: string;
    age: number;
    hasPet: boolean;
    printInfo(): void;
}

let well: PersonInfo = {
    name: 'Well',
    age: 20,
    hasPet: false,
    printInfo() {
        console.log('object');
    }
};

class UserInfo {
    name: string;
    age: number;
    hasPet: boolean;

    constructor(name: string, age: number, hasPet: boolean) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }

    printInfo() {
        console.log(`Name: ${ this.name }, Age: ${ this.age }, HasPet: ${ this.hasPet }`);
    }
}

let customer = new UserInfo('A', 1, true);
customer.printInfo();

class UserDefaultInfo {
    name: string;
    age: number;
    hasPet: boolean;

    constructor(
        name: string = 'default',
        age: number = 123,
        hasPet: boolean = true
    ) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }

    printInfo() {
        console.log(`Name: ${ this.name }, Age: ${ this.age }, HasPet: ${ this.hasPet }`);
    }
}

let customerDefault = new UserDefaultInfo();
customerDefault.printInfo();