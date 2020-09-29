import { userConstants } from '../_canstants/user.constants'


export function user(state = {}, action) {
    console.log(action)
    switch (action.type) {
        case userConstants.USER_SIGNUP_REQUEST:
            return {
                ...state,
                loading: true ,
                succes: false ,
                error:false
            };

        case userConstants.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false ,
                error:false
               
            }
           

        case userConstants.USER_SIGNUP_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
                succes: false
            }
        case userConstants.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true ,
                succes: false ,
                error:false
            };

        case userConstants.USER_LOGIN_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false ,
                error:false,
                userData: action.user.data
            }

        case userConstants.USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                loading: false,
                succes: false,
                error: action.error
            }

 
        default:
            return state;
    }




}