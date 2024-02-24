import Character from './Character';
import IAttackMechanism from '../interfaces/IAttackMechanism';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';

class Firebender extends Character {
  constructor(name: string, nation: string, offenseMoves: IAttackMechanism[], defenseMoves: IDefenseMechanism[]) {
    super(name, nation, "Firebending");
    this.offenseMoves = offenseMoves;
    this.defenseMoves = defenseMoves;
  }

  // specific method for Firebenders

  // Add additional specific methods as needed
}

export default Firebender;
