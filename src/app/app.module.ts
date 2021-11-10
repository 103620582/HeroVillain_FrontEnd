import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroComponent } from './components/hero/hero.component';
import { VillainComponent } from './components/villain/villain.component';
import { GameComponent } from './components/game/game.component';
import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { Game } from './models/game';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule 
                ],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  HeroComponent, 
                  VillainComponent,
                  GameComponent,
                  AllHeroesComponent 
                ],
  bootstrap:    [ AppComponent 
                ]
})
export class AppModule { }
