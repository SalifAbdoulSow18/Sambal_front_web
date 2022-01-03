import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { MapsComponent } from './accueil/maps/maps.component';
import { AddBenneComponent } from './accueil/benne/add-benne/add-benne.component';
import { ListBenneComponent } from './accueil/benne/list-benne/list-benne.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SensibilisationComponent } from './accueil/sensibilisation/sensibilisation.component';
import { AddOffreComponent } from './accueil/offres/add-offre/add-offre.component';
import { ListOffreComponent } from './accueil/offres/list-offre/list-offre.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    MapsComponent,
    AddBenneComponent,
    ListBenneComponent,
    SensibilisationComponent,
    AddOffreComponent,
    ListOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
