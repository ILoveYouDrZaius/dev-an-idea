import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasComponent } from './ideas.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { LoginComponent } from '../login/login.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { MaterialComponents } from '../material-components.module';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { routes } from '../app.routes';
import { AngularFireAuthModule } from '../../../node_modules/angularfire2/auth';
import { AngularFireModule } from '../../../node_modules/angularfire2';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '../../../node_modules/angularfire2/firestore';
import { BrowserAnimationsModule } from '../../../node_modules/@angular/platform-browser/animations';

describe('IdeasComponent', () => {
  let component: IdeasComponent;
  let fixture: ComponentFixture<IdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
    fixture = TestBed.createComponent(IdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
