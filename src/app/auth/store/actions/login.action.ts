import { Action } from '@ngrx/store';
import { ACTION } from '../constants';

export class LoginAction implements Action {
    readonly type = ACTION.LOGIN;
    constructor(public payload?: any) { }
}

export class LogoutAction implements Action {
    readonly type = ACTION.LOGOUT;
    constructor(public payload?: any) { }
}

export type Actions = LoginAction | LogoutAction;
