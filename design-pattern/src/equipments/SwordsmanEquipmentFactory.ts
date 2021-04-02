import EquipmentFactory from './EquipmentFactory';
import BasicSword from '../weapons/BasicSword';
import BasicArmour from '../armours/BasicArmour';
import Armour from '../armours/Armour';
import Weapon from '../weapons/Weapon';

class SwordsmanEquipmentFactory implements EquipmentFactory {
    public createWeapon(): Weapon {
        return new BasicSword();
    }

    public createArmour(): Armour {
        return new BasicArmour();
    }
}

export default SwordsmanEquipmentFactory;
