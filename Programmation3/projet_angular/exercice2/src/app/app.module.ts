import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { Page1Component } from './page1/page1.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { Page2Component } from './page2/page2.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeroComponent } from './hero/hero.component';
import { RechercheComponent } from './recherche/recherche.component';
import { Page3Component } from './page3/page3.component';
import { Hero2Component } from './hero2/hero2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    Page1Component,
    FicheProduitComponent,
    Page2Component,
    ListeProduitsComponent,
    CarouselComponent,
    HeroComponent,
    RechercheComponent,
    Page3Component,
    Hero2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
