import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IAe } from 'interface/ae';
import { IBtc } from 'interface/btc';
import { IEther } from 'interface/ether';
import { IGbp } from 'interface/gbp';
import { interval, mergeMap } from 'rxjs';
import { AeService } from 'src/app/shared/ae.service';
import { BtcService } from 'src/app/shared/btc.service';
import { EtherService } from 'src/app/shared/ether.service';
import { GbpService } from './gbp.service';

@Component({
  selector: 'app-gbp',
  templateUrl: './gbp.component.html',
  styleUrls: ['./gbp.component.css']
})
export class GbpComponent implements OnInit {

  constructor( private gbpPrice: GbpService,
    private ehterPrice: EtherService,
    private btcPrice: BtcService,
    private aePrice: AeService,
    private title: Title) { }

    gbp!: IGbp;
    ether!: IEther;
    btc!: IBtc;
    ae!: IAe;
    
  ngOnInit(): void {


    this.title.setTitle('GBP')

    this.gbpPrice.getGbpPrice().subscribe(data => {
      this.gbp = data;
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

    const gbpObs$ = interval(5000).pipe(
      mergeMap(() => this.gbpPrice.getGbpPrice()) 
    ).subscribe(data => {
      this.gbp = data;
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
