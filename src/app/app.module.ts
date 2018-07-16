import { MaterialComponents } from './material-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { IdeasComponent } from './ideas/ideas.component';
import { IdeaDetailComponent } from './ideas/idea-detail/idea-detail.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { IdeasRoutesModule } from './ideas/ideas-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IdeasComponent,
    IdeaDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponents,
    IdeasRoutesModule,
    AppRoutes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
