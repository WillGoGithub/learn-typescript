import Role from '../characters/Role';
import Armour from './Armour';

export default class BasicArmour extends Armour {
    public readonly name = 'Basic Armour';
    public availableRoles = [Role.Swordsman, Role.Highwayman];
}
