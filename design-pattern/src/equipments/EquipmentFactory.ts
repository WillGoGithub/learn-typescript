import Armour from '../armours/Armour';
import Weapon from '../weapons/Weapon';

export default interface EquipmentFactory {
    createWeapon(): Weapon;
    createArmour(): Armour;
}
