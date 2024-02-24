import Character from './Character';
import IAttackMechanism from '../interfaces/IAttackMechanism';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';

class Airbender extends Character {
  constructor(name: string, nation: string, offenseMoves: IAttackMechanism[], defenseMoves: IDefenseMechanism[]) {
    super(name, nation, "Airbending");
    this.offenseMoves = offenseMoves;
    this.defenseMoves = defenseMoves;
  }

  // specific method for Airbenders

  // Add additional specific methods as needed
}

export default Airbender;
