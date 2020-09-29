import { favoriConstants } from '../_canstants/favorite.constants'


export function favorite(state = {}, action) {
    console.log(action)
    switch (action.type) {
        case favoriConstants.ADD_FAVORI_REQUEST:
            return {
                ...state,
                loading: true ,
                succes:false,
                error:false
            };

        case favoriConstants.ADD_FAVORI_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false,
                error:false
            }

        case favoriConstants.ADD_FAVORI_FAILURE:
            return {
               
                ...state,
                succes: false,
                loading: false,
                error: action.error
                 
            }



        case favoriConstants.GET_FAVORI_REQUEST:
            return {
                ...state,
                loading: true ,
                succes:false,
                error:false
            };

        case favoriConstants.GET_FAVORI_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false,
                error:false ,
                favoris: action.favoris.data
            }

        case favoriConstants.GET_FAVORI_FAILURE:
            return {
                ...state,
                succes: false,
                loading: false,
                error: action.error
            }

        case favoriConstants.DELETE_FAVORI_REQUEST:
            return {
                ...state,
                succes: false,
                loading: true,
                error:false
            };

        case favoriConstants.DELETE_FAVORI_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false,
                error:false
            }

        case favoriConstants.DELETE_FAVORI_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
                succes: false
            }


        default:
            return state;
    }




}