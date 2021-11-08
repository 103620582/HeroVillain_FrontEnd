import { Hero } from "./hero";
import { Villain } from "./villain";

export class Game {
  gameName: string;
  heroes: Hero[] = [];
  villains: Villain[] = [];

  constructor(_gameName: string) {
    this.gameName = _gameName;
    this.heroes = [];
    this.villains = [];
  }

  addHero(_HeroId: number, _HeroName: string, _DiceMin: number, _DiceMax: number, _UsesLeft) {
    this.heroes.push(new Hero(_HeroId, _HeroName, _DiceMin, _DiceMin, _UsesLeft))
  }

  addVillain(_villainId: number, _villainName, _hitPoints) {
    this.villains.push(new Villain(_villainId, _villainName, _hitPoints))
  }

}