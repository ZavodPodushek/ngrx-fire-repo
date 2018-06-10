import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './profile.reducer';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule,
    StoreModule.forFeature('profile', reducer)
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class ProfileModule { }
