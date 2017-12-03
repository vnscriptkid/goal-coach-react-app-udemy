import { SIGNED_IN, SIGNED_OUT } from '../constants';

export const logUser = (state = '', action) => {
    switch(action.type) {
        case SIGNED_IN: 
            return action.email;
        case SIGNED_OUT:
            return '';
        default: 
            return state;
    }

}