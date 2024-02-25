import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class EarthWall extends Defense implements IDefenseMechanism {
    constructor() {
        super("Earth Wall", 80, "summons a solid wall of earth to block incoming attacks.");
    }
}