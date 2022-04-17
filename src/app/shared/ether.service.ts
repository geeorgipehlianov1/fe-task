import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEther } from 'interface/ether';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtherService {

  constructor(private http: HttpClient) { }

  getEtherPrice(): Observable<IEther> {
    return this.http.get<IEther>('http://localhost:8080/price/eth')
  }
}
