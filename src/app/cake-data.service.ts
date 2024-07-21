import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Cake } from './cake-list/cake';

const URL = 'https://6691de7426c2a69f6e90e955.mockapi.io/cakes';
@Injectable({
  providedIn: 'root'
})
export class CakeDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Cake[]> {
    return this.http.get<Cake[]>(URL)
      .pipe(
        tap((cakes: Cake[]) => cakes.forEach(cake => cake.porcion = 0))
      );
  }
}
