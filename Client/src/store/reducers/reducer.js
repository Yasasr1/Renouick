import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    email: null,
    userType: null,
    error: null,
    loading: false,
    user: {
        firstName: '',
        lastName: '',
        birthday: '',
        address: '',
        email: '',
        password: '',
        contactNumber: '',
        facebook: '',
        twitter: '',
        profilePicUrl: '',
        profilePicId: ''
    }
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
        case actionTypes.STORE_USER:
            return ({
                ...state,
                user: {
                    firstName: action.user.firstName,
                    lastName: action.user.lastName,
                    birthday: action.user.birthday,
                    address: action.user.address,
                    email: action.user.email,
                    password: action.user.password,
                    contactNumber: action.user.contactNumber,
                    facebook: action.user.facebook,
                    twitter:  action.user.twitter,
                    profilePicUrl:  action.user.profilePicUrl,
                    profilePicId:  action.user.profilePicId

                }
            })
            
            

        default:
            return state
    }
};

export default reducer;