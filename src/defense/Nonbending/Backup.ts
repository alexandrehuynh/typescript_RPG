import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class Backup extends Defense implements IDefenseMechanism {
    constructor() {
        super("Backup", 60, "summons allies for assistance, bolstering defense and counterattack capabilities.");
    }
}