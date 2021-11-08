export class Villain {
  VillainId: number;
  VillainName: string;
  HitPoints: number;

  constructor(_villainId: number, _villainName: string, _hitPoints: number) {
    this.VillainId = _villainId;
    this.VillainName = _villainName;
    this.HitPoints = _hitPoints;
  }

  attack(): void {
    
    // * generate random number 
    
    // this.HitPoints = ;
  }
}