import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class SpiritBending extends Defense implements IDefenseMechanism {
    constructor() {
        super("Spirit Bending", "Harmonize or disrupt spiritual energy, used defensively to neutralize spiritual threats.");
    }

    defend(): string {
        return `${this.name} uses waterbending to harmonize or disrupt spiritual energy, offering protection against spiritual threats.`;
    }
}