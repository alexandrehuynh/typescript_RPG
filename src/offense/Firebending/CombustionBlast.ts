import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class CombustionBlast extends Offense implements IAttackMechanism {
    constructor() {
        super('Combustion Blast', 90, "Concentrates energy into a single point, resulting in a devastating explosion on impact.");
    }
}