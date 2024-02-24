import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class HeatControl extends Defense implements IDefenseMechanism {
    constructor() {
        super("Heat Control", "Absorb and dissipate heat from an attack, reducing its impact.");
    }

    defend(): string {
        return `${this.name} controls the ambient heat to nullify fire-based attacks and reduce their damage.`;
    }
}