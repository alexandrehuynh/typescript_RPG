import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class ChiBlocking extends Defense implements IDefenseMechanism {
    constructor() {
        super("Chi Blocking", 65, "employs precise strikes to chi points, temporarily paralyzing opponents and neutralizing bending abilities.");
    }
}