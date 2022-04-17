import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgnComponent } from './bgn/bgn.component';
import { EurComponent } from './eur/eur.component';
import { GbpComponent } from './gbp/gbp.component';



@NgModule({
  declarations: [
    BgnComponent,
    EurComponent,
    GbpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CurrencyModule { }
