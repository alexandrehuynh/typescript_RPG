import Defense from '../Defense';
import IDefenseMechanism from '../../interfaces/IDefenseMechanism';

export default class AvatarStateDefense extends Defense implements IDefenseMechanism {
    constructor() {
        super("Avatar State", "Utilize the Avatar State for unparalleled defense, drawing from the knowledge and power of all past Avatars.");
    }

    defend(): string {
        return `${this.name} surrounds the Avatar with a protective barrier of all four elements, deflecting and neutralizing incoming attacks.`;
    }
}