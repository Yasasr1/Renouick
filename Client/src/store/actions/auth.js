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
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userType');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

//checks the experiation time and dispatch logout action when time is up
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        }, expirationTime * 1000)
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

            //find the time when token expires
            const expirationDate = new Date(new Date().getTime() + response.data.user.expiresIn * 1000);

            //storing loggedin info in cookies to use if app is reloaded
            localStorage.setItem('token',response.data.token );
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('email', response.data.user.email);
            localStorage.setItem('userType', response.data.user.userType);

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

//action dispatcher to check local storage for a token and dispatch login action if there is a token
export const authCheckState = () => {
     return dispatch => {
         const token = localStorage.getItem('token');
         if(!token) {
             dispatch(authLogout());
         } else {
             const expirationDate = new Date(localStorage.getItem('expirationDate'));
        
             if (expirationDate <= new Date()) {
                dispatch(authLogout());
            } else {
                const email = localStorage.getItem('email');
                const userType = localStorage.getItem('userType');
                dispatch(authSuccess(token,email,userType));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
             }
         }
     }
}