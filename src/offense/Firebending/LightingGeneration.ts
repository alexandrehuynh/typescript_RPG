import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class LightingGeneration extends Offense implements IAttackMechanism {
    constructor() {
        super('Lighting Generation', 80, "Generates a bolt of lightning, striking with precision and deadly force.");
    }
}
