import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class Flight extends Defense implements IDefenseMechanism {
    constructor() {
        super("Flight", 70, "takes to the skies, evading ground-based attacks and gaining a tactical advantage.");
    }
}
