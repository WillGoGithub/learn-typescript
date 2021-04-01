import Role from './Role';
import Attack from '../abilities/Attack';
import Weapon from '../weapons/Weapon';
export default class Character {
    private attackRef: Attack;

    constructor(
        public readonly name: string,
        public readonly role: Role,
        private weaponRef: Weapon
    ) {
        this.attackRef = weaponRef.attackStrategy;
    }

    public introduce() {
        console.log(`
            Hi, I'm ${this.name} the ${Role[this.role]}!
        `);
    }

    public attack(target: Character) {
        this.attackRef.attack(this, target);
    }

    public equip(weapon: Weapon) {
        const { availableRoles: roles } = weapon;

        if (roles.length === 0 || roles.includes(this.role)) {
            console.log(`${this.name} has equipped with "${weapon.name}".`);
            this.weaponRef = weapon;
            this.attackRef = this.weaponRef.attackStrategy;
        } else {
            throw new Error(`${this.role} cannot equip the ${this.name}.`);
        }
    }
}
