import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class Flight extends Defense implements IDefenseMechanism {
    constructor() {
        super("Flight", "Use airbending to evade attacks through flight.");
    }

    defend(): string {
        return `${this.name} takes to the skies, evading ground-based attacks and gaining a tactical advantage.`;
    }
}
