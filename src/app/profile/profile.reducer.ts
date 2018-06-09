export interface State {
    profile: Object;
    users_data: Array<Object>;
}

const ACTION = {
    GET_PROFILE: 'GET_PROFILE',
    UPDATE_PROFILE: 'UPDATE_PROFILE',
    DELETE_PROFILE: 'DELETE_PROFILE',
    SET_USER: 'SET_USER',
    UPDATE_USER: 'UPDATE_USER',
    DELETE_USER: 'DELETE_USER'
};

const initialState: State = {
    profile: {},
    users_data: [{}]
};

export function reducer(state = initialState, action): State {
    switch (action.type) {
        case ACTION.GET_PROFILE: {
            return state;
        }
        case ACTION.UPDATE_PROFILE: {
            return { ...state, ...action.payload };
        }
        default: {
            return state;
        }
    }
}
