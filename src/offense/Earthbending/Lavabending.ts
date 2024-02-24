import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class Lavabending extends Offense implements IAttackMechanism {
    constructor() {
        super('Lavabending', 70, "Creates and manipulates streams of lava, overwhelming opponents with molten rock.");
    }
}
