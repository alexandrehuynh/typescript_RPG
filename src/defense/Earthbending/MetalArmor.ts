import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class MetalArmor extends Defense implements IDefenseMechanism {
    constructor() {
        super("Metal Armor", 75, "forms a protective layer of metal armor, enhancing defense against physical and bending attacks.");
    }
}