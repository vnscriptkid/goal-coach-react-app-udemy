import {SIGNED_IN, SIGNED_OUT} from '../constants';

export const logUserIn = (email) => {
    // console.log('action', email);
    return {
        type: SIGNED_IN,
        email
    }
}

export const logUserOut = () => {
    return {
        type: SIGNED_OUT        
    }
}