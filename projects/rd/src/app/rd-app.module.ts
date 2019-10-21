import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RdExternalAppRoutingModule } from './rd-app-routing.module';
import { RdAppComponent } from './rd-app.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
console.log(environment);
@NgModule({
  declarations: [
    RdAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RdAppComponent],
})
export class RdAppModule { }

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RdExternalAppRoutingModule,
  ],
  providers: [],
})
export class RdExternalAppModule { }
