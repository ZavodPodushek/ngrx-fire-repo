import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap, filter } from 'rxjs/operators';
import { ACTION } from '../constants';
import * as fromActions from '../actions';
import { FirebaseAuthService } from '../../../service/firebase-auth.service';

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private _firebase: FirebaseAuthService
    ) { }
    @Effect()
    login$ = this.actions$
        .ofType(ACTION.LOGIN)
        .pipe(
            map(
                action => {
                    console.log('Dydya Dima', action); // log actions
                    return new fromActions.LogoutAction(action); // dispatch Logout Action
                }

            )
        );

}
