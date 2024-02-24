import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class SpiritualProjections extends Defense implements IDefenseMechanism {
    constructor() {
        super("Spiritual Projectionsd", "Project one's spirit to scout or escape physical danger.");
    }

    defend(): string {
        return `${this.name} separates the spirit from the body, allowing for reconnaissance and escape from physical confines.`;
    }
}