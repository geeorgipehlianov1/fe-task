import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BgnComponent } from './currency/bgn/bgn.component';
import { EurComponent } from './currency/eur/eur.component';
import { GbpComponent } from './currency/gbp/gbp.component';

const routes: Routes = [
  {
    path: 'BGN',
    component: BgnComponent,
  },
  {
    path: 'EUR',
    component: EurComponent,
  },
  {
    path: 'GBP',
    component: GbpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
