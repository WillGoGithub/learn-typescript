import Weapon from './Weapon';
import StabAttack from '../abilities/StabAttack';

export default class Dagger extends Weapon {
    public readonly name = 'Dagger';
    public availableRoles = [];
    public attackStrategy = new StabAttack();
}
