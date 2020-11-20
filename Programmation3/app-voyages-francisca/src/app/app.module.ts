import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavComponent } from './nav/nav.component';

import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { VedettePipe } from './vedette.pipe';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { ListeForfaitsMiniComponent } from './liste-forfaits-mini/liste-forfaits-mini.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormGestionForfaitsComponent } from './form-gestion-forfaits/form-gestion-forfaits.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListeForfaitsComponent,
    ForfaitComponent,
    AccueilComponent,
    NavComponent,
    VedettePipe,
    ForfaitMiniComponent,
    ListeForfaitsMiniComponent,
    SearchFormComponent,
    FormGestionForfaitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
