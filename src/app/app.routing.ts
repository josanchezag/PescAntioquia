import { Component, ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule, Router } from "@angular/router";



import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { ErrorComponent } from "./components/error/error.component";
import { MisionVisionComponent } from "./components/mision-vision/mision-vision.component";
import { TorneosComponent } from "./components/torneos/torneos.component";




const appRoutes: Routes=[
  {path: '', component: AcercaDeComponent},
  {path: 'mision-vision', component: MisionVisionComponent},
  {path: 'torneos', component: TorneosComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);

