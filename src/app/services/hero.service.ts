import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  readonly baseUrl: string = "https://localhost:5001/Game"
  readonly webUrl: string = "https://SwinJoy.mssql.somee.com"

  constructor(private _http: HttpClient) { }

  getHeroById(HeroId: number, HeroName: string, DiceMin: number, DiceMax: number, UsesLeft: number): Observable<Hero> {
    const url = this.webUrl + HeroId;

    return this._http.get<Hero>(url);
  }
}