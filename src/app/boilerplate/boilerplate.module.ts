import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DevPageComponent } from './dev-page/dev-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    CardComponent,
    DevPageComponent],
  exports: [
    CardComponent,
    DevPageComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class BoilerplateModule { }
