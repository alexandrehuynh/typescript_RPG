import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class EarthWall extends Defense implements IDefenseMechanism {
    constructor() {
        super("Earth Wall", "Quickly raise a wall of earth for protection.");
    }

    defend(): string {
        return `${this.name} summons a solid wall of earth to block incoming attacks.`;
    }
}