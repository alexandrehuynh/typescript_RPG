import IAttackMechanism from './interfaces/IAttackMechanism';
import IDefenseMechanism from './interfaces/IDefenseMechanism';

export function isAttackMechanism(move: IAttackMechanism | IDefenseMechanism): move is IAttackMechanism {
    return 'attack' in move;
}

export function isDefenseMechanism(move: IAttackMechanism | IDefenseMechanism): move is IDefenseMechanism {
    return 'defend' in move;
}
