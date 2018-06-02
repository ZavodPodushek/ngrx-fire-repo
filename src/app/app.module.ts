import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { BoilerplateModule } from './boilerplate/boilerplate.module';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'BERLOGA'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    ProfileModule,
    AuthModule,
    BoilerplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
