import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IAe } from 'interface/ae';
import { IBgn } from 'interface/bgn';
import { IBtc } from 'interface/btc';
import { IEther } from 'interface/ether';
import { interval, mergeMap } from 'rxjs';
import { AeService } from 'src/app/shared/ae.service';
import { BtcService } from 'src/app/shared/btc.service';
import { EtherService } from 'src/app/shared/ether.service';
import { BgnService } from './bgn.service';

@Component({
  selector: 'app-bgn',
  templateUrl: './bgn.component.html',
  styleUrls: ['./bgn.component.css']
})
export class BgnComponent implements OnInit {

  constructor(
    private bgnPrice: BgnService,
    private ehterPrice: EtherService,
    private btcPrice: BtcService,
    private aePrice: AeService,
    private title: Title) { }

    bgn!: IBgn;
    ether!: IEther;
    btc!: IBtc;
    ae!: IAe;

  ngOnInit(): void {

    this.title.setTitle('BGN')

    this.bgnPrice.getBgnPrice().subscribe(data => {
      this.bgn = data;
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


    const bgnObs$ = interval(5000).pipe(
      mergeMap(() => this.bgnPrice.getBgnPrice()) 
    ).subscribe(data => {
      this.bgn = data;
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
