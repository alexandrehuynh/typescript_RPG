import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class Backup extends Defense implements IDefenseMechanism {
    constructor() {
        super("Backup", "Call in backup from allies for additional support and defense.");
    }

    defend(): string {
        return `${this.name} summons allies for assistance, bolstering defense and counterattack capabilities.`;
    }
}