import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class FireSheild extends Defense implements IDefenseMechanism {
    constructor() {
        super("Fire Shield", "Create a protective barrier of intense heat and flames.");
    }

    defend(): string {
        return `${this.name} encircles oneself with a shield of fire, deterring close combat and burning incoming projectiles.`;
    }
}