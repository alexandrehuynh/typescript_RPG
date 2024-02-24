import { v4 as uuidv4 } from 'uuid';
import IAttackMechanism from '../interfaces/IAttackMechanism';

export default class Offense implements IAttackMechanism {
  readonly id: string;
  name: string;
  description: string;
  damagePoints: number;

  constructor(name: string, damagePoints: number, description: string) {
    this.id = uuidv4(); // Unique identifier for each offense instance
    this.name = name;
    this.damagePoints = damagePoints;
    this.description = description;
  }

  attack(): string {
    // Implement the attack behavior based on the offense's properties
    return `${this.name} attacks with ${this.damagePoints} damage points, ${this.description}`;
  }
}
