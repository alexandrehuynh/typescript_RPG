import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class ElectrifiedGloves extends Offense implements IAttackMechanism {
    constructor() {
        super('Electrified Gloves', 50, "Strikes with electrified gloves, delivering a high-voltage shock to opponents.");
    }
}
