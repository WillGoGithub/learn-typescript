import Weapon from './Weapon';
import Role from '../characters/Role';
import MeleeAttack from '../abilities/MeleeAttack';

export default class BasicSword extends Weapon {
    public readonly name = 'Basic Sword';
    public availableRoles = [Role.Swordsman, Role.Highwayman];
    public attackStrategy = new MeleeAttack();
}
