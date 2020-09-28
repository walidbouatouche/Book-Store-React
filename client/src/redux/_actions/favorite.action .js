import sendRequest from '../../helpers/sendRquest'
import { favoriConstants } from '../_canstants/favorite.constants'


export const _favoriAction = {
    addToFavori,
    getMyFavori,
    deleteMyFavori
}


function addToFavori(data) {
    return dispatch => {
        dispatch({
            type: favoriConstants.ADD_FAVORI_REQUEST
        })
        return sendRequest({
            method: 'POST',
            url: `/favori/`,
            data
        }).then(() => {
            dispatch(

                {
                    type: favoriConstants.ADD_FAVORI_SUCCESS,


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


function getMyFavori(data) {
    return dispatch => {
        dispatch({
            type: favoriConstants.DELETE_FAVORI_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/favori/`

        }).then((favoris) => {
            dispatch(
                {
                    type: favoriConstants.GET_FAVORI_SUCCESS,
                    favoris

                }

            )
        },
            ({ response }) => {
                dispatch({
                    type: favoriConstants.DELETE_FAVORI_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}


function deleteMyFavori(favoriteId) {
    return dispatch => {
        dispatch({
            type: favoriConstants.GET_FAVORI_REQUEST
        })
        return sendRequest({
            method: 'DELETE',
            url: `/favori/${favoriteId}`

        }).then((favoris) => {
            dispatch(


                getMyFavori()
            )
        },
            ({ response }) => {
                dispatch({
                    type: favoriConstants.GET_FAVORI_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}
