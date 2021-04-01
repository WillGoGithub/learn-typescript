import Role from './Role';
import Character from './Character';
import BasicWand from '../weapons/BasicSword';

export default class Warlock extends Character {
    constructor(name: string) {
        super(name, Role.Warlock, new BasicWand());
    }
}
