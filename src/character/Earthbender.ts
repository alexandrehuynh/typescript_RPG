import Character from './Character';
import IAttackMechanism from '../interfaces/IAttackMechanism';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';

class Earthbender extends Character {
  constructor(name: string, nation: string, offenseMoves: IAttackMechanism[], defenseMoves: IDefenseMechanism[]) {
    super(name, nation, "Earthbending");
    this.offenseMoves = offenseMoves;
    this.defenseMoves = defenseMoves;
  }

  // specific method for Earthbender

  // Add additional specific methods as needed

}

export default Earthbender;
