export default interface IDefenseMechanism {
  name: string;
  damagePoints: number; 
  defend(): string;
}