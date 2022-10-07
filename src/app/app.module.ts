import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing,appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [AppComponent, AcercaDeComponent, ErrorComponent],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
