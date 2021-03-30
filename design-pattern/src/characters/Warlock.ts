import Role from './Role';
import Character from './Character';

export default class Warlock extends Character {
    constructor(name: string) {
        super(name, Role.Warlock);
    }
}
