import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';

const materialModules = [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialComponents { }
