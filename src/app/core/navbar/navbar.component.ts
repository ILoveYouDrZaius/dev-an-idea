import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'DevAnIdea';
  username: string = '';

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.authState
      .pipe(
        tap((status) => {
          if (status) {
            console.log('User logged in');
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
