import { Component, OnInit } from '@angular/core';
import { IAe } from 'interface/ae';
import { IBtc } from 'interface/btc';
import { IEther } from 'interface/ether';
import { IEur } from 'interface/eur';
import { interval, mergeMap } from 'rxjs';
import { AeService } from 'src/app/shared/ae.service';
import { BtcService } from 'src/app/shared/btc.service';
import { EtherService } from 'src/app/shared/ether.service';
import { EurService } from './eur.service';

@Component({
  selector: 'app-eur',
  templateUrl: './eur.component.html',
  styleUrls: ['./eur.component.css']
})
export class EurComponent implements OnInit {

  constructor( private eurPrice: EurService,
    private ehterPrice: EtherService,
    private btcPrice: BtcService,
    private aePrice: AeService) { }

    eur!: IEur;
    ether!: IEther;
    btc!: IBtc;
    ae!: IAe;

  ngOnInit(): void {
    this.eurPrice.getEurPrice().subscribe(data => {
      this.eur = data;
    })

    this.ehterPrice.getEtherPrice().subscribe(data => {
      this.ether = data;
    })

    this.btcPrice.getBtcPrice().subscribe(data => {
      this.btc = data;
    })

    this.aePrice.getAePrice().subscribe(data => {
      this.ae = data;
    })

    const eurObs$ = interval(5000).pipe(
      mergeMap(() => this.eurPrice.getEurPrice()) 
    ).subscribe(data => {
      this.eur = data;
    });

    const ehterObs$ = interval(5000).pipe(
      mergeMap(() => this.ehterPrice.getEtherPrice())
    ).subscribe(data => {
      this.ether = data;
    });

    const btcObs$ = interval(5000).pipe(
      mergeMap(() => this.btcPrice.getBtcPrice())
    ).subscribe(data => {
      this.btc = data;
    });

    const aeObs$ = interval(5000).pipe(
      mergeMap(() => this.aePrice.getAePrice())
    ).subscribe(data => {
      this.ae = data;
    })
  }

}
