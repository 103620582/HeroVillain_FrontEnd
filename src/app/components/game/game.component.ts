import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Game } from '../../models/game';
import { Hero } from '../../models/hero';
import { Villain } from '../../models/villain';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @ViewChild('heroDisp') heroDisp: ElementRef;

  game: Game = new Game("Let's Fight");
  hero: Hero = new Hero(1, "Tupac", 10, 20, 10);
  villain: Villain = new Villain(3, "Trump", 2);


  constructor() { }

  ngOnInit() {
  }

  // selectHero(event) {
  //   const 
  // }

}