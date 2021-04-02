import Role from '../characters/Role';
import Armour from './Armour';

export default class BasicRobe extends Armour {
    public readonly name = 'Basic Robe';
    public availableRoles = [Role.Warlock];
}
