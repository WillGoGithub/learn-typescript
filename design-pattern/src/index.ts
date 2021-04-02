import Swordsman from './characters/Swordsman';
import Warlock from './characters/Warlock';

import Weapons from './weapons/Weapons';
import WeaponFactory from './weapons/WeaponFactory';

const swordsman = new Swordsman('Jack');
const warlock = new Warlock('Leon');
const weaponFactory = new WeaponFactory();

swordsman.introduce();
warlock.introduce();

swordsman.attack(warlock);
warlock.attack(swordsman);

const dagger = weaponFactory.createWeapon(Weapons.Dagger);
swordsman.equip(dagger);
swordsman.attack(warlock);

const basicWand = weaponFactory.createWeapon(Weapons.BasicWand);

try {
    // swordsman.equip(basicWand);
} catch (err) {
    console.log(err);
}
