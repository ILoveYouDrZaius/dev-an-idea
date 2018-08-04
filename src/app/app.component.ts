import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AngularFireAuth } from 'angularfire2/auth';
import { tap } from 'rxjs/operators';
import { stateAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    stateAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  username: string;

  constructor(
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.afAuth.authState
      .pipe(
        tap((status) => {
          if (status) {
            this.username = status['displayName'];
          } else {
            this.username = '';
          }
        })
      )
      .subscribe();
  }
}
