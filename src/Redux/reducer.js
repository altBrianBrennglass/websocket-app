import initialState from './initialState';
import {LOGGEDIN, USERDATA} from './constants';

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case USERDATA: 
            return Object.assign({}, state, action.userData);
        case LOGGEDIN:
            return Object.assign({}, state, {loggedIn: !state.loggedIn})
        default: 
            return state
    }
}

export default reducer;