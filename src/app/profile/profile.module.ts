import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './profile.reducer';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    StoreModule.forFeature('profile', reducer)
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class ProfileModule { }
