import { MaterialComponents } from './material-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { IdeasComponent } from './ideas/ideas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IdeasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
