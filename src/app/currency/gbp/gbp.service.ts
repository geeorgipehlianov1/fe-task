import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGbp } from 'interface/gbp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GbpService {

  constructor(private http: HttpClient) { }

  getGbpPrice(): Observable<IGbp> {
    return this.http.get<IGbp>('http://localhost:8080/fiat/gbp')
  }
}
