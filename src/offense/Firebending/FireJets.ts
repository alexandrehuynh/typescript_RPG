import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class FireJets extends Offense implements IAttackMechanism {
    constructor() {
        super('Fire Jets', 60, "Unleashes continuous streams of fire from any extremities, scorching enemies within range.");
    }
}
