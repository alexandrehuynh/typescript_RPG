import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class Bloodbending extends Offense implements IAttackMechanism {
    constructor() {
        super('Bloodbending', 80, "Manipulates the water in an opponent's body, controlling them against their will.");
    }
}