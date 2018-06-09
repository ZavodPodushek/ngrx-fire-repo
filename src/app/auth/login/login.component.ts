import { config } from './form-fields';
import {
  Component, OnInit, Inject, EmbeddedViewRef,
  ViewContainerRef, ViewChild, ElementRef
} from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilderBase } from '../../shared/form-builder.model';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from '../../service/firebase-auth.service';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { map, startWith } from 'rxjs/operators';
import { ACTION } from '../auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends FormBuilderBase implements OnInit {
  additional = false;
  title = 'Login';
  subtitle = 'Put your credentials';
  type = false;
  store$: Observable<void>;
  isAuth$: Observable<boolean>;
  constructor(
    private _auth: AuthService,
    @Inject(FormBuilder) fb: FormBuilder,
    public _fireAuth: FirebaseAuthService,
    private _h: HttpClient,
    private _store: Store<any>
  ) {
    super(fb, config);
    this.isAuth$ = this._store.pipe(map(store => store.auth.auth));
  }
  async ngOnInit() {
    console.log(this);
  }
  public async login() {
    this._store.dispatch({ type: ACTION.LOGIN });
  }
}
