import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BoilerplateModule } from '../../boilerplate/boilerplate.module';

@NgModule({
  imports: [
    HttpClientModule,
    BoilerplateModule,
  ],
  declarations: [],
  exports: [
    HttpClientModule,
    BoilerplateModule,
  ]

})
export class SharedModule { }
