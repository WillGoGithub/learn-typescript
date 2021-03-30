import Role from './Role';
import Character from './Character';

export default class Swordsman extends Character {
    constructor(name: string) {
        super(name, Role.Swordsman);
    }
}
