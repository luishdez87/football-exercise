import { NgModule } from "@angular/core";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class MaterialModule {}
