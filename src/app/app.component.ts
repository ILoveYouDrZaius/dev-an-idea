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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('state', [
      state('inactive', style({
        opacity: 0
      })),
      state('active',   style({
        opacity: 100
      })),
      transition('inactive => active', animate('0.2s ease-in')),
      transition('active => inactive', animate('0.2s ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  private username: string;

  constructor(
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.afAuth.authState
      .pipe(
        tap((status) => {
          if (status) {
            console.log('User logged in from APP COMPONENT!!!');
            console.log(status.uid);
            this.username = status['displayName'];
          } else {
            console.log('User not logged in');
          }
        })
      )
      .subscribe();
  }
}
