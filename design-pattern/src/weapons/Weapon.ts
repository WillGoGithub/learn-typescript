import Attack from '../abilities/Attack';
import Character from '../characters/Character';
import Role from '../characters/Role';
import Equipment from '../equipments/Equipment';
import Equipments from '../equipments/Equipments';

export default abstract class Weapon implements Equipment {
    abstract readonly name: string;
    abstract availableRoles: Role[];
    abstract attackStrategy: Attack;

    public type = Equipments.Weapon;

    switchAttackStrategy(type: Attack): void {
        this.attackStrategy = type;
    }

    attack(self: Character, target: Character): void {
        this.attackStrategy.attack(self, target);
    }
}
