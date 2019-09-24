import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    email: null,
    userType: null,
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type ) {
        case actionTypes.AUTH_START:
            return updateObject(state, {error: null, loading: true})

        case actionTypes.AUTH_SUCCESS:
            return updateObject(
                state,
                {
                    token: action.token,
                    email: action.email,
                    userType: action.userType,
                    error: null,
                    loading: false
                }
            )
        case actionTypes.AUTH_FAIL:
            return updateObject(
                state,
                {
                    error: action.error,
                    loading: false
                }
            )
        case actionTypes.AUTH_LOGOUT:
            return updateObject(
                state,
                {
                    token: null,
                    email: null,
                    userType: null
                }
            )    

        default:
            return state
    }
};

export default reducer;