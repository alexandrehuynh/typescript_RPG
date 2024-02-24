import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class AirShield extends Defense implements IDefenseMechanism {
    constructor() {
        super("Air Shield", "Surround oneself with a protective sphere of air to deflect attacks.");
    }

    defend(): string {
        return `${this.name} forms a swirling dome of air around the bender, offering protection from all directions.`;
    }
}
