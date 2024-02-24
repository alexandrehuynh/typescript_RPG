import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class ChiBlocking extends Defense implements IDefenseMechanism {
    constructor() {
        super("Chi Blocking", "A martial arts technique that blocks an opponent's chi flow to temporarily disable their bending.");
    }

    defend(): string {
        return `${this.name} employs precise strikes to chi points, temporarily paralyzing opponents and neutralizing bending abilities.`;
    }
}