import Role from './Role';
import Character from './Character';
import MeleeAttack from '../abilities/MeleeAttack';

export default class Swordsman extends Character {
    constructor(name: string) {
        super(name, Role.Swordsman, new MeleeAttack());
    }
}
