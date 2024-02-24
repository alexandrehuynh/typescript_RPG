import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class MetalArmor extends Defense implements IDefenseMechanism {
    constructor() {
        super("Metal Armor", "Wrap metal around the body as armor.");
    }

    defend(): string {
        return `${this.name} forms a protective layer of metal armor, enhancing defense against physical and bending attacks.`;
    }
}