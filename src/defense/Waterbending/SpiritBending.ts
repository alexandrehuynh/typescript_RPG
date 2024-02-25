import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class SpiritBending extends Defense implements IDefenseMechanism {
    constructor() {
        super("Spirit Bending", 70, "uses waterbending to harmonize or disrupt spiritual energy, offering protection against spiritual threats.");
    }
}