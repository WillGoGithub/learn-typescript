import Role from './Role';
import Weapon from '../weapons/Weapon';
import Armour from '../armours/Armour';
import Equipment from '../equipments/Equipment';
export default class Character {
    constructor(
        public readonly name: string,
        public readonly role: Role,
        private weaponRef: Weapon,
        private armourRef: Armour
    ) {}

    public introduce() {
        console.log(`
            Hi, I'm ${this.name} the ${Role[this.role]}!
        `);
    }
    public equip(equipment: Equipment) {
        const { availableRoles: roles } = equipment;

        if (roles.length != 0 && !roles.includes(this.role)) {
            throw new Error(`${this.role} cannot equip the ${this.name}.`);
        }

        switch (true) {
            case equipment instanceof Weapon:
                this.weaponRef = equipment as Weapon;
                break;
            case equipment instanceof Armour:
                this.armourRef = equipment as Armour;
                break;
            default:
                throw new Error(`Nonidentity equipment.`);
        }

        console.log(`${this.name} has equipped with "${equipment.name}".`);
    }

    public attack(target: Character) {
        this.weaponRef.attack(this, target);
    }
}
