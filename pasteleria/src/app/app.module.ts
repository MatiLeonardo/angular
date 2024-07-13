import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeListComponent } from './cake-list/cake-list.component';

import { FormsModule } from '@angular/forms';
import { PasteleriaAboutComponent } from './pasteleria-about/pasteleria-about.component';
import { PasteleriaCakesComponent } from './pasteleria-cakes/pasteleria-cakes.component';
import { CartComponent } from './cart/cart.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CakeListComponent,
    PasteleriaAboutComponent,
    PasteleriaCakesComponent,
    CartComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
