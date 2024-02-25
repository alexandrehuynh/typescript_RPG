import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class FireSheild extends Defense implements IDefenseMechanism {
    constructor() {
        super("Fire Shield", 70, "encircles oneself with a shield of fire, deterring close combat and burning incoming projectiles");
    }
}