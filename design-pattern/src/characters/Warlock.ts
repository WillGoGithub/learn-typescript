import Role from './Role';
import Character from './Character';
import BasicWand from '../weapons/BasicSword';
import WarlockEquipmentFactory from '../equipments/WarlockEquipmentFactory';

export default class Warlock extends Character {
    constructor(name: string) {
        const SEF = new WarlockEquipmentFactory();

        super(name, Role.Warlock, SEF.createWeapon(), SEF.createArmour());
    }
}
