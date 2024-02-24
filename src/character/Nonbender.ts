import Character from './Character';
import IAttackMechanism from '../interfaces/IAttackMechanism';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';

class NonBender extends Character {
  constructor(name: string, nation: string, offenseMoves: IAttackMechanism[], defenseMoves: IDefenseMechanism[]) {
    super(name, nation, "Non-Bender");
    this.offenseMoves = offenseMoves;
    this.defenseMoves = defenseMoves;
  }

  // Implement or override any NonBender-specific methods
}

export default NonBender;
