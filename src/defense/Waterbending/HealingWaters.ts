import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class HealingWaters extends Defense implements IDefenseMechanism {
    constructor() {
        super("Healing Waters", 65, "channels healing energies through water, mending wounds and restoring vitality.");
    }
}