import userService from './service';
import { SEARCHING, SEARCHING_FAIL, SEARCHING_SUCCESS } from './types';

const searchUser = (user) =>{
    return async dispatchEvent=>{
        dispatchEvent({type:SEARCHING});
        try {            
            const response = await userService.searchUserName(user);
            dispatchEvent({type:SEARCHING_SUCCESS,payload:response.items})
        } catch (error) {
            console.log("error",error)
            dispatchEvent({type:SEARCHING_FAIL})
        }
    }
}

export default searchUser;