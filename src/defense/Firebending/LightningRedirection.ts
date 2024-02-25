import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class LightningRedirection extends Defense implements IDefenseMechanism {
    constructor() {
        super("Lightning Redirection", 85, "channels and redirects the flow of lightning, safely away from oneself and potentially back at the attacker.");
    }
}