import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ErrorComponent } from './components/error/error.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';
import { TorneosComponent } from './components/torneos/torneos.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    ErrorComponent,
    MisionVisionComponent,
    TorneosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
