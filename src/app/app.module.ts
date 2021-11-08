import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroComponent } from './components/hero/hero.component';
import { VillainComponent } from './components/villain/villain.component';
import { GameComponent } from './components/game/game.component';
import { Game } from './models/game';

@NgModule({
  imports:      [ BrowserModule, FormsModule 
                ],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  HeroComponent, 
                  VillainComponent,
                  GameComponent 
                ],
  bootstrap:    [ AppComponent 
                ]
})
export class AppModule { }
