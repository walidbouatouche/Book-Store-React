import { bookConstants } from '../_canstants/book.constants'


export function user(state = {}, action) {
    console.log(action)
    switch (action.type) {
        case bookConstants.ADD_BOOK_REQUEST:
            return {
                ...state,
                loading: true
            };

        case bookConstants.ADD_BOOK_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false
            }

        case bookConstants.ADD_BOOK_FAILURE:
            return {
                error: action.error,
                loading: false
            }



        default:
            return state;
    }




}