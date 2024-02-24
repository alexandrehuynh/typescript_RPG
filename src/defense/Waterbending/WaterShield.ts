import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class WaterShield extends Defense implements IDefenseMechanism {
    constructor() {
        super("Water Shield", "Erect a barrier of swirling water to deflect attacks.");
    }

    defend(): string {
        return `${this.name} summons a swirling barrier of water around the bender, deflecting incoming attacks and protecting against harm.`;
    }
}