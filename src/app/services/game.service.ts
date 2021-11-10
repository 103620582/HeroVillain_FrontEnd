import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  readonly baseUrl: string = "https://localhost:5001/Game"
  readonly webUrl: string = "https://SwinJoy.mssql.somee.com"

  constructor(private _http: HttpClient) { }

  // getGame()
}