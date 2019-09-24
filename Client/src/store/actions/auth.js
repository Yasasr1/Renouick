//action creaters for authentication
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (inputtoken, inputemail, inputuserType) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: inputtoken,
        email: inputemail,
        userType: inputuserType
    };
};

export const authFail = (inputerror) => {

    //to handle the error if Server is offline
    let err = "No responce from server";
    if(inputerror)
        err = inputerror.data.msg;

    return {
        type: actionTypes.AUTH_FAIL,
        error: err
    };
};

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTIme) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        }, expirationTIme * 1000)
    }
}

//holds async code doing the authentication
export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        }

        //getting auth token from server 
        axios.post('http://localhost:4000/auth',authData)
        .then(response => {
            console.log(response);
            //look at the console output to find where the responce values are
            dispatch(authSuccess(response.data.token,response.data.user.email,response.data.user.userType));
            dispatch(checkAuthTimeout(response.data.user.expiresIn));
        })
        .catch(err => {
            console.log({...err});
            dispatch(authFail(err.response));
        })
    }
}