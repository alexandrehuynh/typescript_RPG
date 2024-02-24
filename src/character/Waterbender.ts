import Character from './Character';
import IAttackMechanism from '../interfaces/IAttackMechanism';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';

class Waterbender extends Character {
  constructor(name: string, nation: string, offenseMoves: IAttackMechanism[], defenseMoves: IDefenseMechanism[]) {
    super(name, nation, "Waterbending");
    this.offenseMoves = offenseMoves;
    this.defenseMoves = defenseMoves;
  }

  // specific method for Waterbenders

  // Add additional specific methods as needed
}

export default Waterbender;
