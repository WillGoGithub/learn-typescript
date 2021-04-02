import Attack from '../abilities/Attack';
import Character from '../characters/Character';
import Role from '../characters/Role';

export default abstract class Weapon {
    abstract readonly name: string;
    abstract availableRoles: Role[];
    abstract attackStrategy: Attack;

    switchAttackStrategy(type: Attack): void {
        this.attackStrategy = type;
    }

    attack(self: Character, target: Character): void {
        this.attackStrategy.attack(self, target);
    }
}
