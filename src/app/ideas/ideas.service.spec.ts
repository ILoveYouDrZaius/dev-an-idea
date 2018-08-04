import { TestBed, inject } from '@angular/core/testing';

import { IdeasService } from './ideas.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

describe('IdeasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdeasService],
      imports: [
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
      ]
    });
  });

  it('should be created', inject([IdeasService], (service: IdeasService) => {
    expect(service).toBeTruthy();
  }));
});
