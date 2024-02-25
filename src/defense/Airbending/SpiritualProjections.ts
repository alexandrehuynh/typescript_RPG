import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class SpiritualProjections extends Defense implements IDefenseMechanism {
    constructor() {
        super("Spiritual Projectionsd", 55, "separates the spirit from the body, allowing for reconnaissance and escape from physical confines.");
    }
}