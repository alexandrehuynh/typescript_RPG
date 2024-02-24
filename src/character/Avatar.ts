import Character from './Character';
import IAttackMechanism from '../interfaces/IAttackMechanism';
import IDefenseMechanism from '../interfaces/IDefenseMechanism';

class Avatar extends Character {
  private static instance: Avatar | null = null;

  private constructor(name: string, nation: string, bendingStyle: string, offenseMoves: IAttackMechanism[], defenseMoves: IDefenseMechanism[]) {
    super(name, nation, bendingStyle);
    this.offenseMoves = offenseMoves;
    this.defenseMoves = defenseMoves;
  }

  public static getInstance(name: string, nation: string, bendingStyle: string, offenseMoves: IAttackMechanism[], defenseMoves: IDefenseMechanism[]): Avatar {
    if (!Avatar.instance) {
      Avatar.instance = new Avatar(name, nation, bendingStyle, offenseMoves, defenseMoves);
    } else {
      console.error("There can only be one Avatar.");
    }
    return Avatar.instance;
  }

  // Implement or override any methods specific to the Avatar
}

export default Avatar;
