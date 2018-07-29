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

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.authState
      .pipe(
        tap((status)=>{
          if (status) {
            console.log('User logged in');
          } else {
            console.log('User not logged in');
          }
        })
      )
      .subscribe();
  }

}
