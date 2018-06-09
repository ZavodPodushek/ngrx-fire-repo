import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rootRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
