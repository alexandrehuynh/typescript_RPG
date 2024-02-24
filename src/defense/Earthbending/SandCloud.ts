import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class SandCloud extends Defense implements IDefenseMechanism {
    constructor() {
        super("Sand Cloud", "Create a blinding, disorienting cloud of sand.");
    }

    defend(): string {
        return `${this.name} engulfs the area in a cloud of sand, impairing visibility and disorienting foes.`;
    }
}