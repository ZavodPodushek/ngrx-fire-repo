import * as fromActions from '../actions';
import { ACTION } from '../constants';

export interface State {
    auth: boolean;
    fullname?: string;
}

const initialState: State = {
    auth: false,
    fullname: null
};

export function reducer(
    state = initialState,
    action: fromActions.Actions
): State {
    switch (action.type) {
        case ACTION.LOGIN: {
            return {
                ...state,
                auth: true
            };
        }
        case ACTION.LOGOUT: {
            return { ...state, auth: false };
        }
        default: {
            return state;
        }
    }
}

