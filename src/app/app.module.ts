import { MaterialComponents } from './material-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { IdeasComponent } from './ideas/ideas.component';
import { IdeaDetailComponent } from './ideas/idea-detail/idea-detail.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { IdeasRoutesModule } from './ideas/ideas-routes.module';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

// import { environment } from '../environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IdeasComponent,
    IdeaDetailComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponents,
    IdeasRoutesModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
