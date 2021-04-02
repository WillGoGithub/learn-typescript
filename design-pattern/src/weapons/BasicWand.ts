import Weapon from './Weapon';
import Role from '../characters/Role';
import MagicAttack from '../abilities/MagicAttack';

export default class BasicWand extends Weapon {
    public readonly name = 'Basic Wand';
    public availableRoles = [Role.Warlock];
    public attackStrategy = new MagicAttack();
}
