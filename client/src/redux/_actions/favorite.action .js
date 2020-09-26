import sendRequest from '../../helpers/sendRquest'
import {favoriConstants } from '../_canstants/favorite.constants'


export const _favoriAction = {
    addToFavori
}


function  addToFavori(data) {
    return dispatch => {
        dispatch({
            type:favoriConstants.ADD_FAVORI_REQUEST
        })
        return sendRequest({
            method: 'POST',
            url: `/favori/`,
            data
        }).then(() => {
            dispatch(

             {   type:favoriConstants.ADD_FAVORI_SUCCESS,


                },
                 
            )
        },
            ({ response }) => {
                dispatch({
                    type: favoriConstants.ADD_FAVORI_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}
 