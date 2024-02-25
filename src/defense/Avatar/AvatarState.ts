import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class AvatarStateDefense extends Defense implements IDefenseMechanism {
    constructor() {
        super("Avatar State", 100, "surrounds the Avatar with a protective barrier of all four elements, deflecting and neutralizing incoming attacks.");
    }
}