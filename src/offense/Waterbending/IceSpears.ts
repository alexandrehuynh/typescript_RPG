import Offense from '../Offense';
import IAttackMechanism from '../../interfaces/IAttackMechanism';

export default class IceSpears extends Offense implements IAttackMechanism {
    constructor() {
        super('Ice Spears', 50, "Launches sharp projectiles of ice towards enemies, capable of piercing through defenses.");
    }
}
