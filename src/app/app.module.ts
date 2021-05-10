import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollSpyModule } from 'ngx-scrollspy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { LoanCalcComponent } from './loan-calc/loan-calc.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    HomeComponent,
    LoanCalcComponent,
    SliderComponent,
    SecondComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollSpyModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
