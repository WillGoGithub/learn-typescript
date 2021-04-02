import Attack from '../abilities/Attack';
import Character from '../characters/Character';
import Role from '../characters/Role';
import Equipment from '../equipments/Equipment';
import Equipments from '../equipments/Equipments';

export default abstract class Armour implements Equipment {
    abstract readonly name: string;
    abstract availableRoles: Role[];
    public type = Equipments.Armour;
}
