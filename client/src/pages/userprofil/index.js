import React,{useEffect} from 'react'


import { useSelector, useDispatch } from 'react-redux'
import { _userAction } from '../../redux/_actions/user.action'


const UserProfil=()=>{ 
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(_userAction.getUserData())

    },[])
    return(<div>
{state.user._userData && JSON.stringify(state.user._userData)}

        <p>my profile</p>
    </div>)


}


export default UserProfil