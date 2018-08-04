import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaDetailComponent } from './idea-detail.component';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { IdeasComponent } from '../ideas.component';
import { LoginComponent } from '../../login/login.component';
import { NotFoundComponent } from '../../core/not-found/not-found.component';
import { MaterialComponents } from '../../material-components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';

describe('IdeaDetailComponent', () => {
  let component: IdeaDetailComponent;
  let fixture: ComponentFixture<IdeaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IdeaDetailComponent,
        IdeasComponent,
        LoginComponent,
        NotFoundComponent
      ],
      imports: [
        MaterialComponents,
        RouterTestingModule.withRoutes(
          routes
        ),
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
