import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { IdeasComponent } from './ideas.component';

const routes: Routes = [
  {
    path: 'ideas',
    // component: IdeasComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: IdeasComponent
      },
      {
        path: ':id',
        component: IdeaDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class IdeasRoutesModule { }
