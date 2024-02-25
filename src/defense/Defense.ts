import { v4 as uuidv4 } from 'uuid';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';

export default class Defense implements IDefenseMechanism {
  readonly id: string;
  name: string;
  description: string;
  damagePoints: number; 

  constructor(name: string, damagePoints: number, description: string) {
    this.id = uuidv4(); // Unique identifier for each defense instance
    this.name = name;
    this.damagePoints = damagePoints;
    this.description = description;
  }

  defend(): string {
    // Implement the defense behavior based on the defense's properties
    return `${this.name} defends with ${this.damagePoints} protection, ${this.description}`;
  }
}
