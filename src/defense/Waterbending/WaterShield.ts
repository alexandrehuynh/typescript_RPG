import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class WaterShield extends Defense implements IDefenseMechanism {
    constructor() {
        super("Water Shield", 75, "summons a swirling barrier of water around the bender, deflecting incoming attacks and protecting against harm.");
    }
}