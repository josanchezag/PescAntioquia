import { Component, ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule, Router } from "@angular/router";



import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { ErrorComponent } from "./components/error/error.component";




const appRoutes: Routes=[
  {path: '', component: AcercaDeComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);

