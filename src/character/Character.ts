import IAttackMechanism from '../interfaces/IAttackMechanism';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';

class Character {
  name: string;
  private _nation: string;
  bendingStyle: string;
  offenseMoves: IAttackMechanism[] = [];
  defenseMoves: IDefenseMechanism[] = [];
  experiencePoints: number = 0;

  constructor(name: string, nation: string, bendingStyle: string) {
    this.name = name;
    this._nation = nation;
    this.bendingStyle = bendingStyle;
  }

  get nation(): string {
    return this._nation;
  }

  set nation(value: string) {
    const validNations = ["Earth Kingdom", "Water Tribes", "Air Temples", "Fire Nation", "Republic City"];
    if (validNations.includes(value)) {
      this._nation = value;
    } else {
      throw new Error("Invalid nation.");
    }
  }

  learnOffenseMove(move: IAttackMechanism): void {
    this.offenseMoves.push(move);
  }

  forgetOffenseMove(moveName: string): void {
    this.offenseMoves = this.offenseMoves.filter(move => move.name !== moveName);
  }

  learnDefenseMove(move: IDefenseMechanism): void {
    this.defenseMoves.push(move);
  }

  forgetDefenseMove(moveName: string): void {
    this.defenseMoves = this.defenseMoves.filter(move => move.name !== moveName);
  }

  attack(): void {
    // Implementation depends on selected offense move
    console.log(`${this.name} attacks with ${this.offenseMoves.map(move => move.attack()).join(", ")}`);
  }

  defend(): void {
    // Implementation depends on selected defense move
    console.log(`${this.name} defends with ${this.defenseMoves.map(move => move.defend()).join(", ")}`);
  }
}

export default Character;
