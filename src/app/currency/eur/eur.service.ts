import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEur } from 'interface/eur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EurService {

  constructor(private http: HttpClient) { }

  getEurPrice(): Observable<IEur> {
    return this.http.get<IEur>('http://localhost:8080/fiat/eur')
  }
}
