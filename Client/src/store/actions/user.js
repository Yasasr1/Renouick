//action creaters for getting customer info and saving 
import * as actionTypes from './actionTypes';
import axios from 'axios';


export const storeUser = (user) => {
    return {
        type: actionTypes.STORE_USER,
        user: user
    };
};

//holds async code doing the authentication
export const getUser = (email, token) => {
    return dispatch => {
        
        //getting user info from backend
        axios.get('http://localhost:4000/customer/getInfo',{
            params: {
                email: email
            },
            headers: {
                'x-auth-token': token
            }
        })
        .then(response => {
            dispatch(storeUser(response.data[0]));
        })
        .catch(err => {
            console.log({...err});
        })
    }
}

export const getWorker = (email, token) => {
    return dispatch => {
        
        //getting worker info from backend
        axios.get('http://localhost:4000/worker/getInfo',{
            params: {
                email: email
            },
            headers: {
                'x-auth-token': token
            }
        })
        .then(response => {
            dispatch(storeUser(response.data[0]));
        })
        .catch(err => {
            console.log({...err});
        })
    }
}

