import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class RockBullets extends Offense implements IAttackMechanism {
    constructor() {
        super('Rock Bullets', 50, "Rapid-fire a barrage of rock bullets at high speed, capable of penetrating defenses.");
    }
}
