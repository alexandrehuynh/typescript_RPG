import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class SeismicSense extends Offense implements IAttackMechanism {
    constructor() {
        super('Seismic Sense', 40, "Senses and anticipates opponent's moves by detecting vibrations through the ground.");
    }
}
