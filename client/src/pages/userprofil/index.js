import React, { useEffect } from 'react'


import { useSelector, useDispatch } from 'react-redux'
import { _userAction } from '../../redux/_actions/user.action'

import UserForm from './userInfoForm'
import Auth from '../../helpers/auth'
const UserProfil = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(_userAction.getUserData())

    }, [])

    const editUser = async (userData) => {
        await dispatch(_userAction.updateUser(userData))

        if (state.user.succes) {
            Auth.setImgUrl(userData.imgUrl)
            
            window.location.reload();

        }

    }
  
    return (<div>
        {state.user._userData && <UserForm _editUser={editUser} _user={state.user._userData}></UserForm>}
    </div>)


}


export default UserProfil