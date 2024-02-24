import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class AirSlices extends Offense implements IAttackMechanism {
    constructor() {
        super('Air Slices', 45, "Sends out razor-sharp focused slices of air, cutting through obstacles and enemies alike.");
    }
}

