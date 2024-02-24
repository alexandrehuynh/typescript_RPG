import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class SwordsAndBoomerang extends Offense implements IAttackMechanism {
    constructor() {
        super('Swords and Boomerang', 45, 'Masterfully engages with swords for close combat and a trusty boomerang for timely attacks.');
    }
}
