import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';

const materialModules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialComponents { }
