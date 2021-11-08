export class Hero {
  HeroId: number;
  HeroName: string;
  DiceMin: number;
  DiceMax: number;
  UsesLeft: number;

  constructor(_HeroId: number, _HeroName: string, _DiceMin: number, _DiceMax: number, _UsesLeft: number) {
    this.HeroId = _HeroId;
    this.HeroName = _HeroName;
    this.DiceMin = _DiceMin;
    this.DiceMax = _DiceMax;
    this.UsesLeft = _UsesLeft;
  }

  
}