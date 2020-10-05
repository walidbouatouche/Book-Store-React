import React, { useEffect } from 'react'


import { useSelector, useDispatch } from 'react-redux'
import { _userAction } from '../../redux/_actions/user.action'

import UserForm from './userInfoForm'

const UserProfil = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(_userAction.getUserData())

    }, [])
    const editUser=(userData)=>{
        dispatch(_userAction.updateUser(userData))
        
    }
    return (<div>
        {state.user._userData && <UserForm  _editUser={editUser} _user={state.user._userData}></UserForm>}
       
    </div>)


}


export default UserProfil