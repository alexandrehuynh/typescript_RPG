import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class VacuumSphere extends Offense implements IAttackMechanism {
    constructor() {
        super('Vacuum Sphere', 65, "Generates a sphere of vacuum around the target, disrupting their balance and breathing to incapacitate opponents.");
    }
}
