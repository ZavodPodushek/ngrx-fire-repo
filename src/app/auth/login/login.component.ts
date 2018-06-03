import { config } from './form-fields';
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilderBase } from '../../shared/form-builder.model';
import { FormBuilder } from '@angular/forms';
import { Observable } from '@firebase/util';
import { FirebaseAuthService } from '../../service/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends FormBuilderBase implements OnInit {
  showLinks = false;
  title = 'Login';
  subtitle = 'Put your credentials';
  type = false;
  user$: any;
  constructor(
    private _auth: AuthService,
    @Inject(FormBuilder) fb: FormBuilder,
    public _fireAuth: FirebaseAuthService
  ) {
    super(fb, config);
  }

  ngOnInit() {
    console.log('User ', this._fireAuth.authState);
  }
  public async login() {
    const result = await this._fireAuth.regularSignIn(this.form.value);
    console.log(result);
  }
}
