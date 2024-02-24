import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class Distractions extends Defense implements IDefenseMechanism {
    constructor() {
        super("Distractions", "Use clever distractions to evade attacks or escape.");
    }

    defend(): string {
        return `${this.name} creates a momentary distraction, providing an opportunity to dodge or counter.`;
    }
}