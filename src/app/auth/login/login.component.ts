import { config } from './form-fields';
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilderBase } from '../../shared/form-builder.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends FormBuilderBase implements OnInit {
  type = false;
  constructor(
    private _auth: AuthService,
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    super(fb, config);
  }
  toggleVis() {
    this.type = !this.type;
  }

  ngOnInit() {}
  login() {
    console.log('Login ', this.form.value);
    return false;
  }
}
