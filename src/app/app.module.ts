import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FIDERatingChangeSingleComponent } from './components/FIDERatingChangeSingle/fiderating-change-single.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KatexModule } from 'ng-katex';

import { FIDERatingChangeSingleService } from './services/FIDERatingChangeSingle/fiderating-change-single.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FIDERatingInitComponent } from './components/FIDERatingInit/fiderating-init.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FIDERatingChangeSingleComponent,
    NavbarComponent,
    FIDERatingInitComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    KatexModule
  ],
  providers: [
    FIDERatingChangeSingleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
