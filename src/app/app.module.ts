import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { CustomdirDirective } from './customdir.directive';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    CustomdirDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
