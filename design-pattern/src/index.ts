import Swordsman from './characters/Swordsman';
import Warlock from './characters/Warlock';
import Dagger from './weapons/Dagger';
import BasicWand from './weapons/BasicSword';

const swordsman = new Swordsman('Jack');
const warlock = new Warlock('Leon');

swordsman.introduce();
warlock.introduce();

swordsman.attack(warlock);
warlock.attack(swordsman);

swordsman.equip(new Dagger());

swordsman.attack(warlock);

try {
    swordsman.equip(new BasicWand());
} catch (err) {
    console.log(err);
}
