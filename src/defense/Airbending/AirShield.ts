import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class AirShield extends Defense implements IDefenseMechanism {
    constructor() {
        super("Air Shield", 65, "forms a swirling dome of air around the bender, offering protection from all directions.");
    }

}