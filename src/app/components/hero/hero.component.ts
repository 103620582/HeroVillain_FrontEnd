import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private _heroService: HeroService) {
    this._heroService.getHeroById().subscribe((heroes) => {
      this.hero = Hero();
      console.log(this.hero);
    })
  }

  ngOnInit() {
    
  }

}