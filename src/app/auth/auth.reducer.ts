export interface State {
    auth: boolean;
    fullname?: string;
}

export const ACTION = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
};

const initialState: State = {
    auth: false,
    fullname: null
};

export function reducer(state = initialState, action): State {
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
