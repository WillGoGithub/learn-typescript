import Weapon from './Weapon';
import Role from '../characters/Role';
import MagicAttack from '../abilities/MagicAttack';

export default class BasicWand implements Weapon {
    public readonly name = 'Basic Wand';

    public attackStrategy = new MagicAttack();

    public availableRoles = [Role.Warlock];
}
