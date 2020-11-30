import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';

import { FooterComponent } from './footer/footer.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavComponent } from './nav/nav.component';
import { VedettePipe } from './vedette.pipe';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { ListeForfaitsMiniComponent } from './liste-forfaits-mini/liste-forfaits-mini.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormGestionForfaitsComponent } from './form-gestion-forfaits/form-gestion-forfaits.component';
import { ForfaitsComponent } from './forfaits/forfaits.component';
import { RatingsPipe } from './ratings.pipe';

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
    ForfaitsComponent,
    RatingsPipe,

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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSliderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
