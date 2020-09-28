import { favoriConstants } from '../_canstants/favorite.constants'


export function favorite(state = {}, action) {
    console.log(action)
    switch (action.type) {
        case favoriConstants.ADD_FAVORI_REQUEST:
            return {
                ...state,
                loading: true
            };

        case favoriConstants.ADD_FAVORI_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false
            }

        case favoriConstants.ADD_FAVORI_FAILURE:
            return {
                error: action.error,
                loading: false
            }



        case favoriConstants.GET_FAVORI_REQUEST:
            return {
                ...state,
                loading: true
            };

        case favoriConstants.GET_FAVORI_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false,
                favoris: action.favoris.data
            }

        case favoriConstants.GET_FAVORI_FAILURE:
            return {
                error: action.error,
                loading: false
            }

        case favoriConstants.DELETE_FAVORI_REQUEST:
            return {
                ...state,
                loading: true
            };

        case favoriConstants.DELETE_FAVORI_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false
            }

        case favoriConstants.DELETE_FAVORI_FAILURE:
            return {
                error: action.error,
                loading: false
            }


        default:
            return state;
    }




}