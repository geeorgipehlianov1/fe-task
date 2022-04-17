import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBgn } from 'interface/bgn';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BgnService {

  constructor(private http: HttpClient) { }

  getBgnPrice(): Observable<IBgn> {
    return this.http.get<IBgn>('http://localhost:8080/fiat/bgn')
  }
}
