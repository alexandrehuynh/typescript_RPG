export default interface IAttackMechanism {
  name: string;
  damagePoints: number;
  attack(): string;
}