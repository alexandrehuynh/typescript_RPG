import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class HeatControl extends Defense implements IDefenseMechanism {
    constructor() {
        super("Heat Control", 60, "controls the ambient heat to nullify fire-based attacks and reduce their damage.");
    }
}