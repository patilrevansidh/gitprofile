import {
    SEARCHING, SEARCHING_FAIL, SEARCHING_SUCCESS    
} from './types';

const initState = {
    userName:'',
    loader: undefined,
    list:[],
}

const userName = (state=initState,action) => {
    switch(action.type){
        case SEARCHING:
            return {...state,loader:true};
        case SEARCHING_SUCCESS:
            return {...state,list:action.payload,loader:false};
        case SEARCHING_FAIL:
            return {...state,loader:false};
        default: 
            return {...state,loader:false};
    }
}
export default userName;