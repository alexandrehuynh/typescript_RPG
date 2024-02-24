import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class HealingWaters extends Defense implements IDefenseMechanism {
    constructor() {
        super("Healing Waters", "Use water to heal injuries, applicable in and out of combat.");
    }

    defend(): string {
        return `${this.name} channels healing energies through water, mending wounds and restoring vitality.`;
    }
}