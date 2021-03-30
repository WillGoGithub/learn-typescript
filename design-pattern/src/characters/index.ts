import Role from './Role';
import Character from './Character';
import Swordsman from './Swordsman';

const swordsman = new Character('Jack', Role.Swordsman);
const warlock = new Character('Leon', Role.Warlock);
swordsman.introduce();
warlock.introduce();
swordsman.attack(warlock);
warlock.attack(swordsman);
