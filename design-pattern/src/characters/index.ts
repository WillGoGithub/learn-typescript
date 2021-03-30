import Role from './Role';
import Character from './Character';
import Swordsman from './Swordsman';
import Warlock from './Warlock';

const swordsman = new Swordsman('Jack');
const warlock = new Warlock('Leon');
swordsman.introduce();
warlock.introduce();
swordsman.attack(warlock);
warlock.attack(swordsman);
