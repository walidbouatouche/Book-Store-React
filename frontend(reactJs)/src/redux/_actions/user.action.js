import sendRequest from '../../helpers/sendRquest'
import { userConstants } from '../_canstants/user.constants'


export const _userAction = {
    signup,
    login,

}


function signup(data) {
    return dispatch => {
        dispatch({
            type: userConstants.USER_SIGNUP_REQUEST
        })
        return sendRequest({
            method: 'POST',
            url: `/user/signup/`,
            data 
        }).then(() => {
            dispatch({
                type: userConstants.USER_SIGNUP_SUCCESS,

            })
        },
            ({ response }) => {
                dispatch({
                    type: userConstants.USER_SIGNUP_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}


function login(data) {

    return dispatch => {
        dispatch({
            type: userConstants.USER_LOGIN_REQUEST
        })
        return sendRequest({
            method: 'POST',
            url: `/user/login/`,
            data 
        }).then((user) => {
            dispatch({
                type: userConstants.USER_LOGIN_SUCCESS,
                user
            })
        },
            ({ response }) => {
                dispatch({
                    type: userConstants.USER_LOGIN_FAILURE,
                    error: response?.data?.message ?? "pass or mail no valid"
                })
            }
        )
    }
}


