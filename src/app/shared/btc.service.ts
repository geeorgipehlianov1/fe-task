import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBtc } from 'interface/btc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BtcService {

  constructor(private http: HttpClient) { }

  getBtcPrice(): Observable<IBtc> {
    return this.http.get<IBtc>('http://localhost:8080/price/btc')
  }
}
