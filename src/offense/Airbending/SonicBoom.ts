import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class SonicBoom extends Offense implements IAttackMechanism {
    constructor() {
        super('Sonic Boom', 75, "Generate a powerful shockwave with a swift airbending motion, knocking back opponents and causing structural damage.");
    }
}
