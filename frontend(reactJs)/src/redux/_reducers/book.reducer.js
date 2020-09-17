import { bookConstants } from '../_canstants/book.constants'


export function book(state = {}, action) {
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

        case bookConstants.GET_BOOKS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case bookConstants.GET_BOOKS_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false,
                books: action.books.data
            }

        case bookConstants.GET_BOOKS_FAILURE:
            return {
                error: action.error,
                loading: false
            }

        case bookConstants.DELETE_BOOK_REQUEST:
            return {
                ...state,
                loading: true
            };

        case bookConstants.DELETE_BOOK_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false,

            }

        case bookConstants.DELETE_BOOK_FAILURE:
            return {
                error: action.error,
                loading: false
            }



        default:
            return state;
    }




}