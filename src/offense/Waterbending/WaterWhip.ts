import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class WaterWhip extends Offense implements IAttackMechanism {
    constructor() {
        super('Water Whip', 30, "Creates a flexible, powerful lash of water to strike opponents from a distance.");
    }
}
