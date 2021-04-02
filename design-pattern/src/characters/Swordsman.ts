import Role from './Role';
import Character from './Character';
import BasicSword from '../weapons/Dagger';
import SwordsmanEquipmentFactory from '../equipments/SwordsmanEquipmentFactory';

export default class Swordsman extends Character {
    constructor(name: string) {
        const SEF = new SwordsmanEquipmentFactory();

        super(name, Role.Swordsman, SEF.createWeapon(), SEF.createArmour());
    }
}
