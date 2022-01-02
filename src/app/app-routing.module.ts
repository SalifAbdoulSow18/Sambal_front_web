import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {MapsComponent} from './accueil/maps/maps.component';
import {ListBenneComponent} from './accueil/benne/list-benne/list-benne.component';
import {AddBenneComponent} from './accueil/benne/add-benne/add-benne.component';
import {SensibilisationComponent} from './accueil/sensibilisation/sensibilisation.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, children: [
      { path: '', component: MapsComponent },
      { path: 'list-benne', component: ListBenneComponent },
      { path: 'add-benne', component: AddBenneComponent },
      { path: 'sensibilisation', component: SensibilisationComponent}
    ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
