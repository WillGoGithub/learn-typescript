import EquipmentFactory from './EquipmentFactory';
import Armour from '../armours/Armour';
import Weapon from '../weapons/Weapon';
import BasicWand from '../weapons/BasicWand';
import BasicRobe from '../armours/BasicArmour';

class WarlockEquipmentFactory implements EquipmentFactory {
    public createWeapon(): Weapon {
        return new BasicWand();
    }

    public createArmour(): Armour {
        return new BasicRobe();
    }
}

export default WarlockEquipmentFactory;
