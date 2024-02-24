import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class MechaSuit extends Offense implements IAttackMechanism {
    constructor() {
        super('Mecha Suit', 70, "Unleashes the full firepower of the mecha suit, targeting opponents with electric shocker and grappling cables.");
    }
}
