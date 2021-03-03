enum Role {
    Swordsman,
    Warlock,
    Highwayman,
    BountyHunter,
    Monster,
}

interface ICharacter {
    name: string;
    role: Role;
    attack(target: Human): void;
}

interface IStatus {
    health: number;
    mana: number;
    strength: number;
    defense: number;
}

class Human implements ICharacter, IStatus {
    constructor(public name: string, public role: Role) {}
    public health: number = 50;
    public mana: number = 10;
    public strength: number = 10;
    public defense: number = 5;

    public attack(target: ICharacter) {
        let verb: string;

        switch (this.role) {
            case Role.Swordsman:
                verb = 'attacking';
                break;
            case Role.Warlock:
                verb = 'cursing';
                break;
            case Role.Highwayman:
                verb = 'ambushing';
                break;
            case Role.BountyHunter:
                verb = 'threatening';
                break;
            default:
                throw new Error(`${this.role} didn't exist!`);
        }

        console.log(`${this.name} is ${verb} ${target.name}!`);
    }
}

const char1 = new Human('A', Role.Swordsman);
const char2 = new Human('B', Role.Highwayman);

char1.attack(char2);
char2.attack(char1);

let human = new Human('C', Role.Swordsman);
let onlyChar: ICharacter = new Human('D', Role.Warlock);

human.name;
human.health;
onlyChar.name;
// onlyChar.health;

class Monster implements ICharacter {
    public role = Role.Monster;

    constructor(public name: string) {}

    public attack(target: ICharacter) {
        console.log(
            `${this.name} is attacking the ${Role[target.role]}: ${
                target.name
            }!`
        );
    }
}

let aHuman = new Human('P1', Role.Swordsman);
let aMonster = new Monster('Slime');

aHuman.attack(aHuman);
aMonster.attack(aHuman);

class BountyHunter extends Human {
    public hostages: ICharacter[] = [];

    constructor(name: string) {
        super(name, Role.BountyHunter);
    }

    public capture(target: ICharacter, successRate: number) {
        const randomNumber = Math.random();
        let status: string;
        let targetTitle = `${target.name} the ${target.role}`;

        if (randomNumber > 1 - successRate) {
            this.hostages.push(target);
            status = `has captured`;
        } else {
            status = `failed to captured`;
        }

        console.log(`${this.name} ${status} ${targetTitle}`);
    }

    public sellHostages() {
        const totalPrice = this.hostages.length * 1000;
        const hostagesInfo = this.hostages
            .map((hostage) => `${hostage.name} the ${Role[hostage.role]}`)
            .join('\n');

        console.log(`${this.name} sells all the hostages, including:`);
        console.log(`${hostagesInfo}`);
        console.log(`Receive Gold: ${totalPrice}`);

        this.hostages = [];
    }
}

const bountyHunter = new BountyHunter('A');
const wantedMan = new Human('W', Role.Highwayman);
const wantedMonster = new Monster('M');
const desperado = new Human('D', Role.Highwayman);

bountyHunter.capture(wantedMan, 1);
bountyHunter.capture(wantedMonster, 0.5);
bountyHunter.capture(desperado, 0.1);

bountyHunter.sellHostages();
