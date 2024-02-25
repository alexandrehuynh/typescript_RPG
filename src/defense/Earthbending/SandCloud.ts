import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class SandCloud extends Defense implements IDefenseMechanism {
    constructor() {
        super("Sand Cloud", 60, "engulfs the area in a cloud of sand, impairing visibility and disorienting foes.");
    }
}