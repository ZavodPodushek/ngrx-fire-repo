import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material/material.module';
import { AuthService } from '../service/auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoilerplateModule } from '../boilerplate/boilerplate.module';
import { FirebaseAuthService } from '../service/firebase-auth.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    BoilerplateModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService, FirebaseAuthService]
})
export class AuthModule { }
