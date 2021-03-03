enum Role {
    Swordsman,
    Warlock,
    Highwayman,
    BountyHunter,
}

interface ICharacter {
    name: string;
    role: Role;
    attack(target: Player): void;
}

interface IStatus {
    health: number;
    mana: number;
    strength: number;
    defense: number;
}

class Player implements ICharacter, IStatus {
    constructor(public name: string, public role: Role) {}
    public health: number = 50;
    public mana: number = 10;
    public strength: number = 10;
    public defense: number = 5;

    public attack(target: Player) {
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

const char1 = new Player('A', Role.Swordsman);
const char2 = new Player('B', Role.Highwayman);

char1.attack(char2);
char2.attack(char1);

let player = new Player('C', Role.Swordsman);
let onlyChar: ICharacter = new Player('D', Role.Warlock);
