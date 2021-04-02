import Equipments from './Equipments';
import Role from '../characters/Role';

export default interface Equipment {
    name: string;
    type: Equipments;
    availableRoles: Role[];
}
