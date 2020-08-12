import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  exports: [
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule
  ]
})
export class AngMatModule { }
