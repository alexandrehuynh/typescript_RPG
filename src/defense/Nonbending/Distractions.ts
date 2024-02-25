import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class Distractions extends Defense implements IDefenseMechanism {
    constructor() {
        super("Distractions", 45, "creates a momentary distraction, providing an opportunity to dodge or counter.");
    }
}