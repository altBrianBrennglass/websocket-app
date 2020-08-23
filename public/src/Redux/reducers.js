import {STOREONREGISTER} from './constants';
import initialState from './initialState';

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case STOREONREGISTER:
            const {_id, username, bioPage} = action.userData;
            return Object.assign({}, 
                                    state, {userData: { _id, username}}, {activePage: {bioPage: bioPage}});
            break;
        default:
            console.log('default');
            return state;
    }
}

export default reducer;