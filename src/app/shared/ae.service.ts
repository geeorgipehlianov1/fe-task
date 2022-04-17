import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAe } from 'interface/ae';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AeService {

  constructor(private http: HttpClient) { }

  getAePrice(): Observable<IAe> {
    return this.http.get<IAe>('http://localhost:8080/price/ae')
  }
}
