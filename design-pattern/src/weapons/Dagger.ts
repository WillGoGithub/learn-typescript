import Weapon from './Weapon';
import Role from '../characters/Role';
import MeleeAttack from '../abilities/MeleeAttack';

export default class BasicSword implements Weapon {
    public readonly name = 'Basic Sword';

    public attackStrategy = new MeleeAttack();

    public availableRoles = [Role.Swordsman, Role.Highwayman];
}
