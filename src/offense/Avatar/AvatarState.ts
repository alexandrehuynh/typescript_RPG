import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class AvatarStateOffense extends Offense implements IAttackMechanism {
    constructor() {
        super('Avatar State', 100, "Enter the Avatar State to harnesses the power of all previous Avatars, launching a devastating multi-elemental attack.");
    }
}
