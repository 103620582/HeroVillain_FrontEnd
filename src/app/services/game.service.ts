import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  readonly baseUrl: string = "https://localhost:5001"

  constructor(private _http: HttpClient) { }



}

